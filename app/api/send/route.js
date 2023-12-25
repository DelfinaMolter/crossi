import { EmailTemplate } from '../../components/emailTemplate/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST( request ) {
  try {
    const body = await request.json();
    // console.log("form")
    const { reason, name, lastName, email, phone} = body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mkt.croissantcafe@gmail.com'],
      subject: `${reason}`,
      react: EmailTemplate({ firstName: name, lastName: lastName, email: email, phone: phone}),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}