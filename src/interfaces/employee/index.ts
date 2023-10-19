import { AttendanceInterface } from 'interfaces/attendance';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  position: string;
  salary: number;
  hire_date: any;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    attendance?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  position?: string;
  user_id?: string;
  company_id?: string;
}
