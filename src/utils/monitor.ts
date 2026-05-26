const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

/**
 * Helper to extract identity/name from URL parameters or session storage.
 */
export const getVisitorIdentity = (): string => {
    try {
        // 1. Try getting from sessionStorage
        const cached = sessionStorage.getItem('visitor-name');
        if (cached) return cached;

        // 2. Try getting from query parameters
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name') || params.get('user') || params.get('username') || params.get('ref') || params.get('discord') || params.get('email');
        if (name) {
            sessionStorage.setItem('visitor-name', name);
            return name;
        }
    } catch (e) {
        // Silent fail
    }
    return 'Guest/Anonymous';
};

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
        // Switch to ipapi.co (Supports HTTPS + Provides ISP/Org)
        const geoRes = await fetch('https://ipapi.co/json/');
        const data = await geoRes.json();
        
        if (data.city) {
            const countryCode = data.country_code ? data.country_code.toLowerCase() : '';
            const flag = countryCode ? `:flag_${countryCode}: ` : '📍 ';
            const isp = data.org || 'Unknown ISP';
            locationInfo = `${flag}**${data.city}, ${data.country_name}** (${isp})`;
        }
    } catch (e) {
        console.warn('[Monitor] IP Lookup failed:', e);
    }

    // Cache the resolved location for click logging
    sessionStorage.setItem('visitor-location-info', locationInfo);

    const visitorIdentity = getVisitorIdentity();

    const payload = {
        embeds: [{
            title: '🌐 New Visitor (Landing Page)',
            description: `**Identity**: \`${visitorIdentity}\`\n**Origin**: ${locationInfo}\n**Page**: \`${window.location.pathname}${window.location.search}\`\n**Device**: \`${navigator.userAgent.slice(0, 100)}\``,
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

/**
 * Reports a granular click event directly to Discord.
 * Uses cached location and prevents spamming/rate-limits.
 */
export const reportClick = async (elementName: string, additionalDetails?: string) => {
    if (!DISCORD_WEBHOOK_URL) return;

    // Rate limiting: Max 50 clicks logged per session to protect webhook
    const clickCountKey = 'click-report-count';
    const currentCount = parseInt(sessionStorage.getItem(clickCountKey) || '0', 10);
    if (currentCount >= 50) return;
    sessionStorage.setItem(clickCountKey, (currentCount + 1).toString());

    // Use cached location information if available
    const locationInfo = sessionStorage.getItem('visitor-location-info') || '📍 Location: Unknown (or pending)';
    const visitorIdentity = getVisitorIdentity();

    const payload = {
        embeds: [{
            title: '🖱️ Landing Page Click',
            description: `**Identity**: \`${visitorIdentity}\`\n**Action**: Clicked **${elementName}**\n**Details**: ${additionalDetails || 'None'}\n**Origin**: ${locationInfo}\n**Page**: \`${window.location.pathname}${window.location.search}\``,
            color: 0x3b82f6, // Blue
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
