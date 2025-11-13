import { TimelineRangeComponent } from './../components/timeline-range/timeline-range.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectItemComponent } from '../components/project-item/project-item.component';
// import { NgbAccordion, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { TimelineItemComponent } from '../components/timeline-item/timeline-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PageService } from './page.service';
import { FileService } from './file-service.service';

const components = [ProjectItemComponent, TimelineItemComponent, TimelineRangeComponent];

@NgModule({
  declarations: [HomeComponent, ...components],
  imports: [CommonModule, PagesRoutingModule, HttpClientModule],
  providers: [
    PageService,
    FileService
  ]
})
export class PagesModule {}
