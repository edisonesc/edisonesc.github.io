import { TECHNOLOGY_SUBTYPE } from '../constants/constants';
import { Technology } from '../models/technology.model';

export const nestjs: Technology = {
  name: 'NestJS',
  url: 'https://nestjs.com/',
  icon_url:
    'https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png',
  type: 'FRAMEWORK',
  group: 'BACKEND',
  is_user_core: true,
  description:
    'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.',
};

export const redis: Technology = {
  name: 'Redis',
  url: 'https://redis.io/',
  icon_url: 'https://cdn.auth0.com/blog/logos/redis-icon-logo.png',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  description:
    'An in-memory data structure store used as a database, cache, and message broker, known for its blazing-fast performance.',
};

export const jwt: Technology = {
  name: 'JWT',
  url: 'https://jwt.io/',
  icon_url: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.FORMS_AND_VALIDATIONS,
  description:
    'JSON Web Tokens — a compact, URL-safe standard for securely transmitting information between parties as a signed JSON object.',
};

export const typeorm: Technology = {
  name: 'TypeORM',
  url: 'https://typeorm.io/',
  icon_url: 'https://img.stackshare.io/service/7419/20165699.png',
  type: 'FRAMEWORK',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  is_user_core: true,
  description:
    'An ORM for TypeScript and JavaScript that supports Active Record and Data Mapper patterns, making database interactions type-safe and expressive.',
};

export const mysql: Technology = {
  name: 'MySQL',
  url: 'https://www.mysql.com/',
  icon_url: 'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  is_user_core: true,
  description:
    "The world's most popular open-source relational database management system, widely used for web applications and transactional workloads.",
};

export const typescript: Technology = {
  name: 'TypeScript',
  url: 'https://www.typescriptlang.org/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  type: 'LANGUAGE',
  group: 'FRONTEND',
  description:
    'A strongly typed superset of JavaScript that adds static types, enabling better tooling, refactoring, and catching errors at compile time.',
};

export const momentjs: Technology = {
  name: 'MomentJS',
  url: 'https://momentjs.com/',
  icon_url:
    'https://cdn.freebiesupply.com/logos/large/2x/momentjs-logo-png-transparent.png',
  type: 'TOOL',
  group: 'FRONTEND',
  description:
    'A JavaScript library for parsing, validating, manipulating, and formatting dates and times with a fluent API.',
};

export const python: Technology = {
  name: 'Python',
  url: 'https://www.python.org/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  type: 'LANGUAGE',
  group: 'EXPLORATORY',
  description:
    'A versatile, beginner-friendly language known for its clean syntax, widely used in scripting, data science, and automation.',
};

export const c: Technology = {
  name: 'C',
  url: 'https://www.iso-cpp.org/wiki/faq/c',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
  type: 'LANGUAGE',
  group: 'EXPLORATORY',
  description:
    'A low-level, general-purpose programming language that provides direct memory management and close-to-hardware control, foundational to modern computing.',
};

export const rpi: Technology = {
  name: 'RPi',
  url: 'https://www.raspberrypi.org/',
  icon_url:
    'https://www.logo.wine/a/logo/Raspberry_Pi/Raspberry_Pi-Logo.wine.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'Raspberry Pi — a credit-card-sized single-board computer used for learning, prototyping, IoT projects, and embedded system development.',
};

export const arduino: Technology = {
  name: 'Arduino',
  url: 'https://www.arduino.cc/',
  icon_url: 'https://brandeps.com/logo-download/A/Arduino-logo-vector-01.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'An open-source electronics platform with easy-to-use hardware and software, ideal for building interactive projects and learning embedded programming.',
};

export const tensorflow: Technology = {
  name: 'Tensorflow',
  url: 'https://www.tensorflow.org/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'An open-source machine learning framework by Google for building and training neural networks across a range of platforms.',
};

export const java: Technology = {
  name: 'Java',
  url: 'https://www.java.com/en/',
  icon_url:
    'https://blogs.ashrithgn.com/content/images/size/w2000/2018/08/58480979cef1014c0b5e4901.png',
  type: 'LANGUAGE',
  group: 'EXPLORATORY',
  description:
    'A class-based, object-oriented language designed for platform independence — write once, run anywhere via the JVM.',
};

export const derby: Technology = {
  name: 'Derby',
  url: 'https://db.apache.org/derby/',
  icon_url: 'https://db.apache.org/derby/logo/final_logo.png',
  type: 'FRAMEWORK',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  description:
    'Apache Derby — a lightweight, pure-Java relational database that can be embedded directly into Java applications.',
};

export const android: Technology = {
  name: 'Android',
  url: 'https://www.android.com/',
  icon_url:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    "Google's mobile operating system — the platform for building and deploying Android apps that run on billions of devices worldwide.",
};

export const ionic: Technology = {
  name: 'Ionic',
  url: 'https://ionicframework.com/',
  icon_url:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
  description:
    'A cross-platform mobile UI toolkit for building native-quality iOS and Android apps using web technologies like Angular, React, or Vue.',
};

export const angular: Technology = {
  name: 'Angular',
  url: 'https://angular.dev/',
  icon_url:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
  description:
    'A platform and framework by Google for building single-page web applications using TypeScript with a component-based architecture and powerful CLI.',
};

export const html: Technology = {
  name: 'HTML',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
  type: 'LANGUAGE',
  group: 'FRONTEND',
  description:
    'The standard markup language for creating web pages, defining the structure and meaning of web content through semantic elements.',
};

export const scss: Technology = {
  name: 'SCSS',
  url: 'https://sass-lang.com/',
  icon_url:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  type: 'LANGUAGE',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STYLING,
  description:
    'A CSS preprocessor that extends CSS with variables, nesting, mixins, and more — making stylesheets more maintainable and expressive.',
};

export const ngrx: Technology = {
  name: 'NgRx',
  url: 'https://ngrx.io/',
  icon_url:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STATE_MANAGEMENT,
  description:
    'Reactive state management for Angular applications inspired by Redux, using RxJS for managing global application state predictably.',
};

export const sqlite: Technology = {
  name: 'SQLite',
  url: 'https://www.sqlite.org/index.html',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  description:
    'A lightweight, serverless, self-contained SQL database engine that stores data in a single file — perfect for embedded and local-first applications.',
};

export const mongodb: Technology = {
  name: 'MongoDB',
  url: 'https://www.mongodb.com/',
  icon_url: 'http://mongodb-js.github.io/leaf/mongodb-leaf_256x256@2x.png',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  description:
    'A document-oriented NoSQL database that stores data in flexible, JSON-like BSON documents, ideal for scalable and schema-less data models.',
};

export const firebase: Technology = {
  name: 'Firebase',
  url: 'https://firebase.google.com/',
  icon_url:
    'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  description:
    "Google's Backend-as-a-Service platform providing real-time database, authentication, hosting, and cloud functions for rapid app development.",
};

export const pyupload: Technology = {
  name: 'PyUpload',
  url: 'https://pypi.org/project/PyUpload/',
  icon_url:
    'https://pbs.twimg.com/profile_images/1048820661173534720/NHarogNu_400x400.jpg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  exclude_in_cv: true,
  description:
    'A Python library for uploading files programmatically to various storage services and endpoints.',
};

export const ffmpeg: Technology = {
  name: 'FFmpeg',
  url: 'https://www.ffmpeg.org/',
  icon_url:
    'https://pbs.twimg.com/profile_images/961052733510893568/wbWiekmv_400x400.jpg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A powerful multimedia framework for decoding, encoding, transcoding, muxing, demuxing, streaming, filtering, and playing audio and video.',
};

export const pyqt5: Technology = {
  name: 'PyQt5',
  url: 'https://pypi.org/project/PyQt5/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg',
  type: 'FRAMEWORK',
  group: 'EXPLORATORY',
  exclude_in_cv: true,
  description:
    'Python bindings for the Qt application framework, enabling the creation of cross-platform desktop GUI applications in Python.',
};

export const obsidian: Technology = {
  name: 'Obsidian',
  url: 'https://obsidian.md/',
  icon_url:
    'https://pbs.twimg.com/profile_images/1269490744609341442/MaweGLMN_400x400.png',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A powerful knowledge base and note-taking app that works on local Markdown files, supporting bidirectional linking and graph visualization.',
};

export const md: Technology = {
  name: 'Markdown',
  url: 'https://daringfireball.net/projects/markdown/',
  icon_url: 'https://miro.medium.com/max/1400/0*V9tvdEAZmSjBG3Ny.gif',
  type: 'LANGUAGE',
  group: 'EXPLORATORY',
  description:
    'A lightweight markup language with plain text formatting syntax, widely used for documentation, README files, and content authoring.',
};

export const mermaid: Technology = {
  name: 'Mermaid',
  url: 'https://mermaid.js.org/',
  icon_url: 'https://mermaid.js.org/favicon.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A JavaScript-based diagramming tool that renders Markdown-inspired text definitions into dynamic diagrams like flowcharts, sequence diagrams, and more.',
};

export const annyang: Technology = {
  name: 'Annyang',
  url: 'https://www.talater.com/annyang/',
  icon_url: 'https://www.talater.com/annyang/images/icon_user.png',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A tiny JavaScript library that enables speech recognition in the browser, allowing you to add voice commands to your web apps.',
};

export const puppeteer: Technology = {
  name: 'Puppeteer',
  url: 'https://pptr.dev/',
  icon_url: 'https://www.vectorlogo.zone/logos/pptrdev/pptrdev-icon.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A Node.js library for controlling Chrome/Chromium via the DevTools Protocol — used for web scraping, automation, and headless browser testing.',
};

export const cheerio: Technology = {
  name: 'Cheerio',
  url: 'https://cheerio.js.org/',
  icon_url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cheerio.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A fast, flexible, and lean implementation of jQuery for server-side HTML parsing and manipulation in Node.js.',
};

export const react: Technology = {
  name: 'React',
  url: 'https://react.dev/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
  description:
    'A JavaScript library by Meta for building user interfaces through reusable, declarative components with a virtual DOM for efficient updates.',
};

export const nextjs: Technology = {
  name: 'Next.js',
  url: 'https://nextjs.org/',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
  description:
    'A React framework that enables server-side rendering, static site generation, and full-stack capabilities with file-based routing and API routes.',
};

export const tailwindcss: Technology = {
  name: 'Tailwind CSS',
  url: 'https://tailwindcss.com/',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STYLING,
  description:
    'A utility-first CSS framework that lets you build custom designs directly in HTML using composable, low-level utility classes.',
};

export const jasmine: Technology = {
  name: 'Jasmine',
  url: 'https://jasmine.github.io/',
  icon_url:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.TESTING,
  description:
    'A behavior-driven development framework for testing JavaScript code with a clean, readable syntax and no external dependencies.',
};

export const zustand: Technology = {
  name: 'Zustand',
  url: 'https://zustand-demo.pmnd.rs/',
  icon_url:
    'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
  type: 'TOOL',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STATE_MANAGEMENT,
  // is_user_core: true,
  description:
    'A small, fast, and scalable state management solution for React using a simple hook-based API with minimal boilerplate.',
};

export const shadCN: Technology = {
  name: 'Shad CN',
  url: 'https://ui.shadcn.com/',
  icon_url:
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*O-ClkORJkmUm1wRsApB_yQ.png',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STYLING,
  // is_user_core: true,
  description:
    'A collection of re-usable UI components built with Radix UI and Tailwind CSS that you copy into your project and own completely.',
};

export const zod: Technology = {
  name: 'Zod',
  url: 'https://zod.dev/',
  icon_url: 'https://cdn.jsdelivr.net/gh/colinhacks/zod@master/logo.svg',
  type: 'TOOL',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.FORMS_AND_VALIDATIONS,
  description:
    'A TypeScript-first schema declaration and validation library that infers static types from your schema definitions.',
};

export const reactHookForm: Technology = {
  name: 'React Hook Form',
  url: 'https://www.react-hook-form.com/',
  icon_url:
    'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reacthookform.svg',
  type: 'TOOL',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.FORMS_AND_VALIDATIONS,
  description:
    'Performant, flexible, and extensible forms with easy-to-use validation for React, minimizing re-renders and reducing boilerplate.',
};

export const n8n: Technology = {
  name: 'n8n',
  url: 'https://n8n.io/',
  icon_url:
    'https://meta-q.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1740327389123x713161792968389100/n8n%20plugin.png',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A fair-code workflow automation platform that lets you connect anything to everything with a visual editor and 400+ integrations.',
};

export const cloudFlare: Technology = {
  name: 'CloudFlare',
  url: 'https://www.cloudflare.com/',
  icon_url: 'https://favicons.statusgator.com/FiM8Ile0FV3wLjxF.jpg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  description:
    'A global cloud platform providing CDN, DNS, DDoS protection, security, and edge computing services to improve performance and security.',
};

export const githubActions: Technology = {
  name: 'GitHub Actions',
  url: 'https://github.com/features/actions',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg',
  type: 'TOOL',
  group: 'DEVOPS',
  description:
    'A CI/CD platform built into GitHub that automates build, test, and deployment workflows triggered by repository events.',
};

export const vite: Technology = {
  name: 'Vite',
  url: 'https://vitejs.dev/',
  icon_url: 'https://vitejs.dev/logo.svg',
  type: 'TOOL',
  group: 'FRONTEND',
  description:
    'A next-generation frontend build tool that leverages native ES modules for instant server start and lightning-fast hot module replacement.',
};

export const githubPages: Technology = {
  name: 'GitHub Pages',
  url: 'https://pages.github.com/',
  icon_url:
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  type: 'TOOL',
  group: 'DEVOPS',
  description:
    'A free static site hosting service by GitHub that publishes HTML, CSS, and JavaScript files directly from a repository.',
};

export const aws: Technology = {
  name: 'AWS (ECR, EC2, ECS, RDS, CloudWatch, S3, CloudFront)',
  url: 'https://aws.amazon.com/',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  type: 'TOOL',
  group: 'DEVOPS',
  description:
    'Amazon Web Services — a comprehensive cloud platform offering compute (EC2/ECS), storage (S3), databases (RDS), CDN (CloudFront), and observability (CloudWatch).',
};

export const docker: Technology = {
  name: 'Docker',
  url: 'https://www.docker.com/',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  type: 'TOOL',
  group: 'DEVOPS',
  description:
    'A containerization platform that packages applications and their dependencies into portable containers, ensuring consistent environments from dev to production.',
};

export const csharp: Technology = {
  name: 'C#',
  url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
  type: 'LANGUAGE',
  group: 'FRONTEND',
  description:
    'A modern, object-oriented language by Microsoft, primary language for Unity game development and .NET applications.',
};

export const unity: Technology = {
  name: 'Unity',
  url: 'https://unity.com/',
  icon_url:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg',
  type: 'TOOL',
  group: 'FRONTEND',
  description:
    'A cross-platform game engine for creating 2D and 3D games, simulations, and interactive experiences, using C# as its scripting language.',
};

export const webSocket: Technology = {
  name: 'WebSockets',
  url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
  icon_url: 'https://cdn.worldvectorlogo.com/logos/websocket.svg',
  type: 'TOOL',
  group: 'BACKEND',
  description:
    'A protocol providing full-duplex communication channels over a single TCP connection, enabling real-time, bidirectional data exchange between client and server.',
};

export const nodejs: Technology = {
  name: 'Node.js',
  url: 'https://nodejs.org/',
  icon_url: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  type: 'TOOL',
  group: 'BACKEND',
  is_user_core: true,
  description:
    "A JavaScript runtime built on Chrome's V8 engine that enables server-side JavaScript execution, powering scalable network applications.",
};

export const ga4: Technology = {
  name: 'Google Analytics 4',
  url: 'https://analytics.google.com/',
  icon_url:
    'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
  type: 'TOOL',
  group: 'EXPLORATORY',
  is_user_core: false,
  description:
    "Google's event-based analytics platform for tracking user behavior, traffic, and conversions across websites and apps.",
};

export const tanstackQuery: Technology = {
  name: 'TanStack Query',
  url: 'https://tanstack.com/query',
  icon_url: 'https://avatars.githubusercontent.com/u/72518640',
  type: 'TOOL',
  group: 'FRONTEND',
  description:
    'A powerful asynchronous state management library for React that handles data fetching, caching, synchronization, and server state updates.',
};

export const drizzle: Technology = {
  name: 'Drizzle',
  url: 'https://orm.drizzle.team/',
  icon_url: 'https://avatars.githubusercontent.com/u/108468352',
  type: 'TOOL',
  group: 'BACKEND',
  description:
    'A lightweight TypeScript ORM with a SQL-like query API, offering zero overhead, type safety, and excellent developer experience.',
};

export const echarts: Technology = {
  name: 'Apache ECharts',
  url: 'https://echarts.apache.org/',
  icon_url: 'https://echarts.apache.org/en/images/favicon.png',
  type: 'TOOL',
  group: 'FRONTEND',
  description:
    'A powerful, interactive charting and data visualization library built on Canvas, supporting a wide range of chart types and large datasets.',
};

export const dddPractice: Technology = {
  name: 'DDD (Domain Driven Design)',
  url: 'https://www.designgurus.io/answers/detail/how-to-understand-domain-driven-design-for-system-design-interviews',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'An approach to software design that centers the codebase around the core business domain, using ubiquitous language and bounded contexts.',
};

export const stateManagementPractice: Technology = {
  name: 'State Management',
  url: 'https://dev.to/chintanonweb/angular-state-management-a-comparison-of-the-different-options-available-100e',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'A discipline for managing application data flow in a predictable, maintainable way — choosing the right store strategy for the complexity at hand.',
};

export const contextEngineeringPractice: Technology = {
  name: 'Context Engineering',
  url: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'The practice of designing and structuring the context window for AI agents — crafting prompts, memory, and tool access to maximize model effectiveness.',
};

export const componentDrivenArchitecturePractice: Technology = {
  name: 'Component-Driven Architecture',
  url: 'https://www.mendix.com/blog/what-is-component-based-architecture/',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'A development methodology where UIs are built from isolated, reusable components, enabling independent development, testing, and composition.',
};

export const configurationDrivenSystemsPractice: Technology = {
  name: 'Configuration-Driven Systems',
  url: 'https://medium.com/@this.mithlesh/how-im-building-a-config-driven-ui-and-why-you-should-try-it-too-0cf3e680627e',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'An architectural approach where UI behavior and layouts are controlled by data/config objects rather than hardcoded logic, enabling flexibility without code changes.',
};

export const mockFirstDevelopmentPractice: Technology = {
  name: 'Mock-First / Contract Development',
  url: 'https://developers.redhat.com/blog/2020/04/28/contract-first-development-create-a-mock-back-end-for-realistic-data-interactions-with-react',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'A development strategy where API contracts are defined and mocked first, allowing frontend and backend teams to work in parallel without blocking each other.',
};

export const promptEngineeringPractice: Technology = {
  name: 'Prompt Engineering',
  url: 'https://zapier.com/blog/prompt-engineering',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'The craft of designing and refining input prompts to guide AI language models toward producing accurate, relevant, and well-structured outputs.',
};

export const mobileFirstStrategyPractice: Technology = {
  name: 'Mobile First Strategy',
  url: 'https://www.investopedia.com/terms/m/mobile-first-strategy.asp',
  icon_url: null,
  type: 'TOOL',
  group: 'ENGINEERING_APPROACH',
  description:
    'A design and development philosophy that prioritizes the mobile experience before scaling up to larger screens, ensuring core functionality and UX are optimized for smaller viewports first.',
};

export const template: Technology = {
  name: '',
  url: '',
  icon_url: null,
  type: 'TOOL',
};

export const FRONTEND_TECHNOLOGIES: Technology[] = [
  angular,
  react,
  nextjs,
  ionic,
  typescript,
  html,
  scss,
  vite,
  tailwindcss,
  shadCN,
  ngrx,
  zustand,
  reactHookForm,
  zod,
  tanstackQuery,
  echarts,
  jasmine,
  momentjs,
  unity,
  csharp,
];

export const BACKEND_TECHNOLOGIES: Technology[] = [
  nodejs,
  nestjs,
  typeorm,
  mysql,
  mongodb,
  redis,
  jwt,
  sqlite,
  drizzle,
  webSocket,
  // derby,
  firebase,
];

export const DEVOPS_TECHNOLOGIES: Technology[] = [
  docker,
  aws,
  githubActions,
  githubPages,
];

export const ENGINEERING_APPROACH_TECHNOLOGIES: Technology[] = [
  componentDrivenArchitecturePractice,
  configurationDrivenSystemsPractice,
  stateManagementPractice,

  mockFirstDevelopmentPractice,
  mobileFirstStrategyPractice,

  dddPractice,

  promptEngineeringPractice,
  contextEngineeringPractice,
];

export const EXPLORATORY_TECHNOLOGIES: Technology[] = [
  n8n,
  cloudFlare,
  arduino,
  rpi,
  tensorflow,
  cheerio,
  puppeteer,
  annyang,
  // obsidian,

  java,
  android,

  python,
  pyupload,
  pyqt5,
  c,

  // md,
  ffmpeg,

  mermaid,
];
