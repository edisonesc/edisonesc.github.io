import { TECHNOLOGY_SUBTYPE } from '../constants/constants';
import { BaseModel } from './base.model';

export class Technology extends BaseModel {
  name: string;
  url?: string;
  icon_url?: string;
  type?: 'FRAMEWORK' | 'LANGUAGE' | 'TOOL';
  group?: 'FRONTEND' | 'BACKEND' | 'OTHERS';

  sub_group?: TECHNOLOGY_SUBTYPE;
  is_user_core?: boolean;
  exclude_in_cv?: boolean;
}
