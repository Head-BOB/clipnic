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

const Step = ({ id, number, title, description, details, children, icon: Icon }: { id: string, number: string, title: string, description: string, details?: React.ReactNode, children?: React.ReactNode, icon: any }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative grid lg:grid-cols-2 gap-8 md:gap-12 items-start py-12 md:py-20 border-b border-white/5 last:border-0 scroll-mt-32"
    >
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center gap-4">
          <span className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand text-black flex items-center justify-center font-display text-lg md:text-xl font-bold shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.3)]">
            {number}
          </span>
          <div className="p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10">
            <Icon size={18} className="text-brand md:w-5 md:h-5" />
          </div>
        </div>
        <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none text-white">{title}</h3>
        <p className="font-sans text-base md:text-lg opacity-60 font-light leading-relaxed max-w-md">{description}</p>

        {details && (
          <div className="pt-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-brand hover:text-white transition-colors"
            >
              {showMore ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {showMore ? 'Show Less' : 'Show Detailed Steps'}
            </button>
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border-l-2 border-l-brand/30 border border-white/5 font-sans text-sm text-white/60 leading-relaxed space-y-4">
                    {details}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      <div className="relative group mt-6 lg:mt-0 lg:sticky lg:top-32">
        <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative bg-[#080808] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 backdrop-blur-xl overflow-hidden shadow-2xl">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const DashPreview = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-6">
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

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-48 pb-20 md:pb-40">
        <header className="max-w-3xl mb-16 md:mb-32 space-y-6 md:space-y-8 text-center lg:text-left">

          <h1 className="font-display text-[10vw] md:text-[7vw] leading-[0.85] tracking-tighter uppercase text-white">
            Targeting <br /> <span className="text-brand">Tier 1</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light leading-relaxed text-balance">
            Strategic guide to establishing a USA-based presence for maximum algorithmic reach and premium CPM distribution.
          </p>
        </header>

        <div className="space-y-12">
          {/* Step 1: Hardware Protocol */}
          <Step
            id="hardware"
            number="01"
            title="Hardware Protocol"
            description="Isolate your distribution environment using a dedicated mobile device."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Use a separate iPhone or Android device dedicated solely to clipping.</li>
                <li><strong className="text-white">Factory Reset</strong> the device before initial setup to clear all previous location data.</li>
                <li>Configure the system settings to the <strong className="text-white">USA Region</strong>.</li>
                <li>This ensures the hardware ID is associated with a Tier 1 demographic.</li>
              </ul>
            }
            icon={Smartphone}
          >
            <DashPreview>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Device Status</span>
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold rounded-full">USA REGION SET</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <Cpu size={14} className="text-white/40" />
                      <span className="text-[10px] text-white/60">System Clean</span>
                    </div>
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  </div>
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
            title="Network Masking"
            description="Establish a secure, encrypted tunnel to a Tier 1 gateway."
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
                    <p className="text-[10px] uppercase tracking-widest text-brand mb-1">Encrypted Tunnel</p>
                    <p className="text-2xl font-mono text-white">USA Gateway Active</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="h-full w-1/3 bg-brand"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-brand">SECURED</span>
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
            title="App Deployment"
            description="Install the social platform within your secured environment."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Ensure your VPN/Proxy is <strong className="text-white">active</strong> before accessing the App Store or Play Store.</li>
                <li>Download the relevant social application while connected to the USA gateway.</li>
                <li>This ensures the app cache initializes with USA localization metadata.</li>
              </ul>
            }
            icon={Download}
          >
            <DashPreview>
              <div className="bg-black border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Download size={24} className="text-white/40" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Installing Metadata</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Package: Social_Platform_USA</p>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 4: Account Generation */}
          <Step
            id="account"
            number="04"
            title="Identity Creation"
            description="Register a fresh account under the USA protocol."
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
                      <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">Protocol Matched</span>
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
            title="Social Integration"
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

          {/* Optional: Physical SIM */}
          <Step
            id="optional"
            number="OPT"
            title="USA SIM Integration"
            description="Enhanced hardware masking for ultimate distribution success."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Using a <strong className="text-white">Physical USA SIM Card</strong> can further solidify your Tier 1 status.</li>
                <li>While not mandatory, it significantly reduces the risk of flagging.</li>
                <li>The device will detect the carrier as USA-based, bypassing secondary location checks.</li>
              </ul>
            }
            icon={Terminal}
          >
            <DashPreview>
              <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-brand/20 flex items-center justify-between group cursor-help">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <Search size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">SIM Recognition</p>
                    <p className="text-[9px] text-brand/60 uppercase font-mono">Carrier: T-Mobile USA</p>
                  </div>
                </div>
                <div className="text-[10px] font-black text-brand bg-brand/10 px-3 py-1 rounded-full">RECOMMENDED</div>
              </div>
            </DashPreview>
          </Step>
        </div>

        {/* Footer CTA */}
        <footer className="mt-32 pt-20 border-t border-white/5 text-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter">Ready to <span className="text-brand">Scale</span>?</h2>
            <p className="font-sans opacity-40 text-sm max-w-md mx-auto">Apply these protocols to your next campaign for maximum revenue efficiency.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'https://dash.clipnic.com/'}
                className="px-12 py-5 bg-brand text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-[0_20px_60px_rgba(var(--color-brand-rgb),0.3)]"
              >
                Launch Dashboard
              </button>
            </div>
          </div>

          <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20 font-mono text-[9px] uppercase tracking-[0.3em]">
            <p>© 2026 CLIPNIC.COM</p>
            <div className="flex gap-8">
              <a href="/privacy" className="hover:text-brand transition-colors">Privacy Protocol</a>
              <a href="/terms" className="hover:text-brand transition-colors">Service Terms</a>
            </div>
          </div>
        </footer>
      </main>

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
