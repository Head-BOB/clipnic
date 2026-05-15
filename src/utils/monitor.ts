const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

export const reportVisit = async () => {
    if (!DISCORD_WEBHOOK_URL) {
        console.warn('[Monitor] No Webhook URL found in environment.');
        return;
    }

    const lastReport = sessionStorage.getItem('last-visit-report');
    const now = Date.now();
    
    // Throttle: once per session or 30 mins
    if (lastReport && now - parseInt(lastReport) < 30 * 60 * 1000) return;
    sessionStorage.setItem('last-visit-report', now.toString());

    let locationInfo = '📍 Location: Unknown';
    
    try {
        // Switch to freeipapi.com (Free tier supports HTTPS)
        const geoRes = await fetch('https://freeipapi.com/api/json');
        const data = await geoRes.json();
        
        if (data.cityName) {
            locationInfo = `:flag_${data.countryCode.toLowerCase()}: **${data.cityName}, ${data.countryName}** (${data.ipAddress})`;
        }
    } catch (e) {
        console.warn('[Monitor] IP Lookup failed:', e);
    }

    const payload = {
        embeds: [{
            title: '🌐 New Visitor (Landing Page)',
            description: `**Origin**: ${locationInfo}\n**Page**: \`${window.location.pathname}${window.location.search}\`\n**Device**: \`${navigator.userAgent.slice(0, 100)}\``,
            color: 0x10b981,
            timestamp: new Date().toISOString(),
            footer: { 
                text: `Clipnic Monitor · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })} IST` 
            }
        }]
    };

    try {
        console.log('[Monitor] Sending visit log to Discord...');
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            console.log('[Monitor] Log sent successfully.');
        } else {
            console.error('[Monitor] Discord returned error:', response.status);
        }
    } catch (e) {
        console.error('[Monitor] Failed to send to Discord:', e);
    }
};
