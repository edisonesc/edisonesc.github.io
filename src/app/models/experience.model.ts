import { TimeRange } from './range.model';

export class Experience extends TimeRange {
  position: string;
  company_name: string;
  description?: string;
  responsibilities?: string[];
  type?: 'WORK' | 'EDUCATION';
}
