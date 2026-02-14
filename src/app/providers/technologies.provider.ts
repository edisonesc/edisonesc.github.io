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
};

export const redis: Technology = {
  name: 'Redis',
  url: 'https://redis.io/',
  icon_url: 'https://cdn.auth0.com/blog/logos/redis-icon-logo.png',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
};

export const jwt: Technology = {
  name: 'JWT',
  url: 'https://jwt.io/',
  icon_url: null,
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.FORMS_AND_VALIDATIONS,
};

export const typeorm: Technology = {
  name: 'TypeORM',
  url: 'https://typeorm.io/',
  icon_url: 'https://img.stackshare.io/service/7419/20165699.png',
  type: 'FRAMEWORK',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
};

export const mysql: Technology = {
  name: 'MySQL',
  url: 'https://www.mysql.com/',
  icon_url: 'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
  is_user_core: true,
};

export const typescript: Technology = {
  name: 'TypeScript',
  url: 'https://www.typescriptlang.org/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  type: 'LANGUAGE',
  group: 'FRONTEND',
};

export const momentjs: Technology = {
  name: 'MomentJS',
  url: 'https://momentjs.com/',
  icon_url:
    'https://cdn.freebiesupply.com/logos/large/2x/momentjs-logo-png-transparent.png',
  type: 'TOOL',
  group: 'FRONTEND',
};

export const python: Technology = {
  name: 'Python',
  url: 'https://www.python.org/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  type: 'LANGUAGE',
  group: 'OTHERS',
};

export const c: Technology = {
  name: 'C',
  icon_url: 'https://hackr.io/tutorials/c/logo-c.svg',
  type: 'LANGUAGE',
  group: 'OTHERS',
};

export const rpi: Technology = {
  name: 'RPi',
  url: 'https://www.raspberrypi.org/',
  icon_url:
    'https://www.logo.wine/a/logo/Raspberry_Pi/Raspberry_Pi-Logo.wine.svg',
  type: 'TOOL',
  group: 'OTHERS',
};

export const arduino: Technology = {
  name: 'Arduino',
  url: 'https://www.arduino.cc/',
  icon_url: 'https://brandeps.com/logo-download/A/Arduino-logo-vector-01.svg',
  type: 'TOOL',
  group: 'OTHERS',
};

export const tensorflow: Technology = {
  name: 'Tensorflow',
  url: 'https://www.tensorflow.org/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  type: 'TOOL',
  group: 'OTHERS',
};

export const java: Technology = {
  name: 'Java',
  url: 'https://www.java.com/en/',
  icon_url:
    'https://blogs.ashrithgn.com/content/images/size/w2000/2018/08/58480979cef1014c0b5e4901.png',
  type: 'LANGUAGE',
  group: 'OTHERS',
};

export const derby: Technology = {
  name: 'Derby',
  url: 'https://db.apache.org/derby/',
  icon_url: 'https://db.apache.org/derby/logo/final_logo.png',
  type: 'FRAMEWORK',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
};

export const android: Technology = {
  name: 'Android',
  url: 'https://www.android.com/',
  icon_url: null,
  type: 'TOOL',
  group: 'OTHERS',
};

export const ionic: Technology = {
  name: 'Ionic',
  url: 'https://ionicframework.com/',
  icon_url: null,
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
};

export const angular: Technology = {
  name: 'Angular',
  url: 'https://angular.io/',
  icon_url: null,
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
};

export const html: Technology = {
  name: 'HTML',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
  type: 'LANGUAGE',
  group: 'FRONTEND',
};

export const scss: Technology = {
  name: 'Scss',
  url: 'https://sass-lang.com/',
  icon_url: null,
  type: 'LANGUAGE',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STYLING,
};

export const ngrx: Technology = {
  name: 'NgRx',
  url: 'https://ngrx.io/',
  icon_url: null,
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STATE_MANAGEMENT,
};

export const sqlite: Technology = {
  name: 'SQLite',
  url: 'https://www.sqlite.org/index.html',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
};

export const mongodb: Technology = {
  name: 'MongoDB',
  url: 'https://www.mongodb.com/',
  icon_url: 'http://mongodb-js.github.io/leaf/mongodb-leaf_256x256@2x.png',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
};

export const firebase: Technology = {
  name: 'Firebase',
  url: 'https://firebase.google.com/',
  icon_url:
    'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
  type: 'TOOL',
  group: 'BACKEND',
  sub_group: TECHNOLOGY_SUBTYPE.DATABASE,
};

export const pyupload: Technology = {
  name: 'PyUpload',
  url: 'https://pypi.org/project/PyUpload/',
  icon_url:
    'https://pbs.twimg.com/profile_images/1048820661173534720/NHarogNu_400x400.jpg',
  type: 'TOOL',
  group: 'FRONTEND',
  exclude_in_cv: true,
};

export const ffmpeg: Technology = {
  name: 'FFmpeg',
  url: 'https://www.ffmpeg.org/',
  icon_url:
    'https://pbs.twimg.com/profile_images/961052733510893568/wbWiekmv_400x400.jpg',
  type: 'TOOL',
  group: 'OTHERS',
};

export const pyqt5: Technology = {
  name: 'PyQt5',
  url: 'https://pypi.org/project/PyQt5/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  exclude_in_cv: true,
};

export const obsidian: Technology = {
  name: 'Obsidian',
  url: 'https://obsidian.md/',
  icon_url:
    'https://pbs.twimg.com/profile_images/1269490744609341442/MaweGLMN_400x400.png',
  type: 'TOOL',
  group: 'OTHERS',
};

export const md: Technology = {
  name: 'Markdown',
  url: 'https://daringfireball.net/projects/markdown/',
  icon_url: 'https://miro.medium.com/max/1400/0*V9tvdEAZmSjBG3Ny.gif',
  type: 'LANGUAGE',
  group: 'OTHERS',
};

export const mermaid: Technology = {
  name: 'Mermaid',
  url: 'https://mermaid-js.github.io/mermaid/#/',
  icon_url: '',
  type: 'TOOL',
  group: 'OTHERS',
};

export const annyang: Technology = {
  name: 'Annyang',
  url: 'https://www.talater.com/annyang/',
  icon_url: 'https://www.talater.com/annyang/images/icon_user.png',
  type: 'TOOL',
  group: 'OTHERS',
};

export const puppeteer: Technology = {
  name: 'Puppeteer',
  url: 'https://pptr.dev/',
  icon_url: 'https://www.vectorlogo.zone/logos/pptrdev/pptrdev-icon.svg',
  type: 'TOOL',
  group: 'OTHERS',
};

export const cheerio: Technology = {
  name: 'Cheerio',
  url: 'https://cheerio.js.org/',
  icon_url: null,
  type: 'TOOL',
  group: 'OTHERS',
};

export const react: Technology = {
  name: 'React',
  url: 'https://react.dev/',
  icon_url:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
};

export const nextjs: Technology = {
  name: 'Next.js',
  url: 'https://nextjs.org/',
  icon_url: null,
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  is_user_core: true,
};

export const tailwindcss: Technology = {
  name: 'Tailwind CSS',
  url: 'https://tailwindcss.com/docs/installation',
  icon_url: null,
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.STYLING,
};

export const jasmine: Technology = {
  name: 'Jasmine',
  url: 'https://jasmine.github.io/',
  icon_url: null,
  type: 'FRAMEWORK',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.TESTING,
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
};

export const zod: Technology = {
  name: 'Zod',
  url: 'https://zod.dev/',
  icon_url: null,
  type: 'TOOL',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.FORMS_AND_VALIDATIONS,
};

export const reactHookForm: Technology = {
  name: 'React Hook Form',
  url: 'https://www.react-hook-form.com/',
  icon_url: null,
  type: 'TOOL',
  group: 'FRONTEND',
  sub_group: TECHNOLOGY_SUBTYPE.FORMS_AND_VALIDATIONS,
};

export const n8n: Technology = {
  name: 'n8n',
  url: 'https://n8n.io/',
  icon_url:
    'https://meta-q.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1740327389123x713161792968389100/n8n%20plugin.png',
  type: 'TOOL',
  group: 'OTHERS',
};

export const cloudFlare: Technology = {
  name: 'CloudFlare',
  url: 'https://www.cloudflare.com/',
  icon_url: 'https://favicons.statusgator.com/FiM8Ile0FV3wLjxF.jpg',
  type: 'TOOL',
  group: 'OTHERS',
};

export const githubActions: Technology = {
  name: 'Github Actions',
  url: 'https://github.com/features/actions',
  icon_url: null,
  type: 'TOOL',
  group: 'OTHERS',
};

export const vite: Technology = {
  name: 'Vite',
  url: 'https://vitejs.dev/',
  icon_url: 'https://vitejs.dev/logo.svg',
  type: 'TOOL',
  group: 'FRONTEND',
};

export const githubPages: Technology = {
  name: 'GitHub Pages',
  url: 'https://pages.github.com/',
  icon_url:
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  type: 'TOOL',
  group: 'OTHERS',
  sub_group: TECHNOLOGY_SUBTYPE.DEV_OPS,
};

export const template: Technology = {
  name: '',
  url: '',
  icon_url: null,
  type: 'TOOL',
};

export const OTHER_TECHNOLOGIES = [
  react,
  nextjs,
  jasmine,
  zustand,
  shadCN,
  zod,
  reactHookForm,
];
