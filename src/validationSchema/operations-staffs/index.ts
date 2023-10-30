import * as yup from 'yup';

export const operationsStaffValidationSchema = yup.object().shape({
  staff_name: yup.string().required(),
  staff_role: yup.string().required(),
  contact_number: yup.string().required(),
  working_hours: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
