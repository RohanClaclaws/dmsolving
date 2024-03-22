const nodemailer = require("nodemailer")

export async function POST(req: Request) {
    const {name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
        host: 'mail.dmsolving.com',
        port: 465,
        secure: true,
        auth: {
          user: 'hello@dmsolving.com',
          pass: 'Hello@123!@#'
        }
      });
  
      try {
        await transporter.sendMail({
          from: "hello@dmsolving.com",
          to: 'info@dmsolving.com',
          subject: subject,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
  
        return Response.json({ success: true });
      } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ success: false, error: 'Failed to send email' });
      }
}