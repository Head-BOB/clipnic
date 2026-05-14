/**
 * Landing page visitor monitoring utility.
 */

const getApiUrl = () => {
    const envUrl = import.meta.env.VITE_API_URL;
    if (envUrl) return envUrl.replace(/\/$/, '');
    // Fallback to production API
    return 'https://api.clipnic.com/api';
};

const API_URL = getApiUrl();

export const reportVisit = async () => {
    // Avoid double reporting in React Strict Mode dev
    const lastReport = sessionStorage.getItem('last-visit-report');
    const now = Date.now();
    
    if (lastReport && now - parseInt(lastReport) < 5000) return;
    sessionStorage.setItem('last-visit-report', now.toString());

    const payload = { 
        title: 'Landing Page Visit', 
        message: `A user has visited the landing page: ${window.location.pathname}${window.location.search}`, 
        level: 'info' 
    };

    try {
        console.log(`[Monitor] Reporting visit to: ${API_URL}/monitor/log`);
        await fetch(`${API_URL}/monitor/log`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.warn('[Monitor] Failed to report visit:', e);
    }
};
