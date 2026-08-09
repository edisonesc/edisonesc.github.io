#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error('Usage: node ua-arch-analyze.js <input.json> <output.json>');
  process.exit(1);
}

let data;
try {
  data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
} catch (e) {
  console.error('Failed to read/parse input:', e.message);
  process.exit(1);
}

const { fileNodes, importEdges, allEdges } = data;

// ─── A. Directory Grouping ───────────────────────────────────────────────────
const filePaths = fileNodes.map(n => n.filePath);

// Find common prefix
function commonPrefix(paths) {
  if (!paths.length) return '';
  const parts = paths.map(p => p.split('/'));
  const min = Math.min(...parts.map(p => p.length));
  let prefix = [];
  for (let i = 0; i < min - 1; i++) {
    const seg = parts[0][i];
    if (parts.every(p => p[i] === seg)) prefix.push(seg);
    else break;
  }
  return prefix.length ? prefix.join('/') + '/' : '';
}

const prefix = commonPrefix(filePaths);

function getGroup(filePath) {
  let rel = filePath.startsWith(prefix) ? filePath.slice(prefix.length) : filePath;
  // Handle dot-prefixed dirs like .github, .ua
  const parts = rel.split('/');
  if (parts.length === 1) return 'root';
  return parts[0];
}

const directoryGroups = {};
for (const node of fileNodes) {
  const group = getGroup(node.filePath);
  if (!directoryGroups[group]) directoryGroups[group] = [];
  directoryGroups[group].push(node.id);
}

// ─── B. Node Type Grouping ───────────────────────────────────────────────────
const nodeTypeGroups = {};
for (const node of fileNodes) {
  if (!nodeTypeGroups[node.type]) nodeTypeGroups[node.type] = [];
  nodeTypeGroups[node.type].push(node.id);
}

// ─── C. Import Adjacency / Fan-in / Fan-out ──────────────────────────────────
const fanOut = {};
const fanIn = {};
for (const node of fileNodes) {
  fanOut[node.id] = 0;
  fanIn[node.id] = 0;
}
for (const edge of importEdges) {
  if (edge.type === 'imports') {
    fanOut[edge.source] = (fanOut[edge.source] || 0) + 1;
    fanIn[edge.target] = (fanIn[edge.target] || 0) + 1;
  }
}

// ─── D. Cross-Category Dependency Analysis ───────────────────────────────────
const crossMap = {};
for (const edge of allEdges) {
  const srcNode = fileNodes.find(n => n.id === edge.source);
  const tgtNode = fileNodes.find(n => n.id === edge.target);
  if (!srcNode || !tgtNode) continue;
  const key = `${srcNode.type}|${tgtNode.type}|${edge.type}`;
  crossMap[key] = (crossMap[key] || 0) + 1;
}
const crossCategoryEdges = Object.entries(crossMap).map(([key, count]) => {
  const [fromType, toType, edgeType] = key.split('|');
  return { fromType, toType, edgeType, count };
});

// ─── E. Inter-Group Import Frequency ─────────────────────────────────────────
const nodeIdToGroup = {};
for (const node of fileNodes) {
  nodeIdToGroup[node.id] = getGroup(node.filePath);
}

const interGroupMap = {};
for (const edge of importEdges) {
  if (edge.type !== 'imports') continue;
  const fromGroup = nodeIdToGroup[edge.source];
  const toGroup = nodeIdToGroup[edge.target];
  if (!fromGroup || !toGroup || fromGroup === toGroup) continue;
  const key = `${fromGroup}|${toGroup}`;
  interGroupMap[key] = (interGroupMap[key] || 0) + 1;
}
const interGroupImports = Object.entries(interGroupMap).map(([key, count]) => {
  const [from, to] = key.split('|');
  return { from, to, count };
}).sort((a, b) => b.count - a.count);

// ─── F. Intra-Group Import Density ───────────────────────────────────────────
const groupEdgeCounts = {}; // { group: { internal: 0, total: 0 } }
for (const group of Object.keys(directoryGroups)) {
  groupEdgeCounts[group] = { internalEdges: 0, totalEdges: 0 };
}
for (const edge of importEdges) {
  if (edge.type !== 'imports') continue;
  const fromGroup = nodeIdToGroup[edge.source];
  const toGroup = nodeIdToGroup[edge.target];
  if (fromGroup) groupEdgeCounts[fromGroup] = groupEdgeCounts[fromGroup] || { internalEdges: 0, totalEdges: 0 };
  if (toGroup) groupEdgeCounts[toGroup] = groupEdgeCounts[toGroup] || { internalEdges: 0, totalEdges: 0 };
  if (fromGroup) groupEdgeCounts[fromGroup].totalEdges++;
  if (toGroup && toGroup !== fromGroup) groupEdgeCounts[toGroup].totalEdges++;
  if (fromGroup && toGroup && fromGroup === toGroup) {
    groupEdgeCounts[fromGroup].internalEdges++;
  }
}
const intraGroupDensity = {};
for (const [group, counts] of Object.entries(groupEdgeCounts)) {
  intraGroupDensity[group] = {
    internalEdges: counts.internalEdges,
    totalEdges: counts.totalEdges,
    density: counts.totalEdges > 0 ? parseFloat((counts.internalEdges / counts.totalEdges).toFixed(3)) : 0
  };
}

// ─── G. Directory Pattern Matching ───────────────────────────────────────────
const dirPatterns = {
  routes: 'api', api: 'api', controllers: 'api', endpoints: 'api', handlers: 'api',
  serializers: 'api', blueprints: 'api', routers: 'api', controller: 'api',
  services: 'service', core: 'service', lib: 'service', domain: 'service', logic: 'service',
  composables: 'service', signals: 'service', mailers: 'service', jobs: 'service', channels: 'service',
  internal: 'service',
  models: 'data', db: 'data', data: 'data', persistence: 'data', repository: 'data',
  entities: 'data', migrations: 'data', entity: 'data', sql: 'data', database: 'data', schema: 'data',
  components: 'ui', views: 'ui', pages: 'ui', ui: 'ui', layouts: 'ui', screens: 'ui',
  middleware: 'middleware', plugins: 'middleware', interceptors: 'middleware', guards: 'middleware',
  utils: 'utility', helpers: 'utility', common: 'utility', shared: 'utility', tools: 'utility',
  pkg: 'utility', templatetags: 'utility',
  config: 'config', constants: 'config', env: 'config', settings: 'config',
  management: 'config', commands: 'config',
  '__tests__': 'test', test: 'test', tests: 'test', spec: 'test', specs: 'test',
  e2e: 'test',
  types: 'types', interfaces: 'types', schemas: 'types', contracts: 'types', dtos: 'types',
  dto: 'types', request: 'types', response: 'types',
  hooks: 'hooks',
  store: 'state', state: 'state', reducers: 'state', actions: 'state', slices: 'state',
  assets: 'assets', static: 'assets', public: 'assets',
  docs: 'documentation', documentation: 'documentation', wiki: 'documentation',
  deploy: 'infrastructure', deployment: 'infrastructure', infra: 'infrastructure',
  infrastructure: 'infrastructure', k8s: 'infrastructure', kubernetes: 'infrastructure',
  helm: 'infrastructure', charts: 'infrastructure', terraform: 'infrastructure', tf: 'infrastructure',
  docker: 'infrastructure',
  '.github': 'ci-cd', '.gitlab': 'ci-cd', '.circleci': 'ci-cd',
  bin: 'entry', cmd: 'entry',
  enums: 'types',
  providers: 'service',
  environments: 'config',
  openspec: 'documentation',
  '.ua': 'config'
};

const patternMatches = {};
for (const group of Object.keys(directoryGroups)) {
  const lc = group.toLowerCase();
  patternMatches[group] = dirPatterns[lc] || 'unknown';
}

// File-level pattern overrides
const filePatternOverrides = {};
for (const node of fileNodes) {
  const fp = node.filePath;
  const name = path.basename(fp);
  if (/\.(test|spec)\.[^.]+$/.test(name) || /^test_/.test(name) || /_test\.[^.]+$/.test(name) || /Test\.[^.]+$/.test(name)) {
    filePatternOverrides[node.id] = 'test';
  } else if (/\.d\.ts$/.test(name)) {
    filePatternOverrides[node.id] = 'types';
  } else if (/^(Dockerfile|docker-compose)/.test(name)) {
    filePatternOverrides[node.id] = 'infrastructure';
  } else if (/\.(tf|tfvars)$/.test(name)) {
    filePatternOverrides[node.id] = 'infrastructure';
  } else if (/\.(md|rst)$/.test(name)) {
    filePatternOverrides[node.id] = 'documentation';
  } else if (/\.(sql)$/.test(name)) {
    filePatternOverrides[node.id] = 'data';
  } else if (/\.(graphql|gql|proto)$/.test(name)) {
    filePatternOverrides[node.id] = 'types';
  } else if (name === 'Makefile') {
    filePatternOverrides[node.id] = 'infrastructure';
  } else if (/^(karma\.conf|protractor\.conf)/.test(name)) {
    filePatternOverrides[node.id] = 'test';
  }
}

// ─── H. Deployment Topology Detection ────────────────────────────────────────
const infraFiles = [];
let hasDockerfile = false, hasCompose = false, hasK8s = false, hasTerraform = false, hasCI = false;
for (const node of fileNodes) {
  const fp = node.filePath;
  const name = path.basename(fp);
  if (name === 'Dockerfile' || name.startsWith('Dockerfile.')) { hasDockerfile = true; infraFiles.push(fp); }
  if (name.startsWith('docker-compose')) { hasCompose = true; infraFiles.push(fp); }
  if (fp.includes('k8s') || fp.includes('kubernetes') || name.endsWith('.yaml') && fp.includes('helm')) { hasK8s = true; infraFiles.push(fp); }
  if (name.endsWith('.tf') || name.endsWith('.tfvars')) { hasTerraform = true; infraFiles.push(fp); }
  if (fp.includes('.github/workflows') || fp.includes('.gitlab-ci') || name === 'Jenkinsfile') { hasCI = true; infraFiles.push(fp); }
}
const deploymentTopology = { hasDockerfile, hasCompose, hasK8s, hasTerraform, hasCI, infraFiles: [...new Set(infraFiles)] };

// ─── I. Data Pipeline Detection ───────────────────────────────────────────────
const schemaFiles = fileNodes.filter(n => /\.(graphql|gql|proto|sql)$/.test(n.filePath)).map(n => n.filePath);
const migrationFiles = fileNodes.filter(n => n.filePath.includes('migration')).map(n => n.filePath);
const dataModelFiles = fileNodes.filter(n => n.filePath.includes('/models/')).map(n => n.filePath);
const apiHandlerFiles = fileNodes.filter(n => n.filePath.includes('/routes/') || n.filePath.includes('/controllers/')).map(n => n.filePath);
const dataPipeline = { schemaFiles, migrationFiles, dataModelFiles, apiHandlerFiles };

// ─── J. Documentation Coverage ───────────────────────────────────────────────
const groupsWithDocs = new Set();
for (const node of fileNodes) {
  if (node.type === 'document' || /\.(md|rst)$/.test(node.filePath)) {
    const group = getGroup(node.filePath);
    groupsWithDocs.add(group);
  }
}
const totalGroups = Object.keys(directoryGroups).length;
const undocumentedGroups = Object.keys(directoryGroups).filter(g => !groupsWithDocs.has(g));
const docCoverage = {
  groupsWithDocs: groupsWithDocs.size,
  totalGroups,
  coverageRatio: parseFloat((groupsWithDocs.size / totalGroups).toFixed(2)),
  undocumentedGroups
};

// ─── K. Dependency Direction ─────────────────────────────────────────────────
const pairCounts = {};
for (const edge of importEdges) {
  if (edge.type !== 'imports') continue;
  const from = nodeIdToGroup[edge.source];
  const to = nodeIdToGroup[edge.target];
  if (!from || !to || from === to) continue;
  const key = `${from}|${to}`;
  pairCounts[key] = (pairCounts[key] || 0) + 1;
}
const dependencyDirection = [];
const seen = new Set();
for (const [key, count] of Object.entries(pairCounts)) {
  const [a, b] = key.split('|');
  const reverseKey = `${b}|${a}`;
  if (seen.has(reverseKey)) continue;
  seen.add(key);
  const reverseCount = pairCounts[reverseKey] || 0;
  if (count >= reverseCount) {
    dependencyDirection.push({ dependent: a, dependsOn: b });
  } else {
    dependencyDirection.push({ dependent: b, dependsOn: a });
  }
}

// ─── File Stats ───────────────────────────────────────────────────────────────
const filesPerGroup = {};
for (const [group, ids] of Object.entries(directoryGroups)) {
  filesPerGroup[group] = ids.length;
}
const nodeTypeCounts = {};
for (const [type, ids] of Object.entries(nodeTypeGroups)) {
  nodeTypeCounts[type] = ids.length;
}
const fileStats = {
  totalFileNodes: fileNodes.length,
  filesPerGroup,
  nodeTypeCounts
};

// ─── Output ───────────────────────────────────────────────────────────────────
const result = {
  scriptCompleted: true,
  directoryGroups,
  nodeTypeGroups,
  crossCategoryEdges,
  interGroupImports,
  intraGroupDensity,
  patternMatches,
  filePatternOverrides,
  deploymentTopology,
  dataPipeline,
  docCoverage,
  dependencyDirection,
  fileStats,
  fileFanIn: fanIn,
  fileFanOut: fanOut
};

try {
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log('Analysis complete. Output written to', outputPath);
} catch (e) {
  console.error('Failed to write output:', e.message);
  process.exit(1);
}
