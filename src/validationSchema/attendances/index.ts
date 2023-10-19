import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  check_in: yup.date().required(),
  check_out: yup.date().nullable(),
  date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  employee_id: yup.string().nullable().required(),
});
