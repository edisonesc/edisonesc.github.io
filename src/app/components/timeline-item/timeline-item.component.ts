import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
  standalone: false
})
export class TimelineItemComponent implements OnInit {
  @Input('experiences') experiences: Experience[];
  constructor() {}

  ngOnInit(): void {}
}
