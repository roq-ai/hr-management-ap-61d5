import { ProjectInterface } from 'interfaces/project';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DepartmentInterface {
  id?: string;
  name: string;
  budget: number;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  project?: ProjectInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    project?: number;
  };
}

export interface DepartmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
  user_id?: string;
}
