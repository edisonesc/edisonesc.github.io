import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-range',
  templateUrl: './timeline-range.component.html',
  styleUrls: ['./timeline-range.component.scss'],
  standalone: false,
})
export class TimelineRangeComponent implements OnInit {
  @Input('started_at') started_at = null;
  @Input('finished_at') finished_at = null;

  constructor() {}

  ngOnInit(): void {}

  getTenureDuration(): string | null {
    const parseDate = (str: string): Date | null => {
      const d = new Date(str);
      return isNaN(d.getTime()) ? null : d;
    };

    const start = parseDate(this.started_at);
    const end =
      this.finished_at && this.finished_at !== 'Present'
        ? parseDate(this.finished_at)
        : new Date();

    if (!start || !end) return null;

    const totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);

    return parts.length > 0 ? parts.join(' ') : null;
  }
}
