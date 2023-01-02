import { createTransport } from 'nodemailer'
import { IEmailRequest } from '../interfaces/email'
import 'dotenv/config'

export const sendEmail = async({ subject, text, from }: IEmailRequest): Promise<any> => {
    const transporter = createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    return await transporter.sendMail({
        from: from,
        to: process.env.SMTP_USER,
        subject: subject,
        html: text
    }).then(() => {
        console.log({ message: 'Email send with success' })
    }).catch((err:any) => {
        console.log(err)
        throw new Error('Error sending email, try again later')
    })
}
