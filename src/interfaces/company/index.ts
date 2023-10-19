import { DepartmentInterface } from 'interfaces/department';
import { EmployeeInterface } from 'interfaces/employee';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  department?: DepartmentInterface[];
  employee?: EmployeeInterface[];
  user?: UserInterface;
  _count?: {
    department?: number;
    employee?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
