import { Project } from '../models/project.model';
import {
  nestjs,
  redis,
  jwt,
  typeorm,
  mysql,
  typescript,
  momentjs,
  python,
  c,
  rpi,
  arduino,
  tensorflow,
  java,
  derby,
  android,
  ionic,
  angular,
  html,
  scss,
  ngrx,
  sqlite,
  mongodb,
  firebase,
  pyupload,
  pyqt5,
  ffmpeg,
  obsidian,
  md,
  mermaid,
} from './technologies.provider';
import { PROJECT_TYPE } from '../enums/project-type.enum';

export const projects: Project[] = [
  // {
  //   name: 'Second Brain',
  //   started_at: 'Feb 2021',
  //   description:
  //     'Project that uses PARA method for organizing and indexing knowledge.',
  //   technologies: [obsidian, md, mermaid],
  //   icon_url: 'assets/images/projects/sb.jpg',
  //   type: PROJECT_TYPE.OTHERS,
  // },
  {
    name: 'Years Tracker',
    started_at: 'Feb 2021',
    finished_at: 'Feb 2021',
    description:
      'A personal tracker that tracks my existence and reflects time/years left before target year is met (default is 90 years).',
    technologies: [angular, typescript, momentjs],
    icon_url: '',
    project_url: 'https://edisonesc.github.io/years-tracker/home/',
    type: PROJECT_TYPE.OTHERS,
  },
  {
    name: 'Sammy API',
    started_at: 'Jan 2021',
    finished_at: 'Feb 2021',
    description:
      "Implemented all Sammy's offline features to an API. Also served as playground for backend development.",
    technologies: [nestjs, redis, jwt, typeorm, mysql, typescript, momentjs],
    icon_url: '',
    type: PROJECT_TYPE.SYSTEM,
  },
  {
    name: 'Sammy',
    started_at: 'Oct 2020',
    finished_at: 'Dec 2020',
    description:
      "Mobile application developed using Ionic with Angular. It allows user to create, edit, delete workouts, exercises. The app can also handle Rep-based and Time-based exercise. They can also be able to share their workout to other users who's interested via QR Code.",
    technologies: [typescript, ionic, angular, html, scss, ngrx, sqlite],
    icon_url: '',
    type: PROJECT_TYPE.MOBILE,
  },
  {
    name: 'Icons and Splash Genarator',
    started_at: 'Nov 2020',
    finished_at: 'Nov 2020',
    description:
      'Script that takes a file path and converts the image into various dimensions then uploads a download zip file and shares the download link.',
    technologies: [python, pyupload],
    icon_url: '',
    type: PROJECT_TYPE.OTHERS,
  },
  {
    name: 'Saves',
    started_at: 'Feb 2020',
    finished_at: 'Mar 2020',
    description:
      "Mobile application developed using Ionic with Angular. Implemented state management using NgRx along with NestJS as backend framework and MongoDB for the database. It allows user to save items, add logs, images and track their progress on the item they're saving for.",
    technologies: [
      typescript,
      ionic,
      angular,
      html,
      scss,
      ngrx,
      sqlite,
      nestjs,
      mongodb,
    ],
    icon_url: '',
    type: PROJECT_TYPE.MOBILE,
  },
  {
    name: 'Pantera',
    started_at: 'Feb 2018',
    finished_at: 'April 2019',
    description:
      'Semi-autonomous Book Shelving Robot with Collision Detection, QR Code Matching, Line Tracing, Book and Space detection. It uses computer vision to detect and return book from its respective shelf using QR Code and uses line tracing as the way of transporting the book to the shelf and collision detection to detect obstacles.',
    technologies: [python, c, rpi, arduino, tensorflow],
    icon_url: 'assets/images/projects/pantera.jpg',
    type: PROJECT_TYPE.SYSTEM,
  },
  {
    name: 'OJT Hours Tracker App',
    started_at: 'Sep 2018',
    finished_at: 'Oct 2019',
    description:
      'Mobile application that tracks hours based on time in and out.',
    technologies: [java, android, firebase],
    icon_url: '',
    type: PROJECT_TYPE.MOBILE,
  },
  {
    name: 'CVARST Medical System',
    started_at: 'Aug 2018',
    finished_at: 'Sep 2018',
    description:
      'System project for a track using Java and MySQL. It has a two-way login, dynamic test for Colorblind and Auditory. CRUD is also implemented.',
    technologies: [java, derby, mysql],
    icon_url: '',
    type: PROJECT_TYPE.SYSTEM,
  },
  {
    name: 'Mp4 to Mp3-Converter',
    started_at: 'Aug 2018',
    finished_at: 'Sep 2018',
    description: 'Batch mp4 file to mp3 converter.',
    technologies: [python, pyqt5, ffmpeg],
    icon_url: '',
    type: PROJECT_TYPE.OTHERS,
  },
  {
    name: 'Vehicle Renting and Billing System',
    started_at: 'Jul 2017',
    finished_at: 'Aug 2017',
    description:
      'Project developed for a course using Java and embedded Derby database. It enables users to reserve, schedule and choose a vehicle for rent. It also enables admin to perform CRUD operations from the clients and vehicles.',
    technologies: [java, derby, mysql],
    icon_url: '',
    type: PROJECT_TYPE.SYSTEM,
  },
  {
    name: 'Reflex',
    started_at: 'Oct 2017',
    finished_at: 'Nov 2017',
    description:
      'A simple yet challenging mobile game that gets harder as you level up.',
    technologies: [java, android],
    icon_url: '',
    type: PROJECT_TYPE.MOBILE,
  },
  {
    name: 'Workout Generator & Nutrition Calculator',
    started_at: 'Jun 2017',
    finished_at: 'Jul 2017',
    description:
      'Mobile application project developed for a course using Java. It calculates your BMR, BMI, water intake, and total calorie intake base on how often you exercise. It also generates workouts for beginners, intermediates, and advanced, macro intake, and meal distribution.',
    technologies: [java, android],
    icon_url: '',
    type: PROJECT_TYPE.MOBILE,
  },
  {
    name: 'Workout Program Generator',
    started_at: 'Apr 2017',
    finished_at: 'Apr 2017',
    description:
      'Simple project developed for a course using Java. It generates workouts for users whether the user is a beginner, intermediate, and advanced. Users can choose whether they want to only use bodyweight, weights, or mixed.',
    technologies: [java],
    icon_url: '',
    type: PROJECT_TYPE.SYSTEM,
  },
];
