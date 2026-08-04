import { BaseModel } from './base.model';
import { ResponsibilityCategory } from './responsibility-category.model';

export class WorkProject extends BaseModel {
  name: string;
  responsibilities?: string[];
  cv_responsibilities?: string[];
  responsibility_categories?: ResponsibilityCategory[];
}
