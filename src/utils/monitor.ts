const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

export const reportVisit = async () => {
    if (!DISCORD_WEBHOOK_URL) return;

    // Avoid double reporting in React Strict Mode dev
    const lastReport = sessionStorage.getItem('last-visit-report');
    const now = Date.now();
    
    if (lastReport && now - parseInt(lastReport) < 5000) return;
    sessionStorage.setItem('last-visit-report', now.toString());

    let locationInfo = 'Location: Unknown';
    try {
        const geoRes = await fetch('https://ip-api.com/json');
        const geoData = await geoRes.json();
        if (geoData.status === 'success') {
            locationInfo = `📍 **${geoData.city}, ${geoData.country}** (${geoData.isp})`;
        }
    } catch (e) {
        // Fallback if geo-api is blocked
    }

    const payload = {
        embeds: [{
            title: '🌐 Landing Page Visit',
            description: `A user has visited the landing page: **${window.location.pathname}${window.location.search}**\n\n${locationInfo}`,
            color: 0x10b981, // Green
            timestamp: new Date().toISOString(),
            footer: { 
                text: `Clipnic Monitor · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })} IST` 
            }
        }]
    };

    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        // Silent fail for production
    }
};
