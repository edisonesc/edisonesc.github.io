export const AOEntries = (
  user,
  userSample,
  technologiesSample,
  projectsSample,
  expSample,
) => [
  {
    id: 'introduction',
    label: 'Header / Introduction',
    description: 'The landing hero — renders name, position, social links, and CV download from the static user provider.',
    cssSelector: '.introduction',
    dataSource: {
      providerFile: 'providers/user.provider.ts',
      exportName: 'user',
      modelType: 'User',
      sampleJson: userSample,
    },
    pipeline: [
      { label: 'Data', detail: 'user.provider.ts → user: User' },
      { label: 'Bind', detail: '{{ user.name }}, {{ user.position }}' },
      {
        label: 'Template',
        detail: 'Intro layout + social links + CV button',
      },
      { label: 'UI', detail: '.introduction hero section' },
    ],
    sourceSnippet: `// home.component.ts
import { user } from 'src/app/providers/user.provider';

user: User = user;

// home.component.html
<h1 class="intro-name">{{ user?.name }}</h1>
<p class="intro-position">{{ user?.position }}</p>`,
  },
  {
    id: 'tech-section',
    label: 'Technologies',
    description: 'Displays tools and skills grouped by domain — Frontend, Backend, DevOps, and Exploratory — each sourced from its own static array.',
    cssSelector: '.tech-section',
    dataSource: {
      providerFile: 'technologies.provider.ts',
      exportName: 'FRONTEND/BACKEND/DEVOPS/EXPLORATORY_TECHNOLOGIES',
      modelType: 'Technology[]',
      sampleJson: {
        groupKeys: ['Frontend', 'Backend', 'DevOps', 'Exploratory'],
        technologies_provider: technologiesSample,

        note: 'Directly populated from group technology arrays',
      },
    },
    pipeline: [
      {
        label: 'Data',
        detail: 'Group arrays from technologies.provider.ts',
      },
      {
        label: 'Group',
        detail: 'groupTechnologies { Frontend, Backend, DevOps, Exploratory }',
      },
      { label: 'Render', detail: '*ngFor groupKeys → *ngFor tech items' },
      { label: 'UI', detail: '.tech-section with dot pattern' },
    ],
    sourceSnippet: `// home.component.ts
groupTechnologies = {
  Frontend: FRONTEND_TECHNOLOGIES,
  Backend: BACKEND_TECHNOLOGIES,
  DevOps: DEVOPS_TECHNOLOGIES,
  Exploratory: EXPLORATORY_TECHNOLOGIES,
};

// home.component.html
*ngFor="let groupKey of getTechnologyGroupKeys()"
  *ngFor="let item of groupTechnologies[groupKey]"`,
  },
  {
    id: 'projects-section',
    label: 'Projects',
    description: 'A grid of personal and professional projects — each card delegates to a child component that also checks whether the live URL is still up.',
    cssSelector: '.projects-section',
    dataSource: {
      providerFile: 'providers/projects.provider.ts',
      exportName: 'projects',
      modelType: 'Project[]',
      sampleJson: projectsSample,
    },
    pipeline: [
      { label: 'Data', detail: 'projects: Project[] (static import)' },
      {
        label: 'Filter',
        detail: 'getDisplayedProject() → full list or slice',
      },
      {
        label: 'Iterate',
        detail: '*ngFor="let project of getDisplayedProject()"',
      },
      {
        label: 'Delegate',
        detail: '<app-project-item [project]="project">',
      },
      { label: 'UI', detail: 'CSS grid + collapsed/fullView toggle' },
    ],
    sourceSnippet: `// home.component.ts
import { projects } from './../../providers/projects.provider';
projects: Project[] = projects;

getDisplayedProject() {
  return this.projects;
}

// home.component.html
<app-project-item
  *ngFor="let project of getDisplayedProject()"
  [project]="project">
</app-project-item>

// project-item.component.ts
@Input('project') project: Project;
// checks liveness via fetch(project.project_url)`,
  },
  {
    id: 'experiences-section',
    label: 'Experiences',
    description: 'Work and education history rendered in a two-column timeline. Entries are filtered by type and tenure is calculated with native Date arithmetic — no date libraries.',
    cssSelector: '.experiences-section',
    dataSource: {
      providerFile: 'providers/experience.provider.ts',
      exportName: 'experiences',
      modelType: 'Experience[]',
      sampleJson: expSample,
    },
    pipeline: [
      {
        label: 'Data',
        detail: 'experience.provider.ts → experiences: Experience[]',
      },
      { label: 'Filter', detail: 'Separate into work_experiences + education_experiences' },
      {
        label: 'Group',
        detail: 'experiences = [work_experiences, education_experiences]',
      },
      { label: 'Delegate', detail: '<app-timeline-item [experiences]>' },
      { label: 'Layout', detail: 'Two-column grid: Work | Education (.timeline-grid, .timeline-col)' },
      { label: 'Entry', detail: 'Type badge via getTypeLabel(), collapsible responsibilities' },
      { label: 'Range', detail: 'app-timeline-range: native Date arithmetic for tenure' },
    ],
    sourceSnippet: `// home.component.ts
work_experiences = experiences.filter(e =>
  [WORK_TYPE.DIRECT, WORK_TYPE.DIRECT_MULTI,
   WORK_TYPE.INTERN, WORK_TYPE.OUTSOURCING].includes(e.type)
);
education_experiences = experiences.filter(e =>
  e.type == WORK_TYPE.EDUCATION
);
experiences = [this.work_experiences, this.education_experiences];

// home.component.html
<app-timeline-item [experiences]="experiences">

// timeline-item.component.html
<div class="timeline-grid">
  <div class="timeline-col" *ngFor>
    <h3 class="timeline-col-label">Work / Education</h3>
    <div class="timeline-entry" *ngFor="let experience of item">
      <span class="timeline-badge">
        {{ getTypeLabel(experience.type) }}
      </span>
      <app-timeline-range [started_at] [finished_at]>
    </div>
  </div>
</div>

// timeline-range: native Date arithmetic (no moment.js)`,
  },
  {
    id: 'info-section',
    label: 'Contact Information',
    description: 'A simple contact footer — pulls email and address straight from the user provider and renders them in a centered layout.',
    cssSelector: '.info-section',
    dataSource: {
      providerFile: 'providers/user.provider.ts',
      exportName: 'user',
      modelType: 'User (email, address)',
      sampleJson: { email: user.email, address: user.address },
    },
    pipeline: [
      { label: 'Data', detail: 'user.email, user.address' },
      { label: 'Bind', detail: '{{ user?.email }}, {{ user?.address }}' },
      { label: 'UI', detail: '.info-section centered layout' },
    ],
    sourceSnippet: `// home.component.html
<p class="info-item">{{ user?.email }}</p>
<p class="info-item">{{ user?.address }}</p>

// Data comes from user.provider.ts`,
  },
];

export const AOEntriesV2 = (user, userSample, projectsSample, expSample) => [
  {
    id: 'introduction',
    label: 'Header / Introduction',
    cssSelector: '.introduction',

    dataSource: {
      providerFile: 'providers/user.provider.ts',
      exportName: 'user',
      modelType: 'User',
      sampleJson: userSample,
    },

    pipeline: [
      {
        label: 'CONFIG SOURCE',
        detail: 'Static user provider import (User model)',
      },
      {
        label: 'COMPONENT STATE',
        detail: 'user assigned in home.component.ts',
      },
      {
        label: 'TEMPLATE BINDING',
        detail: 'Property interpolation (name, position)',
      },
      {
        label: 'PRESENTATION LAYER',
        detail: 'Hero layout + social links + CV action',
      },
    ],

    sourceSnippet: `// home.component.ts
import { user } from 'src/app/providers/user.provider';
user: User = user;

// home.component.html
<h1>{{ user?.name }}</h1>
<p>{{ user?.position }}</p>`,
  },

  {
    id: 'tech-section',
    label: 'Technologies',
    cssSelector: '.tech-section',

    dataSource: {
      providerFile: 'technologies.provider.ts',
      exportName: 'FRONTEND/BACKEND/DEVOPS/EXPLORATORY_TECHNOLOGIES',
      modelType: 'Technology[]',
      sampleJson: {
        groupKeys: ['Frontend', 'Backend', 'DevOps', 'Exploratory'],
      },
    },

    pipeline: [
      {
        label: 'CONFIG SOURCES',
        detail: 'Group arrays from technologies.provider.ts',
      },
      {
        label: 'STRUCTURAL GROUPING',
        detail: 'Direct assignment: Frontend / Backend / DevOps / Exploratory',
      },
      {
        label: 'ITERATION STRATEGY',
        detail: 'Nested iteration over group keys and items',
      },
      {
        label: 'PRESENTATION LAYER',
        detail: 'Section layout with grouped visual grid',
      },
    ],

    sourceSnippet: `// home.component.ts
groupTechnologies = {
  Frontend: FRONTEND_TECHNOLOGIES,
  Backend: BACKEND_TECHNOLOGIES,
  DevOps: DEVOPS_TECHNOLOGIES,
  Exploratory: EXPLORATORY_TECHNOLOGIES,
};

// home.component.html
*ngFor="let groupKey of getTechnologyGroupKeys()"
  *ngFor="let item of groupTechnologies[groupKey]"`,
  },

  {
    id: 'projects-section',
    label: 'Projects',
    cssSelector: '.projects-section',

    dataSource: {
      providerFile: 'providers/projects.provider.ts',
      exportName: 'projects',
      modelType: 'Project[]',
      sampleJson: projectsSample,
    },

    pipeline: [
      {
        label: 'CONFIG SOURCE',
        detail: 'Static project provider import (Project[])',
      },
      {
        label: 'VIEW TRANSFORMATION',
        detail: 'getDisplayedProject() controls full vs sliced view',
      },
      {
        label: 'COMPONENT CONTRACT',
        detail: '<app-project-item [project]>',
      },
      {
        label: 'CHILD RESPONSIBILITY',
        detail: 'Project item handles liveness check + internal UI',
      },
      {
        label: 'PRESENTATION LAYER',
        detail: 'Responsive grid + collapsed/full toggle',
      },
    ],

    sourceSnippet: `// home.component.ts
projects: Project[] = projects;

getDisplayedProject() {
  return this.projects;
}

// home.component.html
<app-project-item
  *ngFor="let project of getDisplayedProject()"
  [project]="project">
</app-project-item>

// project-item.component.ts
@Input() project: Project;
// fetch(project.project_url) for liveness`,
  },

  {
    id: 'experiences-section',
    label: 'Experiences',
    cssSelector: '.experiences-section',

    dataSource: {
      providerFile: 'providers/experience.provider.ts',
      exportName: 'experiences',
      modelType: 'Experience[]',
      sampleJson: expSample,
    },

    pipeline: [
      {
        label: 'CONFIG SOURCE',
        detail: 'Static experience provider import (Experience[])',
      },
      {
        label: 'DOMAIN CLASSIFICATION',
        detail: 'Filter into work_experiences + education_experiences',
      },
      {
        label: 'STRUCTURAL COMPOSITION',
        detail: 'experiences = [work_experiences, education_experiences]',
      },
      {
        label: 'COMPONENT CONTRACT',
        detail: '<app-timeline-item [experiences]="experiences">',
      },
      {
        label: 'LAYOUT STRATEGY',
        detail: 'Two-column grid (.timeline-grid): Work col | Education col',
      },
      {
        label: 'ENTRY RENDERING',
        detail: 'Type badge via getTypeLabel(), collapsible responsibilities list',
      },
      {
        label: 'PRESENTATION LAYER',
        detail: 'app-timeline-range: native Date arithmetic for tenure (no moment.js)',
      },
    ],

    sourceSnippet: `// home.component.ts
work_experiences = experiences.filter(e =>
  [WORK_TYPE.DIRECT, WORK_TYPE.DIRECT_MULTI,
   WORK_TYPE.INTERN, WORK_TYPE.OUTSOURCING].includes(e.type)
);
education_experiences = experiences.filter(e =>
  e.type == WORK_TYPE.EDUCATION
);
experiences = [this.work_experiences, this.education_experiences];

// home.component.html
<app-timeline-item [experiences]="experiences">

// timeline-item.component.html
<div class="timeline-grid">
  <div class="timeline-col" *ngFor>
    <h3 class="timeline-col-label">Work / Education</h3>
    <div class="timeline-entry" *ngFor="let experience of item">
      <span class="timeline-badge">
        {{ getTypeLabel(experience.type) }}
      </span>
      <app-timeline-range [started_at] [finished_at]>
    </div>
  </div>
</div>

// timeline-range: native Date arithmetic (no moment.js)`,
  },

  {
    id: 'info-section',
    label: 'Contact Information',
    cssSelector: '.info-section',

    dataSource: {
      providerFile: 'providers/user.provider.ts',
      exportName: 'user',
      modelType: 'User (email, address)',
      sampleJson: { email: user.email, address: user.address },
    },

    pipeline: [
      {
        label: 'CONFIG SOURCE',
        detail: 'User provider import (email, address)',
      },
      {
        label: 'TEMPLATE BINDING',
        detail: 'Direct property interpolation',
      },
      {
        label: 'PRESENTATION LAYER',
        detail: 'Centered contact layout',
      },
    ],

    sourceSnippet: `// home.component.html
<p>{{ user?.email }}</p>
<p>{{ user?.address }}</p>`,
  },
];
