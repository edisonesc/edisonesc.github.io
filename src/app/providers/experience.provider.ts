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
        // cv_responsibilities: [
        //   'Spearheaded development of core modules and shared components using Angular and React/Next.js, delivering robust, reusable, and seamlessly integrated frontend systems.',
        //   'Designed and engineered modular, highly cohesive, and scalable components, reducing development time for repeat or similar feature requests by approximately 75–85% based on delivery metrics.',
        //   'Led the end-to-end frontend architecture redesign and migration of a legacy Vanilla JS application to Next.js, building a modern, highly modular system with reusable, configuration-driven components for dynamic filters, tables, and forms; successfully presented the solution to HQ counterparts and the Managing Director of SRPH.',
        //   'Collaborated directly with HQ teams during a 2-month on-site deployment in Suwon, South Korea, leading the design, architecture, and implementation of a critical service frontend and achieving the effective output of a three-person team through highly scalable component design.',
        //   'Pioneered a parallel development strategy by implementing a mock API server and constant-based stubs, enabling early backend alignment, faster iteration, and UI/UX validation before API finalization.',
        //   'Managed deployment of frontend feature releases to Kubernetes using Argo CD, ensuring reliable and consistent delivery across environments.',
        //   'Performed in-depth root-cause analysis on complex frontend issues, resolving defects efficiently and ensuring components is working as intended.',
        //   'Implemented comprehensive unit testing strategies, consistently maintaining 85–90%+ test coverage to ensure application reliability and stability.',
        //   'Optimized frontend codebases by applying best practices in memory management, readability, reusability, and maintainability, supporting long-term performance and scalability.',
        // ],

        // responsibilities: [
        //   'Spearheaded development of core modules and shared components using Angular and React/Next.js, ensuring robustness, reusability, and seamless integration across the application.',
        //   'Engineered modular, dynamic, and highly cohesive components with scalability at their core—cutting development time for similar or repeat feature requests by an estimated 75–85%, based on actual delivery metrics.',

        //   'Led the complete architectural redesign and frontend migration of a legacy application from Vanilla JS to Next.js, transforming it into a modern, dynamic, and highly modular system. Engineered reusable components using dynamic approach and best practices to streamline repetitive structures like management modules. Implemented a configuration system strategy for dynamic filters, tables, and forms—delivering a surgically crafted, state-of-the-art upgrade built entirely from the ground up. Demonstrated the application to the HQ counterparts and the Managing Director of SRPH',

        //   "Collaborated directly with HQ counterparts during a 2-month deployment in Suwon, South Korea — Led the end-to-end design, architecture, and implementation of a critical service's frontend. Utilized engineered highly scalable and dynamic components, which enabled to achieve the output of a three-person team. Worked alongside HQ counterparts. This direct collaboration was instrumental in defining requirements, identifying potential blockers, and ensuring the final product was perfectly aligned with business goals.",
        //   "Pioneered a parallel development strategy by creating a mock API server and using constant-based stubs. This allowed backend counterparts to get a tangible sense of the application's behavior, facilitating early change requests and alignment on UI/UX flow before backend APIs were finalized.",
        //   'Managed deployment of frontend feature requests to Kubernetes via Argo CD.',

        //   'Conducted in-depth investigations of issues, failure points, and bugs within existing components, ensuring timely root-cause analysis and effective resolution.',
        //   'Performs peer code reviews and verifications to ensure it is working as intended.',
        //   'Implemented comprehensive unit testing to ensure application functionality and reliability, consistently maintaining test coverage between 85–90%+.',
        //   'Provided cross-functional support in planning, triage, design, and debugging—enabling faster issue resolution and stronger team alignment.',
        //   'Optimized codebase by applying best practices in memory management, reusability, readability, and maintainability—ensuring long-term performance and scalability.',
        //   'Actively participated in internal project initiatives, delivering high-quality, reusable components that contributed to overall system robustness and development efficiency.',
        //   'Authored clear, well-structured documentation on processes and development guidelines by consolidating critical information for easy reference and team alignment.',
        //   'Facilitated Scrum ceremonies such as Daily Stand-ups and Retrospectives to ensure task progress, identify blockers, and maintain alignment across the team.',
        // ],
        cv_responsibilities: [
          'Led end-to-end frontend architectural redesign and migration of a legacy Vanilla JS system to Next.js, delivering a modern, configuration-driven platform for dynamic filters, tables, and forms; presented the solution to HQ and SRPH leadership.',

          'Designed modular, highly cohesive component architecture across Angular and React/Next.js, reducing delivery time for repeat or similar features by ~75–85% based on actual metrics.',

          'Directed architecture and implementation of a critical service frontend during a 2-month on-site deployment in Suwon, South Korea, achieving the output of a three-person team through scalable component design.',

          'Established parallel development strategy using mock API servers and stubs, enabling early UI/UX validation and backend alignment before API finalization.',

          'Streamlined frontend release cycles by maintaining Kubernetes deployment configurations and utilizing Argo CD for automated, GitOps-driven delivery',
        ],
        responsibilities: [
          'Led full architectural redesign and migration from Vanilla JS to Next.js, establishing a configuration-driven frontend system for dynamic filters, tables, and management modules.',

          'Engineered scalable, modular component architecture across Angular and React/Next.js, reducing development time for repeat features by ~75–85%.',

          'Directed end-to-end frontend architecture of a critical service during 2-month HQ deployment in Suwon, aligning technical decisions with business goals and delivering the effective output of a three-person team.',

          'Designed parallel frontend-backend workflow using mock API server and constant-based stubs, accelerating iteration and enabling early UI/UX validation prior to API completion.',

          'Streamlined frontend release cycles by maintaining Kubernetes deployment configurations and utilizing Argo CD for automated, GitOps-driven delivery',

          'Maintained 85–90%+ unit test coverage and implemented structured testing strategies to ensure reliability during large-scale refactors.',

          'Conducted root-cause analysis on complex system issues, resolving architectural bottlenecks and preventing recurring defects.',

          'Provided cross-functional technical leadership across planning, triage, and design alignment to maintain delivery velocity.',
        ],
      },
    ],
  },
  {
    title: 'Accenture Inc.',
    started_at: 'Jul 2021',
    finished_at: 'Jun 2023',
    position: 'Software Engineer',
    type: WORK_TYPE.OUTSOURCING,
    location: 'Manila, PH',
    projects: [
      {
        started_at: 'August 2021',
        finished_at: 'Present',
        name: 'Nimbus Project',
        // cv_responsibilities: [
        //   'Developed and authored high-level solutions using GoogleSQL and JavaScript for help center platforms used by one of the world’s largest search engine companies, supporting both customers and agents.',
        //   'Conducted QA reviews across 10 projects, identifying and flagging criteria issues prior to Lead Review, reducing overall issues by approximately 42%.',
        //   'Designed and implemented UI features and widgets such as tables and search filters, including API response manipulation to meet dynamic business logic and output requirements.',
        //   'Performed root-cause analysis (RCA) on workflow issues, ensuring existing systems functions is working as intended and resolving defects efficiently.',
        //   'Collaborated closely with designers, TAs, PgM/PsM, and team leads to propose solutions, clarify requirements, and prevent blockers during the authoring phase.',
        //   'Uploaded and maintained 16 Lead Review changelog entries in a quality assurance tool, enabling accurate derivation of author performance scores.',
        //   'Authored 17 API testing workflows to validate responses, detect deprecated endpoints, provide sample inputs, and document API requirements and findings.',
        //   'Shared knowledge and best practices with team members, including newly onboarded authors, accelerating ramp-up time and improving overall process understanding.',
        //   'Automated data verification and validation tasks by developing scripts that generated reports and detected multiple errors or mismatches, reducing manual effort by approximately 78% while improving accuracy.',
        // ],

        // responsibilities: [
        //   'Primarily performs development/authoring using a high level approach (Technologies used includes GoogleSQL and Javascript) that is used by one of the largest search engine company for their helpcenters to support customers and agents.',
        //   'Performed QA reviews for 10 projects. Helped identify and flag criteria issues to the authors before it goes to the Lead Review stage. Reduce found issues by approx. 42% in all projects combined. ',
        //   'Performed authoring and design review. Implementing features/widgets such as tables, search filters etc. Manipulating API response to be compatible with output required or depends on logic required.',
        //   'Performed investigation/RCA on issues found in exisiting workflows and resolve if necessary to make sure they are working as intended',
        //   'Collaborated with designers and and proposing solutions to TAs, PgM/PsM and Leads to solve and prevent deceleration/blockage when moving to (and with continuing) the authoring phase.',
        //   'Increased efficiency in data verifications/validation tasks with uniform patterns by creating scripts that generate reports and identifies multiple errors/mismatches to mitigate time spent (approx. 78% time saved based on delivery time) with improved accuracy and precision to avoid human errors.',
        //   "Uploaded 16 Lead Review changelog results in a quality assurance tool. This was done for the platform to be able to derive the author's score based on the inputs provided in the log file.",
        //   'Performed authoring and design review. Implementing features/widgets such as tables, search filters etc. Manipulating API response to be compatible with table view or depends on logic required.  Gathering questions/clarifications and discussing with designers, TAs, PgM/PsM and Leads to prevent deceleration/blockage when moving to the authoring phase.',
        //   'Authored 17 API testing workflows to check if the API is deprecated, validate results/response, and provide sample inputs and document its requirements/findings.',
        //   'Shared knowledge to other authors with regards to projects/exercises/solutions that have been worked on. Includes newly onboarded author/s, allowing them to progress, and get a better understanding of the process.',
        // ],
        cv_responsibilities: [
          'Developed high-level solutions using GoogleSQL and JavaScript for enterprise help center platforms used by one of the world’s largest search engine companies.',
          'Automated data verification and validation workflows by building reporting scripts that detected multi-source inconsistencies, reducing manual effort by ~78% while improving accuracy.',
          'Conducted cross-project QA reviews across 10 initiatives, identifying systemic criteria gaps and reducing downstream issues by ~42%.',
          'Designed and implemented dynamic UI components (tables, search filters) with API response transformation to support complex business logic requirements.',
          'Authored 17 API validation workflows to detect deprecated endpoints, validate response integrity, and document integration requirements.',
        ],
        responsibilities: [
          'Delivered high-level solution authoring using GoogleSQL and JavaScript for enterprise help center platforms serving global customer and agent workflows.',
          'Automated data validation processes by building structured reporting scripts, reducing manual verification time by ~78% and minimizing human error across projects.',
          'Led QA reviews across 10 concurrent projects, identifying systemic criteria issues early and reducing downstream review defects by ~42%.',
          'Engineered dynamic UI features including configurable tables and search filters, implementing API response transformations to support conditional rendering and complex business logic.',
          'Authored 17 API validation and regression workflows to detect deprecations, ensure response integrity, and formalize integration documentation.',
          'Performed root-cause analysis on workflow breakdowns, resolving structural defects and stabilizing authoring pipelines.',
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
    // cv_responsibilities: [
    //   'Integrated REST APIs into web and mobile applications, supporting end-to-end feature delivery.',
    //   'Refactored and developed reusable components, significantly reducing development time and improving maintainability.',
    //   'Built, signed, and deployed mobile applications across Android and iOS platforms.',
    //   'Converted UI/UX mockups into production-ready interfaces for mobile applications.',
    //   'Developed backend features using NestJS.',
    // ],
    // responsibilities: [
    //   'Developed web front-end applications for Incidents Management and Wallet Application dashboards using Angular (TypeScript).',
    //   'Developed mobile applications for Entertainment/Video Streaming and Wallet platforms using Ionic with Angular (TypeScript).',
    //   'Built an Augmented Reality mobile application that renders 3D objects, text, and videos upon image scanning using Unity and Vuforia (C#).',
    //   'Refactored and developed reusable components to reduce development time and improve code maintainability.',
    //   'Signed, built, and generated mobile application releases using Android Studio and Xcode.',
    //   'Provisioned and deployed mobile application builds to Google Play Store, TestFlight, and Apple App Store.',
    //   'Designed user interfaces for Entertainment/Video Streaming, Wallet applications, and supporting screens.',
    //   'Collaborated closely with UI/UX designers to convert mockups and content into functional application code.',
    //   'Contributed to application upgrades and adoption of best practices and coding standards.',
    //   'Developed backend features using NestJS.',
    // ],
    cv_responsibilities: [
      'Developed web and mobile applications using Angular and Ionic, delivering incident management and wallet platforms across Android and iOS.',
      'Built and deployed cross-platform mobile applications to Google Play and Apple App Store, managing signing, release generation, and store provisioning.',
      'Engineered reusable frontend components to improve maintainability and accelerate feature delivery.',
      'Developed backend features using NestJS to support end-to-end application functionality.',
      'Built an Augmented Reality mobile application using Unity and Vuforia, rendering 3D objects and media triggered by image recognition.',
    ],
    responsibilities: [
      'Developed web-based dashboards (Incident Management, Wallet) using Angular and TypeScript, implementing structured component architecture and state-driven UI patterns.',
      'Built cross-platform mobile applications (Entertainment/Streaming, Wallet) using Ionic with Angular, delivering features across Android and iOS environments.',
      'Designed and implemented an Augmented Reality mobile application using Unity and Vuforia (C#), rendering 3D objects, text, and video content triggered by image recognition.',
      'Engineered reusable frontend components and refactored legacy code to improve maintainability and reduce feature implementation time.',
      'Managed full mobile release lifecycle — application signing, build generation, and deployment to Google Play, TestFlight, and Apple App Store.',
      'Developed backend features using NestJS, supporting REST API integrations and enabling end-to-end feature delivery.',
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
      'Developed web application modules supporting internal business tools.',
      'Built interactive reporting components for data visualization.',
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
