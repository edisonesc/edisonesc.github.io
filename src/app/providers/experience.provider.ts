import { WORK_TYPE } from '../enums/work-type.enum';
import { Experience } from '../models/experience.model';

export const training_experiences: Experience[] = [
  {
    title: 'Modern React with Redux [2023 Update]',
    started_at: 'March 2023',
    finished_at: 'March 2023',
    responsibilities: ['Udemy'],
    type: WORK_TYPE.TRAINING,
    exclude_in_cv: true,
  },
  {
    title: 'Angular - The Complete Guide',
    started_at: 'Sep 2021',
    finished_at: 'Sep 2021',
    responsibilities: ['Udemy'],
    type: WORK_TYPE.TRAINING,
    exclude_in_cv: true,
  },
  {
    title: 'CCNA Routing and Switching: Introduction to Networks',
    started_at: 'Apr 2018',
    finished_at: 'Apr 2018',
    responsibilities: ['Cisco Networking Academy'],
    type: WORK_TYPE.TRAINING,
    exclude_in_cv: true,
  },
  {
    title: 'Personality Development Seminar',
    started_at: 'Mar 2017',
    finished_at: 'Mar 2017',
    responsibilities: ['AMA Computer University'],
    type: WORK_TYPE.TRAINING,
    exclude_in_cv: true,
  },
  {
    title: 'Pre-employment Seminar',
    started_at: 'Mar 2017',
    finished_at: 'Mar 2017',
    responsibilities: ['AMA Computer University'],
    type: WORK_TYPE.TRAINING,
    exclude_in_cv: true,
  },
];

export const experiences: Experience[] = [
  {
    title: 'Samsung Research Philippines',
    started_at: 'Jun 2023',
    finished_at: 'Present',
    position: 'Engineer',
    type: WORK_TYPE.DIRECT_MULTI,
    location: 'Manila, PH',

    projects: [
      {
        started_at: 'Jun 2023',
        finished_at: 'Present',
        name: 'Bixby',

        responsibility_categories: [
          {
            title: 'Platform Architecture & Modernization',
            responsibilities: [
              'Led ongoing development of Analytics Engine using Next.js, NestJS, Node.js, and MySQL, driving feature delivery, component design, API design, and architectural decisions.',
              'Re-architected a heavily customized Apache Superset analytics platform into a modern Next.js and NestJS ecosystem, establishing a scalable foundation for future analytics capabilities.',
              'Re-architected a legacy Vanilla JS frontend into a configuration-driven Next.js platform for dynamic filters, tables, and management modules.',
              'Implemented scalable component abstractions across Angular and React ecosystems, improving maintainability and significantly reducing repetitive implementation effort.',
            ],
          },
          {
            title: 'Engineering Quality & Delivery',
            responsibilities: [
              'Established a monorepo architecture with shared frontend, backend, and domain packages to maximize reuse and development efficiency.',
              'Defined a frontend-backend integration strategy using mock services and structured contracts to minimize downstream rework.',
              'Owned frontend production releases through GitOps, coordinating artifact tagging, production branch promotion, and Argo CD synchronization.',
              'Maintained 85–90%+ unit test coverage by enforcing structured testing standards and reducing regression risk.',
              'Conducted deep root-cause analysis on architectural bottlenecks and recurring production issues to improve delivery stability.',
            ],
          },
          {
            title: 'Technical Leadership & Engineering Enablement',
            responsibilities: [
              'Leveraged AI-assisted development to accelerate delivery, reviewing generated output and refining solutions to maintain architectural integrity.',
              'Directed frontend architecture of a critical Bixby service during a 2-month HQ engagement in Suwon, aligning technical strategy with evolving business goals.',
              'Presented architectural proposals and modernization strategy to HQ and SRPH leadership.',
              'Provided cross-functional technical leadership across planning, triage, solution validation, and delivery coordination.',
            ],
          },
        ],
      },
    ],
  },

  {
    title: 'Accenture Inc.',
    started_at: 'Jul 2021',
    finished_at: 'Jun 2023',
    position: 'Software Engineer',
    type: WORK_TYPE.DIRECT_MULTI,
    location: 'Manila, PH',

    projects: [
      {
        started_at: 'Aug 2021',
        finished_at: 'Jun 2023',
        name: 'Nimbus (Google)',

        responsibility_categories: [
          {
            title: 'Application Development',
            responsibilities: [
              'Executed high-level solution authoring using GoogleSQL and JavaScript for enterprise knowledge platforms serving global user bases.',
              'Built dynamic UI components supporting complex conditional business workflows.',
            ],
          },
          {
            title: 'Engineering Quality & Delivery',
            responsibilities: [
              'Streamlined cross-project validation through automated reporting tools, reducing manual effort and improving verification accuracy.',
              'Authored API validation and regression workflows to formalize integration standards.',
              'Performed structured root-cause analysis to stabilize authoring pipelines and prevent recurring issues.',
            ],
          },
          {
            title: 'Collaboration & Engineering Support',
            responsibilities: [
              'Guided QA reviews across multiple concurrent initiatives, identifying systemic quality gaps early.',
              'Collaborated with designers, architects, and program managers to refine requirements and prevent downstream blockers.',
              'Contributed to documentation and validation governance, improving long-term maintainability.',
            ],
          },
        ],
      },
    ],
  },

  {
    title: '8Layer Technologies Inc.',
    started_at: 'Jul 2019',
    finished_at: 'Jun 2021',
    position: 'Junior Mobile Application Developer',
    type: WORK_TYPE.DIRECT,
    location: 'Manila, PH',

    responsibility_categories: [
      {
        title: 'Application Development',
        responsibilities: [
          'Built Angular dashboards for incident management and wallet platforms.',
          'Delivered cross-platform mobile applications using Ionic.',
          'Designed AR-based interaction modules using Unity and Vuforia.',
        ],
      },
      {
        title: 'Engineering Quality & Delivery',
        responsibilities: [
          'Refactored legacy components to improve modularity and maintainability.',
          'Integrated REST APIs and backend services for end-to-end functionality.',
          'Managed Android and iOS application release lifecycle.',
        ],
      },
    ],
  },

  {
    title: 'ihatecomputer.com Inc.',
    started_at: 'July 2018',
    finished_at: 'Nov 2018',
    position: 'Intern',
    type: WORK_TYPE.INTERN,
    location: 'Manila, PH',
    responsibilities: [
      'Built internal web application modules supporting operational business tools.',
      'Implemented interactive reporting components for structured data visualization.',
    ],
    exclude_in_cv: true,
  },

  {
    title: 'AMA Computer University - Quezon City Philippines',
    started_at: 'March 2015',
    finished_at: 'May 2019',
    position: 'Student',
    type: WORK_TYPE.EDUCATION,
    responsibilities: [
      'Bachelor of Science in Computer Science',
      'Member, Microsoft Student Community',
    ],
  },

  {
    title: 'MRSCI - Caloocan City Philippines',
    started_at: 'March 2011',
    finished_at: 'March 2015',
    position: 'Student',
    type: WORK_TYPE.EDUCATION,
    responsibilities: ['Secondary'],
    exclude_in_cv: true,
  },

  ...training_experiences,
];
