
import { MailtrapClient } from 'mailtrap';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = request.body;

    if (!name || !email || !message) {
        return response.status(400).json({ error: 'Missing required fields' });
    }

    const TOKEN = process.env.MailtrapAPIkey;

    if (!TOKEN) {
        return response.status(500).json({ error: 'Server configuration error' });
    }

    const client = new MailtrapClient({ token: TOKEN });

    const sender = { name: "Refuge Gospel Website", email: "contact@refugegospelinternationalchurch.org" }; // Using Mailtrap's demo sender default for safety until verified domain

    // If the user has a verified domain, they should change 'sender' to:
    // const sender = { name: "Refuge Gospel", email: "no-reply@refugegospelinternationalchurch.org" };

    try {
        await client.send({
            from: sender,
            to: [{ email: 'contact@refugegospelinternationalchurch.org' }],
            cc: [{ email: 'bishopfavour@refugegospelinternationalchurch.org' }],
            subject: subject || `New message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
            category: "Contact Form",
        });

        return response.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return response.status(500).json({ error: 'Failed to send email' });
    }
}
