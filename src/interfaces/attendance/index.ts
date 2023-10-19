import { UserInterface } from 'interfaces/user';
import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  check_in: any;
  check_out?: any;
  date: any;
  user_id: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  employee?: EmployeeInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  employee_id?: string;
}
