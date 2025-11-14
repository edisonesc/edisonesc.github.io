import { WORK_TYPE } from '../enums/work-type.enum';
import { Experience } from '../models/experience.model';



export const training_experiences: Experience[] =  [
  {
    title: 'Modern React with Redux [2023 Update]',
    started_at: 'March 2023',
    finished_at: 'March 2023',
    responsibilities: ['Udemy'],
    type: WORK_TYPE.TRAINING
  },
  {
    title: 'Angular - The Complete Guide',
    started_at: 'Sep 2021',
    finished_at: 'Sep 2021',
    responsibilities: ['Udemy'],
    type: WORK_TYPE.TRAINING
  },
  {
    title: 'CCNA Routing and Switching: Introduction to Networks',
    started_at: 'Apr 2018',
    finished_at: 'Apr 2018',
    responsibilities: ['Cisco Networking Academy'],
    type: WORK_TYPE.TRAINING
  },
  {
    title: 'Personality Development Seminar',
    started_at: 'Mar 2017',
    finished_at: 'Mar 2017',
    responsibilities: ['AMA Computer University'],
    type: WORK_TYPE.TRAINING,
    excludeInCVExport: true
  },
  {
    title: 'Pre-employment Seminar',
    started_at: 'Mar 2017',
    finished_at: 'Mar 2017',
    responsibilities: ['AMA Computer University'],
    type: WORK_TYPE.TRAINING,
    excludeInCVExport: true
  }
]

export const experiences: Experience[] = [
  {
    title: 'Samsung Research Philippines',
    started_at: 'Jun 2023',
    finished_at: 'Present',
    position: 'Engineer',
    type:  WORK_TYPE.OUTSOURCING,
    location: "Manila, PH",

    projects: [
      {
        started_at: "Jun 2023",
        finished_at: "Present",
        name: "Bixby",
        responsibilities: [
          "Spearheaded development of core modules and shared components using Angular and React/Next.js, ensuring robustness, reusability, and seamless integration across the application.",
          "Engineered modular, dynamic, and highly cohesive components with scalability at their core—cutting development time for similar or repeat feature requests by an estimated 75–85%, based on actual delivery metrics.",          

          "Collaborated directly with HQ counterparts during a 2-month deployment in Suwon, South Korea. Worked alongside HQ counterparts. This direct collaboration was instrumental in defining requirements, identifying potential blockers, and ensuring the final product was perfectly aligned with business goals.",
          "Led the end-to-end design, architecture, and implementation of a critical service's frontend. Utilized engineered highly scalable and dynamic components, which enabled to achieve the output of a three-person team.",
          "Pioneered a parallel development strategy by creating a mock API server and using constant-based stubs. This allowed backend counterparts to get a tangible sense of the application's behavior, facilitating early change requests and alignment on UI/UX flow before backend APIs were finalized.",
          


          "Led the complete architectural redesign and frontend migration of a legacy application from Vanilla JS to Next.js, transforming it into a modern, dynamic, and highly modular system. Engineered reusable components using dynamic approach and best practices to streamline repetitive structures like management modules. Implemented a configuration system strategy for dynamic filters, tables, and forms—delivering a surgically crafted, state-of-the-art upgrade built entirely from the ground up. Demonstrated the application to the HQ counterparts and the Managing Director of SRPH",
          "Conducts in-depth investigations of issues, failure points, and bugs within existing components, ensuring timely root-cause analysis and effective resolution.",
          "Performs peer code reviews and verifications to ensure it is WAI.",
          "Implements comprehensive unit testing to ensure application functionality and reliability, consistently maintaining test coverage between 85–90%+.",
          "Provided cross-functional support in planning, triage, design, and debugging—enabling faster issue resolution and stronger team alignment.",
          "Optimized codebase by applying best practices in memory management, reusability, readability, and maintainability—ensuring long-term performance and scalability.",
          "Actively participated in internal project initiatives, delivering high-quality, reusable components that contributed to overall system robustness and development efficiency.",
          "Authored clear, well-structured documentation on processes and development guidelines by consolidating critical information for easy reference and team alignment.",
          "Facilitated Scrum ceremonies such as Daily Stand-ups and Retrospectives to ensure task progress, identify blockers, and maintain alignment across the team."
        ],
      }
    ]   
  },
  {
    title: "Accenture Inc.",
    started_at: 'Jul 2021',
    finished_at: 'Jun 2023',
    position: 'Software Engineer',
    type: WORK_TYPE.OUTSOURCING,
    location: 'Manila, PH',
    projects: [
      {
        started_at: "August 2021",
        finished_at: "Present",
        name: "Nimbus Project",
        responsibilities: [            
          "Primarily performs development/authoring using a high level approach (Technologies used includes GoogleSQL and Javascript) that is used by one of the largest search engine company for their helpcenters to support customers and agents.",
          "Performed QA reviews for 10 projects. Helped identify and flag criteria issues to the authors before it goes to the Lead Review stage. Reduce found issues by approx. 42% in all projects combined. ", 
          "Performs authoring and design review. Implementing features/widgets such as tables, search filters etc. Manipulating API response to be compatible with output required or depends on logic required.",
          "Performs investigation/RCA on issues found in exisiting workflows and resolve if necessary to make sure they are working as intended (WAI)",
          "Collaborate with designers and and proposing solutions to TAs, PgM/PsM and Leads to solve and prevent deceleration/blockage when moving to (and with continuing) the authoring phase.",
          "Uploaded 16 Lead Review changelog results in a quality assurance tool. This was done for the platform to be able to derive the author's score based on the inputs provided in the log file.", 
          "Performs authoring and design review. Implementing features/widgets such as tables, search filters etc. Manipulating API response to be compatible with table view or depends on logic required.  Gathering questions/clarifications and discussing with designers, TAs, PgM/PsM and Leads to prevent deceleration/blockage when moving to the authoring phase.", 
          "Authored 17 API testing workflows to check if the API is deprecated, validate results/response, and provide sample inputs and document its requirements/findings.", 
          "Shared knowledge to other authors with regards to projects/exercises/solutions that have been worked on. Includes newly onboarded author/s, allowing them to progress, and get a better understanding of the process.",
          "Increased efficiency in data verifications/validation tasks with uniform patterns by creating scripts that generate reports and identifies multiple errors/mismatches to mitigate time spent (approx. 78% time saved based on delivery time) with improved accuracy and precision to avoid human errors."
        ]
      }
    ]
  },
  {
    title: '8Layer Technologies Inc.',
    started_at: 'Jul 2019',
    finished_at: 'Jun 2021',
    position: 'Junior Mobile Application Developer',
    type:  WORK_TYPE.DIRECT,
    location: "Manila, PH",
    responsibilities: [
      'Performs API integration to front-end and mobile applications',
      'Performs component refactorization/development for reusability and significantly reduce time cost',
      'Performs deployment on mobile applications',
      'Designs User Interface for mobile',
      'Converts mockup designs to actual code',
      'Supports re-development of current projects to use updated technologies and apply standard practices',
      'Supports on the development of back-end applications',
    ],
  },
  {
    title: 'ihatecomputer.com Inc.',
    started_at: 'July 2018',
    finished_at: 'Nov 2018',
    position: 'Intern',
    type: WORK_TYPE.INTERN,
    location: "Manila, PH",
    responsibilities: [
      'Developed web application modules',
      'Developed interactive reports',
    ],
    excludeInCVExport: true
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
  },
  ...training_experiences
];
