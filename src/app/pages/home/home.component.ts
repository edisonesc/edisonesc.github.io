import { projects } from './../../providers/projects.provider';
import { WORK_TYPE } from './../../enums/work-type.enum';
import { Technology } from './../../models/technology.model';
import {
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Experience } from 'src/app/models/experience.model';
import { experiences } from 'src/app/providers/experience.provider';
import { user } from 'src/app/providers/user.provider';
import { User } from 'src/app/models/user.model';
import {
  FRONTEND_TECHNOLOGIES,
  BACKEND_TECHNOLOGIES,
  DEVOPS_TECHNOLOGIES,
  EXPLORATORY_TECHNOLOGIES,
} from 'src/app/providers/technologies.provider';
import { PageService } from '../page.service';
import { getCVTemplate } from 'src/app/providers/cv.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  isDark: boolean = false;
  currentYear = new Date().getFullYear();

  user: User = user;
  projects: Project[] = projects;

  work_experiences: Experience[] = experiences.filter((experience) =>
    [
      WORK_TYPE.DIRECT,
      WORK_TYPE.INTERN,
      WORK_TYPE.DIRECT_MULTI,
      WORK_TYPE.OUTSOURCING,
    ].includes(experience.type),
  );
  education_experiences: Experience[] = experiences.filter(
    (experience) => experience.type == WORK_TYPE.EDUCATION,
  );
  experiences = [this.work_experiences, this.education_experiences];

  isProjectSectionOnFull: boolean = false;

  allTechnologies = [
    ...FRONTEND_TECHNOLOGIES,
    ...BACKEND_TECHNOLOGIES,
    ...DEVOPS_TECHNOLOGIES,
    ...EXPLORATORY_TECHNOLOGIES,
  ];

  groupTechnologies = {
    Frontend: FRONTEND_TECHNOLOGIES,
    Backend: BACKEND_TECHNOLOGIES,
    DevOps: DEVOPS_TECHNOLOGIES,
    Exploratory: EXPLORATORY_TECHNOLOGIES,
  };

  config = {};

  constructor(
    private pageService: PageService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.initScrollAnimation();
    this.initTheme();
    // localStorage approach
    this.initSaveContent();
  }

  initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.isDark = saved === 'dark';
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.add('theme-transition');
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    setTimeout(() => document.body.classList.remove('theme-transition'), 300);
  }

  private applyTheme() {
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark ? 'dark' : 'light',
    );
  }

  initSaveContent() {
    const payload = {
      user,
      experiences,
      technologies: this.allTechnologies,
      projects,
    };
    localStorage.setItem('cvData', JSON.stringify(payload));
  }

  initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }

        // else {
        //   entry.target.classList.remove('show')
        // }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  ngAfterViewInit(): void {}

  getDisplayedProject() {
    let partialProjects = [...projects].slice(0, 3);
    return this.projects; //this.isProjectSectionOnFull ? this.projects : partialProjects;
  }

  toggleProjectSection() {
    this.isProjectSectionOnFull = !this.isProjectSectionOnFull;
    if (!this.isProjectSectionOnFull) {
      setTimeout(() => this.scrollInto('projects-section'), 50);
    }
  }

  getTechnologyGroupKeys() {
    return Object.keys(this.groupTechnologies);
  }

  open(url) {
    url && window.open(url, '_black');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {}

  scrollInto(containerName: string) {
    let element = document.getElementsByClassName(containerName);
    element.length > 0 &&
      element[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  getTechnologyAvatar(technology: Technology) {
    return technology?.name.split('')[0].toUpperCase();
  }

  saveCV() {
    this.isLoading = true;
    this.pageService.saveCV(
      user,
      experiences,
      this.allTechnologies,
      projects,
      () => {
        this.isLoading = false;
      },
    );
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewCV() {
    const url = this.route.serializeUrl(
      this.route.createUrlTree(['/pages/cv'], {
        queryParams: {},
      }),
    );

    window.open(url, '_blank');
  }
}
