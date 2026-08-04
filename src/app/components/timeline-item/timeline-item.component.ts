import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ResponsibilityCategory } from 'src/app/models/responsibility-category.model';

type ResponsibilityContainer = {
  responsibility_categories?: ResponsibilityCategory[];
  responsibilities?: string[];
};

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
  standalone: false,
})
export class TimelineItemComponent implements OnInit {
  @Input('experiences') experiences: Experience[];

  readonly collapsedLimit = 10;
  private expandedState = new Set<string>();

  constructor() {}

  ngOnInit(): void {}

  toggleExpanded(key: string): void {
    if (this.expandedState.has(key)) {
      this.expandedState.delete(key);
    } else {
      this.expandedState.add(key);
    }
  }

  isExpanded(key: string): boolean {
    return this.expandedState.has(key);
  }

  getCategories(container: ResponsibilityContainer): Array<{ title: string; items: string[] }> {
    return (container.responsibility_categories || [])
      .filter((cat) => !cat.exclude_in_cv)
      .map((cat) => ({ title: cat.title, items: cat.responsibilities || [] }))
      .filter((cat) => cat.items.length > 0);
  }

  shouldShowToggle(container: ResponsibilityContainer): boolean {
    const cats = this.getCategories(container);
    const total =
      cats.length > 0
        ? cats.reduce((sum, cat) => sum + cat.items.length, 0)
        : (container.responsibilities || []).length;
    return total > this.collapsedLimit;
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      DIRECT: 'Full-time',
      INTERN: 'Internship',
      OUTSOURCING: 'Outsourcing',
      DIRECT_MULTI: 'Full-time',
      EDUCATION: 'Education',
    };
    return labels[type] || type;
  }
}
