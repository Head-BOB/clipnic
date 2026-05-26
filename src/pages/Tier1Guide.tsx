import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Smartphone,
  Shield,
  Download,
  UserPlus,
  Flame,
  Globe,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Terminal,
  Search,
  Lock,
  Cpu
} from 'lucide-react';
import { Footer as SharedFooter } from '../components/Footer';

const Step = ({ id, number, title, description, details, children, icon: Icon }: { id: string, number: string, title: string, description: string, details?: React.ReactNode, children?: React.ReactNode, icon: any }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative grid lg:grid-cols-2 gap-12 md:gap-20 items-start py-20 md:py-32 border-b border-white/5 last:border-0 scroll-mt-32"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-8 md:-left-12 top-40 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_20px_rgba(var(--color-brand-rgb),0.6)] hidden lg:block z-10" />

      <div className="space-y-8 md:space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand/40">Step {number}</span>
            <div className="h-px flex-grow bg-white/5" />
          </div>
          <div className="space-y-4">
            <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-brand">
              <Icon size={24} />
            </div>
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none text-white">{title}</h3>
            <p className="font-sans text-lg md:text-xl opacity-60 font-light leading-relaxed">{description}</p>
          </div>
        </div>

        {details && (
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 font-sans text-sm text-white/60 leading-relaxed space-y-4">
            {details}
          </div>
        )}
      </div>

      {children && (
        <div className="relative lg:sticky lg:top-40 group/preview">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand/5 blur-[100px] rounded-full opacity-0 group-hover/preview:opacity-100 transition-opacity duration-1000" />

          <div className="relative rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#080808]/60 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-700 group-hover/preview:border-white/20">
            {/* Subtle Inner Border/Bezel */}
            <div className="absolute inset-0 border border-white/5 rounded-[inherit] pointer-events-none" />
            {children}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const DashPreview = ({ children }: { children: React.ReactNode }) => (
  <div className="p-3 md:p-6 space-y-6">
    {children}
  </div>
);

export const Tier1Guide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-brand selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-6 md:py-8 px-6 lg:px-12 flex justify-between items-center">
        <div
          className="flex items-center gap-1.5 cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          <img src="/logo.webp" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" alt="Clipnic Logo" />
          <span className="font-display text-lg md:text-2xl tracking-widest uppercase">CLIPNIC.COM</span>
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="group flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-48 pb-10 md:pb-20">
        <header className="max-w-3xl mb-16 md:mb-32 space-y-6 md:space-y-8 text-center lg:text-left">

          <h1 className="font-display text-[10vw] md:text-[7vw] leading-[0.85] tracking-tighter uppercase text-white">
            Targeting <br /> <span className="text-brand">Tier 1</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light leading-relaxed text-balance">
            Strategic guide to establishing a USA-based presence to reach more people and earn higher payouts.
          </p>
        </header>

        <div className="relative space-y-12">
          {/* Continuous Connection Line */}
          <div className="absolute -left-8 md:-left-12 top-40 bottom-40 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent hidden lg:block" />

          {/* Step 1: Hardware Protocol */}
          <Step
            id="hardware"
            number="01"
            title="Use a Separate iPhone & Android"
            description="(optional) It would be more efficient if you use a separate iPhone or Android device for clipping This makes the device appear as a USA phone."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Use a separate iPhone or Android device to clipping.</li>
                <li><strong className="text-white">Factory Reset</strong> the device before initial setup to clear all previous location data.</li>
                <li>Configure the system settings to the <strong className="text-white">USA Region</strong>.</li>
                <li>This ensures the device is associated with a Tier 1 demographic.</li>
              </ul>
            }
            icon={Smartphone}
          >
            <DashPreview>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Device Status</span>
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold rounded-full">USA REGION </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <Globe size={14} className="text-white/40" />
                      <span className="text-[10px] text-white/60">Region: United States</span>
                    </div>
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  </div>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 2: Network Encryption */}
          <Step
            id="network"
            number="02"
            title="Use a VPN/Proxy"
            description="Establish VPN/Proxy for a Tier 1 country"
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Download and install a high-quality <strong className="text-white">VPN or Proxy</strong>.</li>
                <li>We recommend using a dedicated proxy, but you can start with <a href="https://apps.apple.com/lk/app/vpn-super-unlimited-proxy/id1370293473" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4">this VPN</a> for testing.</li>
                <li>Connect to any <strong className="text-white">USA location</strong> (e.g., New York, Los Angeles).</li>
                <li>Avoid free VPNs if possible, as their IP ranges are often flagged by social algorithms.</li>
              </ul>
            }
            icon={Shield}
          >
            <DashPreview>
              <div className="relative p-6 rounded-3xl bg-brand/5 border border-brand/20 overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <Lock size={20} className="text-brand opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand mb-1">VPN/Proxy</p>
                    <p className="text-2xl font-mono text-white">USA VPN/Proxy Active</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                      </div>
                      <span className="text-[9px] font-bold text-brand uppercase tracking-widest">Stable</span>
                    </div>
                    <div className="relative h-1 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ left: ["-100%", "200%"] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2, 
                          ease: "linear" 
                        }}
                        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-brand to-transparent"
                      />
                    </div>
                  </div>
                  <a
                    href="https://apps.apple.com/lk/app/vpn-super-unlimited-proxy/id1370293473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-[9px] flex items-center justify-center gap-2 hover:bg-brand transition-colors"
                  >
                    Access Recommended VPN <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 3: Application Deployment */}
          <Step
            id="deployment"
            number="03"
            title="App Installation"
            description="Install the social platform within your secured environment."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Ensure your VPN/Proxy is <strong className="text-white">active</strong> before accessing the App Store or Play Store.</li>
                <li>Download the relevant social application while connected to the USA gateway.</li>
                <li>This ensures the app cache initializes with USA localization .</li>
              </ul>
            }
            icon={Download}
          >
            <DashPreview>
              <div className="bg-black border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center space-y-6 shadow-2xl">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-3xl bg-brand/10 border border-brand/20 flex items-center justify-center shadow-[0_0_40px_rgba(var(--color-brand-rgb),0.15)]"
                >
                  <Download size={32} className="text-brand" />
                </motion.div>
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="text-white/40">Initializing Cache</span>
                    <span className="text-brand animate-pulse">84%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "84%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-brand shadow-[0_0_15px_rgba(var(--color-brand-rgb),0.5)]"
                    />
                  </div>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 4: Account Generation */}
          <Step
            id="account"
            number="04"
            title="Identity Creation"
            description="Register a fresh account under the USA"
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Open the application and initiate the sign-up process.</li>
                <li>Verify that the phone number country code defaults to <strong className="text-white">+1 (USA)</strong>.</li>
                <li>If it shows your local code, re-check your VPN and region settings before proceeding.</li>
                <li>Always use a fresh email address for new accounts.</li>
              </ul>
            }
            icon={UserPlus}
          >
            <DashPreview>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Identity Verification</p>
                  <div className="p-4 bg-black rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-sm font-mono text-white">+1 (USA)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">USA Matched</span>
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-1 bg-brand rounded-full" />
                  <div className="flex-1 h-1 bg-brand rounded-full" />
                  <div className="flex-1 h-1 bg-white/10 rounded-full" />
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 5: Engagement Phase */}
          <Step
            id="engagement"
            number="05"
            title="Warm it up"
            description="Warm up the account to establish human-like activity markers."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Follow the standard <strong className="text-white">warm-up process</strong> for the first 24-48 hours.</li>
                <li>Engage with content naturally: search for niches, like relevant videos, and scroll.</li>
                <li>Act like a human, not an automated bot.</li>
                <li><strong className="text-white">Avoid aggressive actions</strong> such as posting immediately after account creation.</li>
              </ul>
            }
            icon={Flame}
          >
            <DashPreview>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand/20 border border-brand/50 flex items-center justify-center">
                    <Flame size={20} className="text-brand animate-pulse" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">Warming Up System</p>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-1">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                      className="h-1 flex-1 bg-brand rounded-full"
                    />
                  ))}
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* New Guide Bridge: Avoid 0 Views */}
          <section className="py-20 md:py-32 border-t border-white/5">
            <div className="bg-brand/5 border border-brand/20 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-brand/10 transition-all text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand text-black font-mono text-[9px] font-black uppercase tracking-widest">
                  NEXT STEP
                </div>
                <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none text-white">
                  Stop Getting <br /> <span className="text-brand">0 Views</span>
                </h2>
                <p className="font-sans text-lg opacity-60 font-light max-w-md">
                  Setting up the account is only half the battle. Learn how to properly warm it up so TikTok actually trusts you.
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/docs/avoid-0-views'}
                className="px-12 py-6 bg-brand text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-xl flex items-center gap-4 group-hover:scale-105"
              >
                View Warmup Guide <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
      </main>

      <div className="mt-10 md:mt-20">
        <SharedFooter />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};
