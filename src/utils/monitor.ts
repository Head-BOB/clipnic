const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

/**
 * Reports a visitor directly from the frontend.
 * Performs its own IP lookup for location/ISP data.
 */
export const reportVisit = async () => {
    if (!DISCORD_WEBHOOK_URL) return;

    // Avoid double reporting in React Strict Mode dev
    const lastReport = sessionStorage.getItem('last-visit-report');
    const now = Date.now();
    
    // Only report every 5 seconds per session (to allow testing)
    if (lastReport && now - parseInt(lastReport) < 5000) return;
    sessionStorage.setItem('last-visit-report', now.toString());

    let locationInfo = '📍 Location: Unknown';
    
    try {
        // Switch to FreeIPAPI (Supports HTTPS for free)
        const geoRes = await fetch('https://freeipapi.com/api/json');
        const data = await geoRes.json();
        
        if (data.cityName) {
            const countryCode = data.countryCode ? data.countryCode.toLowerCase() : '';
            const flag = countryCode ? `:flag_${countryCode}: ` : '📍 ';
            locationInfo = `${flag}**${data.cityName}, ${data.countryName}** (${data.ipVersion})`;
        }
    } catch (e) {
        console.warn('[Monitor] IP Lookup failed:', e);
    }

    const payload = {
        embeds: [{
            title: '🌐 New Visitor (Landing Page)',
            description: `**Origin**: ${locationInfo}\n**Page**: \`${window.location.pathname}${window.location.search}\`\n**Device**: \`${navigator.userAgent.slice(0, 100)}\``,
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
