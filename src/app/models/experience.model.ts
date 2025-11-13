import { WorkProject } from './work-projects.model';
import { WORK_TYPE } from './../enums/work-type.enum';
import { TimeRange } from './range.model';
import { BaseModel } from './base.model';

export class Experience extends BaseModel {
  position?: string;
  title: string;
  location?: string;
  description?: string;
  responsibilities?: string[];
  projects?: WorkProject[];
  type?: WORK_TYPE;  
}