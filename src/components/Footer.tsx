import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#050505] text-[#F5F5F5] pt-16 pb-12 px-0 border-t border-white/5 selection:bg-brand selection:text-black">
    <div className="max-w-[1600px] mx-auto px-8 md:px-16 space-y-12">
      {/* Top Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="font-display text-2xl tracking-widest uppercase text-brand">CLIPNIC.COM</div>
          <p className="font-sans text-sm opacity-40 leading-relaxed max-w-xs font-light">
            Empowering the next generation of creators through high-velocity decentralized distribution.
          </p>
          <div className="flex gap-5 items-center pt-4">
            <a href="https://instagram.com/clipnicteam" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/clipnic" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://discord.gg/pW6RJs8Ctp" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
            </a>
          </div>
        </div>

        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 font-bold text-white">Channels to contact us</p>
          <div className="flex flex-col gap-3 font-sans text-sm font-light">
            <a href="mailto:hello@clipnic.com" className="opacity-60 hover:opacity-100 hover:text-brand transition-all">hello@clipnic.com</a>
            <a href="mailto:support@clipnic.com" className="opacity-60 hover:opacity-100 hover:text-brand transition-all">support@clipnic.com</a>
            <a href="mailto:collab@clipnic.com" className="opacity-60 hover:opacity-100 hover:text-brand transition-all">collab@clipnic.com</a>
          </div>
        </div>

        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 font-bold text-white">Ecosystem</p>
          <div className="flex flex-col gap-3 font-sans text-sm font-light">
            <a href="/docs" className="opacity-60 hover:opacity-100 text-brand font-bold transition-all">Documentation</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-all">Success Ledger</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-all">Revenue Model</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-all">Viral Metrics</a>
          </div>
        </div>

        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 font-bold text-white">Legal</p>
          <div className="flex flex-col gap-3 font-sans text-sm font-light">
            <a href="/privacy" className="opacity-60 hover:opacity-100 transition-all">Privacy Policy</a>
            <a href="/terms" className="opacity-60 hover:opacity-100 transition-all">Terms of Service</a>
            <a href="/terms" className="opacity-60 hover:opacity-100 transition-all">Clipper Terms</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center gap-6">
        <div className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-30 text-center font-bold">
          © 2026 CLIPNIC.COM · ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  </footer>
);
