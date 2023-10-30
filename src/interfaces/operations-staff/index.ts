import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OperationsStaffInterface {
  id?: string;
  staff_name: string;
  staff_role: string;
  contact_number: string;
  working_hours: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface OperationsStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  staff_name?: string;
  staff_role?: string;
  contact_number?: string;
  working_hours?: string;
  user_id?: string;
  company_id?: string;
}
