import * as Yup from 'yup'

export const yupSchema = Yup.object().shape({
  firstName: Yup.string().min(1, 'Minimum 2 characters.').required('Required'),
  lastName: Yup.string().min(1, 'Minimum 2 characters.').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  service: Yup.string().required('Required'),
  phone: Yup.string()
    .matches(
      new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/),
      'Phone number is not valid'
    )
    .required('Required')
})
