import * as yup from 'yup';

export const departmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  budget: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
