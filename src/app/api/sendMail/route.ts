// src/app/api/sendMail/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log('API /sendMail called');
  
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "dr.phone1pc@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Dr. Phone" <dr.phone1pc@gmail.com>`,
      to: "dr.phone1pc@gmail.com",
      subject: `Neue Terminanfrage: ${data.serviceName}`,
      text: `
        Name: ${data.name} ${data.vorname}
        Email: ${data.email}
        Telefon: ${data.phone}
        Service: ${data.serviceName}
        Beschreibung: ${data.description}
      `,
    });

    return Response.json({ success: true });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : '';
    console.error("❌ Fehler beim Senden:", msg, stack);
    return Response.json({ 
      success: false, 
      error: "Email konnte nicht gesendet werden" 
    }, { status: 500 });
  }
}