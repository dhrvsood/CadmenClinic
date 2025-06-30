export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { invoiceId } = req.body;

  if (!invoiceId) {
    return res.status(400).json({ error: 'Missing invoiceId in request body' });
  }

  const zenotiApiUrl = `https://api.zenoti.com/v1/invoices/${invoiceId}/email`;
  const zenotiAuth = process.env.ZENOTI_AUTH;

  try {
    const response = await fetch(zenotiApiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `apikey ${zenotiAuth}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: 'Zenoti API error', details: errorData });
    }

    const responseData = await response.json();
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error sending invoice email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}