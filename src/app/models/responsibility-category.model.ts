import { BaseModel } from './base.model';

export class ResponsibilityCategory extends BaseModel {
  title: string;
  responsibilities: string[];
  cv_responsibilities?: string[];
}
