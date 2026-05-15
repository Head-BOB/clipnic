const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Reports a visitor to the backend monitor.
 * The backend handles IP enrichment (Location/ISP) and Discord logging securely.
 */
export const reportVisit = async () => {
    // Avoid double reporting in React Strict Mode dev
    const lastReport = sessionStorage.getItem('last-visit-report');
    const now = Date.now();
    
    // Only report once per 30 minutes per session to avoid spam
    if (lastReport && now - parseInt(lastReport) < 30 * 60 * 1000) return;
    sessionStorage.setItem('last-visit-report', now.toString());

    try {
        await fetch(`${API_URL}/monitor/visit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page: window.location.pathname + window.location.search,
                userAgent: navigator.userAgent
            })
        });
    } catch (e) {
        // Silent fail in production
        console.warn('[Monitor] Failed to report visit:', e);
    }
};
