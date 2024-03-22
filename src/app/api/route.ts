const nodemailer = require("nodemailer")

export async function POST(req: Request) {
  
    const {name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
  
      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.SMTP_TO_EMAIL,
          subject: subject,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
  
        return Response.json({ success: true });
      } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ success: false, error: 'Failed to send email' });
      }
}