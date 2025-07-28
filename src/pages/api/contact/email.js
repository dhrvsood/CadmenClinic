import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_AUTH);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, html } = req.body;

  if (!to || !Array.isArray(to) || to.length === 0) {
    return res.status(422).json({
      error: {
        statusCode: 422,
        message: 'Missing `to` field.',
        name: 'missing_required_field',
      }
    });
  }

  try {
    const data = await resend.emails.send({
      from: 'Cadmen Booking System <info@cadmenclinic.ca>',
      to,
      subject,
      html,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
}
