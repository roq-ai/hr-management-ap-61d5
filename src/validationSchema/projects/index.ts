import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  budget: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  department_id: yup.string().nullable().required(),
});
