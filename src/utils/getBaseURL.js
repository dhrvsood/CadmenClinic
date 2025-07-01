function getBaseURL(req, res) {
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
    return baseURL;
}

export default getBaseURL;