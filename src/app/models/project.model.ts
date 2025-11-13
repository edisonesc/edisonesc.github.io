import { Technology } from './technology.model';
import { PROJECT_TYPE } from '../enums/project-type.enum';
import { TimeRange } from './range.model';
import { BaseModel } from './base.model';

export class Project extends BaseModel {
  name: string;
  description?: string;
  icon_url?: string;
  project_url?: string;
  technologies?: Technology[];
  type?: PROJECT_TYPE;
}
