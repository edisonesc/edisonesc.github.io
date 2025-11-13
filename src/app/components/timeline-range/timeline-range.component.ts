import { Experience } from 'src/app/models/experience.model';
import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline-range',
  templateUrl: './timeline-range.component.html',
  styleUrls: ['./timeline-range.component.scss'],
  standalone: false
})
export class TimelineRangeComponent implements OnInit {
  @Input('started_at') started_at = null;
  @Input('finished_at') finished_at = null;

  constructor() { }

  ngOnInit(): void {
  }

  getTenureDuration() {

    const startedAt = moment(this.started_at, "MMMM YYYY");
    const finishedAt = moment(this.finished_at,  "MMMM YYYY");

    if(startedAt.isValid() && finishedAt.isValid()) {
     
      const duration = moment.duration(finishedAt.diff(startedAt)).asYears();
      const tenure = this.getTenure(duration);

      return `${tenure}`;
    }
    return null;
  }

  getTenure(years: number) {
    // if(years > 1) {
    //   return {duration: years.toFixed(1), unit: "Years"}
    // } else {
    //   return {duration: (years * 10).toFixed(), unit: "Months"}
    // } 
    let dateResult = []
    let units = ["month", "year"];

    let yearSplit = years.toFixed(1).split(".").reverse();
    yearSplit.forEach(param => {
      const paramToNumber = Number(param);
      if(paramToNumber != 0) {
        const index = yearSplit.indexOf(param)
        dateResult.push(`${param} ${paramToNumber == 1 ? units[index]: `${units[index]}s`}`)
      }
    })
    return dateResult.reverse().join(" ");
  }

}
