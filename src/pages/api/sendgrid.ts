import sgMail from "@sendgrid/mail";
import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "../../env.mjs";

sgMail.setApiKey(env.SENDGRID_API_KEY);

type Data = {
  success: boolean
}

const sendEmailContact = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  if(req.method === 'POST'){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { fullname, email, subject, message }: {fullname: string; email: string; subject: string; message: string} = req.body
    const contactMessage = {
      to: env.SENDGRID_TO,
      from: env.SENDGRID_FROM,
      subject: `${subject} | ${fullname} vous a envoyé un message`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`
    }
    try {
      await sgMail.send(contactMessage)
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(200).json({ success: false })
    }
  }
}

export default sendEmailContact