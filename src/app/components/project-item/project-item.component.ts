import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  standalone: false
})
export class ProjectItemComponent implements OnInit {
  @Input('project') project: Project;
  isLive: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
    if (this.project?.project_url) {
      fetch(this.project.project_url, { mode: 'no-cors' })
        .then(() => (this.isLive = true))
        .catch(() => (this.isLive = false));
    }
  }

  getProjectAvatar() {
    return this.project?.name.split('')[0].toUpperCase();
  }

  getTechnologyAvatar(technology: Technology) {
    return technology?.name.split('')[0].toUpperCase();
  }

  open(url) {}
}
