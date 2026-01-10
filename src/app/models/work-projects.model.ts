import { BaseModel } from './base.model';
import { TimeRange } from './range.model';

export class WorkProject extends BaseModel {
  name: string;
  responsibilities: string[];
  cv_responsibilities?: string[];
}
