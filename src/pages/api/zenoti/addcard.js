import axios from 'axios';

const addCard = async (req, res) => {
  const host = req.headers.host || '';
  const protocol = req.headers['x-forwarded-proto'] || 'https';

  // Allowed hosts whitelist (including regex for deploy previews)
  const allowedHosts = [
    'cadmenclinic.ca',
    'www.cadmenclinic.ca',
    'localhost:3000',
  ];

  // Regex to allow deploy previews: deploy-preview-{number}--cadmenclinic.netlify.app
  const deployPreviewRegex = /^deploy-preview-\d+--cadmenclinic\.netlify\.app$/;

  const isAllowedHost =
    allowedHosts.includes(host) || deployPreviewRegex.test(host);

  if (!isAllowedHost) {
    return res.status(403).json({ error: 'Host not allowed' });
  }

  const baseURL = `${protocol}://${host}`;

  console.log('BaseURL:', baseURL);

  try {
    const params = JSON.parse(req.body);
    const { guestId } = params;

    if (!guestId) {
      return res.status(400).json({ error: 'Guest ID is required' });
    }

    const data = {
      center_id: process.env.ZENOTI_CENTER_ID,
      redirect_uri: `${baseURL}/paymentsuccess`,
    };

    const config = {
      method: 'post',
      url: `https://api.zenoti.com/v1/guests/${guestId}/accounts`,
      headers: {
        Authorization: `apikey ${process.env.ZENOTI_AUTH}`,
        'Content-Type': 'application/json',
      },
      data,
    };

    const response = await axios(config);
    return res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to add card' });
  }
};

export default addCard;


// import axios from 'axios'

// const baseURL = process.env.URL || 'http://localhost:3000';

// const addCard = async (req, res) => {
//   console.log("BaseURL:", baseURL)
//   const params = JSON.parse(req.body)

//   const { guestId } = params

//   if (!guestId) {
//     return res.status(400).json({ error: 'Guest ID is required' })
//   }

//   try {
//     const data = {
//       center_id: process.env.ZENOTI_CENTER_ID,
//       redirect_uri: `${baseURL}/paymentsuccess`
//     }

//     const config = {
//       method: 'post',
//       url: `https://api.zenoti.com/v1/guests/${guestId}/accounts`,
//       headers: {
//         Authorization: `apikey ${process.env.ZENOTI_AUTH}`,
//         'Content-Type': 'application/json'
//       },
//       data: data
//     }

//     const response = await axios(config)
//     return res.status(200).json(response.data)
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: 'Failed to add card' })
//   }
// }

// export default addCard
