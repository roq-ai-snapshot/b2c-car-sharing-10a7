import { CarInterface } from 'interfaces/car';
import { OperationsStaffInterface } from 'interfaces/operations-staff';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  car?: CarInterface[];
  operations_staff?: OperationsStaffInterface[];

  _count?: {
    car?: number;
    operations_staff?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  name?: string;
  tenant_id?: string;
}
