import { WorkProject } from './work-projects.model';
import { ResponsibilityCategory } from './responsibility-category.model';
import { WORK_TYPE } from './../enums/work-type.enum';
import { BaseModel } from './base.model';

export class Experience extends BaseModel {
  position?: string;
  title: string;
  location?: string;
  description?: string;
  responsibilities?: string[];
  cv_responsibilities?: string[];
  responsibility_categories?: ResponsibilityCategory[];
  projects?: WorkProject[];
  type?: WORK_TYPE;
}
