import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dr. Phone" <${process.env.SMTP_USER}>`,
      to: "vo-service2020@outlook.de",
      subject: `Neue Termin-Anfrage: ${data.serviceName}`,
      text: `
        Name: ${data.name} ${data.vorname}
        Email: ${data.email}
        Telefon: ${data.phone}
        Service: ${data.serviceName}
        Beschreibung: ${data.description}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
