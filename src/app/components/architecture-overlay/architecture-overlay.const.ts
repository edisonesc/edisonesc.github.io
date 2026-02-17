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
    cssSelector: '.tech-section',
    dataSource: {
      providerFile: 'providers/technologies.provider.ts + projects.provider.ts',
      exportName: 'OTHER_TECHNOLOGIES + project.technologies',
      modelType: '{ technology: Technology, usage: number }[]',
      sampleJson: {
        groupKeys: ['Frontend', 'Backend', 'Others'],
        technologies_provider: technologiesSample,

        note: 'Computed from projects.technologies + OTHER_TECHNOLOGIES',
      },
    },
    pipeline: [
      {
        label: 'Data',
        detail: 'projects[].technologies + OTHER_TECHNOLOGIES',
      },
      {
        label: 'Aggregate',
        detail: 'initAnalytics() counts usage per tech',
      },
      {
        label: 'Group',
        detail: 'groupTechnologies { Frontend, Backend, Others }',
      },
      { label: 'Render', detail: '*ngFor groupKeys → *ngFor tech items' },
      { label: 'UI', detail: '.tech-section with dot pattern' },
    ],
    sourceSnippet: `// home.component.ts
initAnalytics() {
  let projectTechnologies = [];
  this.projects.forEach(project =>
    project.technologies.forEach(technology => {
      // count usage per technology
    })
  );
  // merge with OTHER_TECHNOLOGIES
  // group by Frontend / Backend / Others
}

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
        detail: 'experiences: Experience[] (static import)',
      },
      { label: 'Filter', detail: '.filter() → work + education' },
      {
        label: 'Group',
        detail: '[work_experiences, education_experiences]',
      },
      { label: 'Delegate', detail: '<app-timeline-item [experiences]>' },
      { label: 'Switch', detail: 'ngSwitch on experience.type' },
      { label: 'UI', detail: 'Timeline layout with nested ranges' },
    ],
    sourceSnippet: `// home.component.ts
work_experiences = experiences.filter(e =>
  [WORK_TYPE.DIRECT, WORK_TYPE.DIRECT_MULTI WORK_TYPE.INTERN,
   WORK_TYPE.OUTSOURCING].includes(e.type)
);
education_experiences = experiences.filter(e =>
  e.type == WORK_TYPE.EDUCATION
);
experiences = [this.work_experiences, this.education_experiences];

// home.component.html
<app-timeline-item [experiences]="experiences">
</app-timeline-item>

// timeline-item uses ngSwitch on experience.type
// timeline-range calculates tenure via MomentJS`,
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
      providerFile: 'projects.provider.ts + technologies.provider.ts',
      exportName: 'projects + OTHER_TECHNOLOGIES',
      modelType: '{ technology: Technology, usage: number }[]',
      sampleJson: {
        groupKeys: ['Frontend', 'Backend', 'Others'],
      },
    },

    pipeline: [
      {
        label: 'CONFIG SOURCES',
        detail: 'Project technologies + static OTHER_TECHNOLOGIES',
      },
      {
        label: 'DOMAIN AGGREGATION',
        detail: 'Compute usage frequency per technology',
      },
      {
        label: 'STRUCTURAL GROUPING',
        detail: 'Categorize into Frontend / Backend / Others',
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
initAnalytics() {
  // aggregate usage count
  // merge with OTHER_TECHNOLOGIES
  // group into Frontend / Backend / Others
}

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
        detail: 'Static experience provider import',
      },
      {
        label: 'DOMAIN CLASSIFICATION',
        detail: 'Filter into work and education categories',
      },
      {
        label: 'STRUCTURAL COMPOSITION',
        detail: 'Compose groupedExperiences = [work[], education[]]',
      },
      {
        label: 'COMPONENT CONTRACT',
        detail: '<app-timeline-item [experiences]="groupedExperiences">',
      },
      {
        label: 'INTERNAL RENDER STRATEGY',
        detail: 'ngSwitch on experience.type inside timeline-item',
      },
      {
        label: 'PRESENTATION LAYER',
        detail: 'Timeline layout + nested range rendering + tenure calculation',
      },
    ],

    sourceSnippet: `// home.component.ts
work_experiences = experiences.filter(e =>
  [WORK_TYPE.DIRECT, WORK_TYPE.DIRECT_MULTI,
   WORK_TYPE.INTERN, WORK_TYPE.OUTSOURCING].includes(e.type)
);

education_experiences = experiences.filter(e =>
  e.type === WORK_TYPE.EDUCATION
);

groupedExperiences = [
  this.work_experiences,
  this.education_experiences
];

// home.component.html
<app-timeline-item
  [experiences]="groupedExperiences">
</app-timeline-item>

// timeline-item handles ngSwitch
// timeline-range calculates tenure`,
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
