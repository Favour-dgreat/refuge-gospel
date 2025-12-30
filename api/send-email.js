import * as Brevo from '@getbrevo/brevo';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = request.body;

    if (!name || !email || !message) {
        return response.status(400).json({ error: 'Missing required fields' });
    }

    const API_KEY = process.env.BrevoAPIKey;

    if (!API_KEY) {
        return response.status(500).json({ error: 'Server configuration error' });
    }

    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, API_KEY);

    const sendSmtpEmail = new Brevo.SendSmtpEmail();

    sendSmtpEmail.subject = subject || `New message from ${name}`;
    sendSmtpEmail.htmlContent = `
        <html>
            <body>
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            </body>
        </html>
    `;
    sendSmtpEmail.sender = { "name": "Refuge Gospel Website", "email": "contact@refugegospelinternationalchurch.org" };
    sendSmtpEmail.to = [{ "email": "contact@refugegospelinternationalchurch.org", "name": "Refuge Gospel Admin" }];
    sendSmtpEmail.cc = [{ "email": "bishopfavour@refugegospelinternationalchurch.org", "name": "Bishop Favour" }];
    sendSmtpEmail.replyTo = { "email": email, "name": name };

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        return response.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return response.status(500).json({ error: 'Failed to send email' });
    }
}
