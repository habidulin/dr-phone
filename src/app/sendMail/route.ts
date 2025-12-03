import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Настройка SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.yourmail.com", // например, smtp.outlook.com
      port: 587,                 // или 465 если SSL
      secure: false,             // true если 465
      auth: {
        user: "your@email.com",  // твой email
        pass: "your-email-password",
      },
    });

    // Формируем письмо
    const mailOptions = {
      from: `"Dr. Phone" <your@email.com>`,
      to: "vo-service2020@outlook.de",
      subject: `Neue Termin-Anfrage: ${data.serviceName}`,
      text: `
        Name: ${data.name} ${data.vorname}
        Email: ${data.email}
        Telefon: ${data.phone}
        Service: ${data.serviceName}
        Beschreibung: ${data.description}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error }), { status: 500 });
  }
}