import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

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

  shouldShowToggle(responsibilities: string[]): boolean {
    return responsibilities?.length > this.collapsedLimit;
  }
}
