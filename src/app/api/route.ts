const nodemailer = require("nodemailer")

export async function POST(req: Request) {
  
    const {name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
        host: 'smtp.elasticemail.com',
        port: 2525,
        secure: false,
        auth: {
          user: 'jurong@claclaws.com',
          pass: 'B48D25C12E2F64B220FD2973B32A0BC7D98E'
        }
      });
  
      try {
        await transporter.sendMail({
          from: 'jurong@claclaws.com',
          to: email,
          subject: subject,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
  
        return Response.json({ success: true });
      } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ success: false, error: 'Failed to send email' });
      }
}