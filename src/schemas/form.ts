import * as yup from 'yup'

export const FormSchema = yup.object({
    from_name: yup.string().required("Insira seu nome"),
    email: yup.string().required("Insira seu email").email(),
    message: yup.string().required("Insira sua mensagem")
})
