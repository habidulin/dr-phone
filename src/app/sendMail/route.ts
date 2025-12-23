import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Создаем транспорт для Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      port: 587,
      secure: false,
      auth: {
        user: "dr.phone1pc@gmail.com",
        pass: "Drphone101",
      },
    });

    // Отправка письма
    await transporter.sendMail({
      from: `"Dr. Phone" <dr.phone1pc@gmail.com>`,
      to: "dr.phone1pc@gmail.com",
      subject: `Neue Termin-Anfrage: ${data.serviceName}`,
      text: `
        Name: ${data.name} ${data.vorname}
        Email: ${data.email}
        Telefon: ${data.phone}
        Service: ${data.serviceName}
        Beschreibung: ${data.description}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail error:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
