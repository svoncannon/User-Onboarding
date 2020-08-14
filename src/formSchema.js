import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email must be valid")
        .required("Email is required")
        .notOneOf(['waffle@syrup.com'], 'That email is already taken'),
    name: yup
        .string()
        .min(3, "First name must be at least 3 characters")
        .required("First name is Required"),
    password: yup
        .string()
        .min(3, "Password must be at least 3 characters long")
        .required('You must enter a password'),
    hasAcceptedTOS: yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions")
})

export default formSchema