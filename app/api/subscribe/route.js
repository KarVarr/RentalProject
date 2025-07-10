import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Некорректный email' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Подписка" <${process.env.SMTP_USER}>`,
      to: 'info@trendsetterwb.com',
      subject: `Новая подписка на новости`,
      text: `Новый подписчик: ${email}`
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe mail error:', err);
    return NextResponse.json({ error: 'Не удалось отправить письмо' }, { status: 500 });
  }
}

  