import { UserInterface } from 'interfaces/user';
import { DepartmentInterface } from 'interfaces/department';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  budget: number;
  user_id: string;
  department_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  department?: DepartmentInterface;
  _count?: {};
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  department_id?: string;
}
