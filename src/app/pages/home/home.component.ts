import { projects } from './../../providers/projects.provider';
import { WORK_TYPE } from './../../enums/work-type.enum';
import { Technology } from './../../models/technology.model';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Experience } from 'src/app/models/experience.model';
import { experiences } from 'src/app/providers/experience.provider';
import { user } from 'src/app/providers/user.provider';
import { User } from 'src/app/models/user.model';
import { OTHER_TECHNOLOGIES, react } from 'src/app/providers/technologies.provider';
import { PageService } from '../page.service';
import { getCVTemplate } from 'src/app/providers/cv.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;

  user: User = user;
  projects: Project[] = projects;

  work_experiences: Experience[] = experiences.filter(
    (experience) => [WORK_TYPE.DIRECT, WORK_TYPE.INTERN, WORK_TYPE.OUTSOURCING].includes(experience.type)
  );
  education_experiences: Experience[] = experiences.filter(
    (experience) => experience.type == WORK_TYPE.EDUCATION
  );
  experiences = [this.work_experiences, this.education_experiences];

  isProjectSectionOnFull: boolean = false;

  analytics = {
    mostUsedTechnologies: {
      data: [],
      limit: 40
    }
  }

  groupTechnologies = {
      Frontend: [],
      Backend: [],
      Others: []
    }

  config = {
  }

  constructor(private pageService: PageService, private route: Router) {}

  ngOnInit(): void {
    this.initAnalytics();
    this.initScrollAnimation();
    // localStorage approach
    this.initSaveContent();    
  }

  initSaveContent() {
    const payload = {
      user,
      experiences,
      technologies: this.analytics.mostUsedTechnologies.data.map(e => e.technology),
      projects
    }
    // const content = getCVTemplate(user, experiences , this.analytics.mostUsedTechnologies.data.map(e => e.technology),projects);
    localStorage.setItem('cvData', JSON.stringify(payload))
  }

  initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show')
        } 
        
        // else {
        //   entry.target.classList.remove('show')
        // }
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  ngAfterViewInit(): void {
  }

  getDisplayedProject() {
    let partialProjects = [...projects].slice(0,3)
    return  this.projects //this.isProjectSectionOnFull ? this.projects : partialProjects;
  }

  toggleProjectSection() {
    this.isProjectSectionOnFull = !this.isProjectSectionOnFull
    if(!this.isProjectSectionOnFull) this.scrollInto('projects-section"');
  }

  initAnalytics() {
    let projectTechnologies: {
      technology: Technology,
      usage: number
    }[] = []
    this.projects.forEach(project => project.technologies.forEach(technology => {
      let projectTechnologyFilterList = projectTechnologies.filter(pt => pt.technology == technology);
      if (projectTechnologyFilterList.length > 0) {
        projectTechnologies[projectTechnologies.indexOf(projectTechnologyFilterList[0])].usage += 1;
      } else {
        projectTechnologies.push({technology, usage: 1});
      }
    }))

    
    
    this.analytics.mostUsedTechnologies.data = [...OTHER_TECHNOLOGIES.map(item => {return {technology: item, usage: 0}}), ...this.sortMostUsedProjects(projectTechnologies)];
    console.log(this.analytics.mostUsedTechnologies.data)    

    Object.keys(this.groupTechnologies).forEach(key => {
      let technologies = [...this.analytics.mostUsedTechnologies.data].filter(e => e.technology.group == key.toUpperCase())
      this.groupTechnologies[key] = technologies
    })

    console.log(this.groupTechnologies)
  }

  getTechnologyGroupKeys() {
    return Object.keys(this.groupTechnologies)
  }

  sortMostUsedProjects(list: {
    technology: Technology,
    usage: number
  }[]) {
    list.sort((i1, i2) => {
      if(i1.usage < i2.usage) {
        return 1;
      }
      if(i1.usage > i2.usage){
        return -1;
      }
      return 0;
    });
    return list;
  }

  open(url) {
    url && window.open(url, '_black')
  }

  @HostListener('window:scroll', ['$event'])
   onScroll(event) {
  }

  scrollInto(containerName: string) {
    let element = document.getElementsByClassName(containerName);
    element.length > 0 && element[0].scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  getTechnologyAvatar(technology: Technology) {
    return technology?.name.split('')[0].toUpperCase();
  }

  saveCV() {
    console.log(experiences, this.analytics)
    this.isLoading = true;
    this.pageService.saveCV(
      user,
      experiences,
      this.analytics.mostUsedTechnologies.data.map(e => e.technology),
      projects,
      () => {
        this.isLoading = false;
      }
    );
  }

  viewCV() {
    // const content = getCVTemplate(user, experiences , this.analytics.mostUsedTechnologies.data.map(e => e.technology),projects);
    // this.route.navigateByUrl('/pages/cv', { state: {
    //   content
    // } })

    const payload = {
      user,
      experiences,
      technologies: this.analytics.mostUsedTechnologies.data.map(e => e.technology),
      projects
    }
    const url = this.route.serializeUrl(
      this.route.createUrlTree(['/pages/cv'], { queryParams: { 
        // data: JSON.stringify(payload) // params approach
       } })
    );

    window.open(url, '_blank');
  }
}
