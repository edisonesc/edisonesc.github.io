import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Technology } from 'src/app/models/technology.model';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  standalone: false
})
export class ProjectItemComponent implements OnInit {
  @Input('project') project: Project;
  isLive: boolean | null = null;

  constructor(private analytics: AnalyticsService) {}

  ngOnInit(): void {
    if (this.project?.project_url) {
      fetch(this.project.project_url, { mode: 'no-cors' })
        .then(() => (this.isLive = true))
        .catch(() => (this.isLive = false));
    }
  }

  getProjectAvatar() {
    return this.project?.name.charAt(0).toUpperCase();
  }

  getTechnologyAvatar(technology: Technology) {
    return technology?.name.charAt(0).toUpperCase();
  }

  open(url: string) {
    if (!url) return;
    this.analytics.track('project_link_click', {
      project_name: this.project?.name,
      project_url: url,
    });
    window.open(url, '_blank');
  }
}
