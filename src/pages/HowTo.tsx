import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Zap, 
  LayoutGrid, 
  Link as LinkIcon, 
  Box, 
  Upload,
  Upload as UploadIcon, 
  DollarSign, 
  CheckCircle2, 
  Instagram, 
  Play, 
  ArrowRight, 
  TrendingUp, 
  Activity, 
  PlaySquare, 
  Wallet, 
  Eye, 
  Star, 
  ArrowUpRight, 
  FileText, 
  Video, 
  BarChart3, 
  Clock, 
  MessageSquare, 
  Terminal, 
  Search, 
  Youtube, 
  Music2, 
  Target, 
  User as UserIcon 
} from 'lucide-react';

const Step = ({ number, title, description, children, icon: Icon }: { number: string, title: string, description: string, children?: React.ReactNode, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative grid lg:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-20 border-b border-white/5 last:border-0"
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
    </div>
    <div className="relative group mt-6 lg:mt-0">
      <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative bg-[#080808] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 backdrop-blur-xl overflow-hidden shadow-2xl">
        {children}
      </div>
    </div>
  </motion.div>
);

const DashPreview = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-6">
    {children}
  </div>
);

export const HowToPage = () => {
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
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="font-sans font-bold text-[10px] md:text-xs tracking-widest hover:text-brand transition-colors uppercase hidden sm:block"
          >
            Back to Home
          </button>
          <button 
            onClick={() => window.location.href = 'https://dash.clipnic.com/'}
            className="px-4 md:px-6 py-2 rounded-full border border-white font-sans font-bold text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap"
          >
            GET STARTED
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-32">
        <header className="max-w-3xl mb-16 md:mb-32 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-8 md:w-12 h-px bg-brand" />
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-brand">Instructional Ledger</p>
          </div>
          <h1 className="font-display text-[14vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase text-white">
            How to <br /> <span className="text-brand">Earn</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Follow these steps to access the dashboard, join campaigns, and get paid for your views.
          </p>
        </header>

        <div className="space-y-12">
          {/* Step 1: Visit Dash */}
          <Step 
            number="01"
            title="Visit dash.clipnic.com"
            description="Go to the Clipnic dashboard. This is your primary command center for managing all your clipping activities."
            icon={LayoutGrid}
          >
            <DashPreview>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center border border-white/10">
                    <LayoutGrid size={14} className="text-white/40" />
                  </div>
                  <span className="font-mono text-[10px] md:text-xs text-white/60">dash.clipnic.com</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="pt-4 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/[0.06] flex flex-col justify-between h-20 md:h-24">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-brand/10">
                      <Activity size={10} className="text-brand" />
                    </div>
                    <span className="text-[7px] font-bold text-white/25 uppercase tracking-widest">Network</span>
                  </div>
                  <p className="text-sm md:text-xl font-mono font-bold text-white/90 uppercase tracking-tighter">Connected</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand/5 border border-brand/15 flex flex-col justify-between h-20 md:h-24">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-brand/10">
                      <Wallet size={10} className="text-brand" />
                    </div>
                    <span className="text-[7px] font-bold text-white/25 uppercase tracking-widest">Balance</span>
                  </div>
                  <p className="text-sm md:text-xl font-mono font-bold text-brand">$0.00</p>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 2: Authenticate */}
          <Step 
            number="02"
            title="Authenticate Account"
            description="Securely link your account using Discord. This identifies you as a verified clipper in our network."
            icon={LinkIcon}
          >
            <DashPreview>
              <div className="flex flex-col items-center py-6 md:py-10 space-y-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5865F2] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(88,101,242,0.4)] border border-white/10">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="white" className="md:w-9 md:h-9"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                </div>
                <div className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-sans font-bold text-xs md:text-sm tracking-widest uppercase transition-all shadow-xl">
                  Login with Discord
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 3: Active Campaigns */}
          <Step 
            number="03"
            title="Active Campaigns"
            description="Navigate to the Active Campaigns tab in the sidebar to browse all available opportunities."
            icon={Box}
          >
            <DashPreview>
              <div className="flex h-[320px] md:h-[420px] bg-black border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Visual Sidebar */}
                <div className="w-16 md:w-44 border-r border-white/10 bg-white/[0.01] flex flex-col p-4 gap-2">
                  <div className="flex items-center gap-1.5 mb-6 px-1 md:px-2">
                    <img src="/logo.webp" className="w-4 h-4 md:w-5 md:h-5 rounded" alt="Logo" />
                    <span className="font-display text-[7px] md:text-[9px] tracking-widest text-white uppercase hidden md:block">CLIPNIC</span>
                  </div>
                  <div className="space-y-1">
                    <div className="py-2 px-2 md:px-3 rounded-lg text-white/30 flex items-center justify-center md:justify-start gap-3">
                      <LayoutGrid size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest hidden md:block">Dashboard</span>
                    </div>
                    <div className="py-2 px-2 md:px-3 rounded-lg bg-white/10 text-white border border-white/5 flex items-center justify-center md:justify-start gap-3">
                      <Box size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest hidden md:block">Campaigns</span>
                    </div>
                    <div className="py-2 px-2 md:px-3 rounded-lg text-white/30 flex items-center justify-center md:justify-start gap-3">
                      <Target size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest hidden md:block">Joined</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-hidden flex flex-col">
                  <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar bg-white/[0.01]">
                    <div className="relative group rounded-xl md:rounded-2xl bg-[#0c0c0c] border border-white/[0.06] overflow-hidden shadow-lg">
                      <div className="h-20 md:h-24 w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-emerald-500/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
                        <div className="absolute top-2 md:top-3 left-2 md:left-3 z-10 flex flex-col gap-1.5">
                          <div className="px-1.5 py-0.5 rounded bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[6px] md:text-[7px] font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
                            Active
                          </div>
                        </div>
                      </div>

                      <div className="p-3 md:p-4 pt-1 md:pt-2 space-y-3">
                        <h3 className="text-xs md:text-sm font-bold leading-tight tracking-tight text-white/90 uppercase">Prime Campaign</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-1.5 md:p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <div className="flex items-center gap-1 text-white/20 mb-0.5">
                              <DollarSign size={8} />
                              <span className="text-[6px] md:text-[7px] font-bold uppercase tracking-widest">CPM</span>
                            </div>
                            <span className="font-mono text-[10px] md:text-xs font-bold text-white">$4.00</span>
                          </div>
                          <div className="p-1.5 md:p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <div className="flex items-center gap-1 text-white/20 mb-0.5">
                              <Wallet size={8} />
                              <span className="text-[6px] md:text-[7px] font-bold uppercase tracking-widest">Left</span>
                            </div>
                            <span className="font-mono text-[10px] md:text-xs font-bold text-emerald-400">$12K</span>
                          </div>
                        </div>
                        <button className="w-full bg-brand text-black font-sans font-bold py-2 rounded-lg md:rounded-xl uppercase tracking-widest text-[7px] md:text-[8px] shadow-lg">
                          Join Campaign
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 4: Resources & Rules */}
          <Step 
            number="04"
            title="Visit Resources & Rules"
            description="Once joined, check the specific rules and grab the source content. This ensures your videos are approved and eligible for payouts."
            icon={FileText}
          >
            <DashPreview>
              <div className="space-y-4">
                <div className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#0c0c0c] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-brand">
                      <FileText size={16} className="md:w-[18px] md:h-[18px]" />
                    </div>
                    <div>
                      <p className="font-sans font-bold text-xs md:text-sm text-white/90">Rules & Guidelines</p>
                      <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-widest">Read Carefully</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/20 md:w-4 md:h-4" />
                </div>
                <div className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#0c0c0c] border border-brand/20 flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20 text-brand">
                      <PlaySquare size={16} className="md:w-[18px] md:h-[18px]" />
                    </div>
                    <div>
                      <p className="font-sans font-bold text-xs md:text-sm text-white/90">Source Content</p>
                      <p className="text-[8px] md:text-[9px] text-brand uppercase tracking-widest">Download Folder</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-brand md:w-4 md:h-4" />
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 5: Edit Videos */}
          <Step 
            number="05"
            title="Edit the Videos"
            description="Use the source content to create engaging short-form clips. Add your own style, subtitles, and hooks to maximize your reach."
            icon={Video}
          >
            <DashPreview>
              <div className="relative aspect-video rounded-xl md:rounded-2xl border border-white/10 overflow-hidden bg-black flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="flex flex-col items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand/10 border-2 border-brand/30 flex items-center justify-center">
                    <Video size={20} className="text-brand md:w-6 md:h-6" />
                  </div>
                  <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-brand font-black">Timeline Active</p>
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="h-full bg-brand"
                  />
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 6: Upload & Submit */}
          <Step 
            number="06"
            title="Upload and Submit"
            description="Post your edited video on TikTok, Reels, or Shorts. Then, copy the video link and submit it through our dashboard."
            icon={UploadIcon}
          >
            <DashPreview>
              <div className="space-y-4 md:space-y-6">
                <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-[#0c0c0c] border border-white/[0.06] shadow-xl">
                  <p className="font-sans text-[8px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] mb-3 md:mb-4">Paste Video Link</p>
                  <div className="relative">
                    <input
                      disabled
                      value="tiktok.com/@user/vid/123..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg md:rounded-xl pl-4 pr-10 md:pl-5 md:pr-12 py-3 md:py-4 font-mono text-[10px] md:text-xs text-white/40 focus:outline-none"
                    />
                    <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2">
                      <button className="p-1.5 md:p-2 bg-brand rounded-md md:rounded-lg text-black shadow-lg">
                        <ArrowRight size={14} className="md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-400">Verifying link</span>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 7: Monitor Performance */}
          <Step 
            number="07"
            title="Monitor Performance"
            description="Our system automatically tracks your views. When the campaign ends, your total earnings are settled and ready for payout."
            icon={BarChart3}
          >
            <DashPreview>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-[#0c0c0c] border border-white/[0.06] flex flex-col justify-between h-28 md:h-32">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="p-1 rounded bg-brand/10">
                        <TrendingUp size={10} className="text-brand md:w-3 md:h-3" />
                      </div>
                      <span className="text-[7px] md:text-[8px] font-bold text-white/25 uppercase tracking-widest">Total Reach</span>
                    </div>
                    <p className="text-xl md:text-3xl font-display text-white uppercase tracking-tighter">420K</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-brand/5 border border-brand/20 flex flex-col justify-between h-28 md:h-32">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="p-1 rounded bg-brand/10">
                        <DollarSign size={10} className="text-brand md:w-3 md:h-3" />
                      </div>
                      <span className="text-[7px] md:text-[8px] font-bold text-white/25 uppercase tracking-widest">Earnings</span>
                    </div>
                    <p className="text-xl md:text-3xl font-display font-bold text-brand">$1,680</p>
                  </div>
                </div>
              </div>
              <div className="p-3.5 md:p-5 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <Clock size={12} className="text-white/20 md:w-3.5 md:h-3.5" />
                  <span className="text-[8px] md:text-[9px] text-white/40 uppercase tracking-widest font-mono">Campaign ends soon</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              </div>
            </DashPreview>
          </Step>
        </div>

        {/* Support Section */}
        <section className="mt-20 md:mt-40 text-center py-20 md:py-32 px-6 md:px-8 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--color-brand-rgb),0.1) 0%,transparent 70%)] pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-8 md:space-y-12 relative z-10">
            <div className="flex justify-center mb-4 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5865F2]/10 rounded-2xl md:rounded-3xl flex items-center justify-center border border-[#5865F2]/20">
                <MessageSquare size={28} className="text-[#5865F2] md:w-8 md:h-8" />
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-7xl tracking-tighter uppercase leading-none text-white">Need <br /> <span className="text-brand">Support?</span></h2>
            <p className="font-sans text-base md:text-2xl opacity-60 font-light leading-relaxed">
              If you have any questions or need help with a campaign, join our community on Discord. Our team and fellow clippers are ready to help.
            </p>
            <div className="pt-4 md:pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://discord.gg/clipnic', '_blank')}
                className="inline-flex items-center gap-3 md:gap-4 px-10 md:px-16 py-4 md:py-6 rounded-full bg-[#5865F2] text-white font-sans font-bold text-sm md:text-lg uppercase tracking-widest shadow-[0_20px_60px_rgba(88,101,242,0.3)] hover:shadow-[0_20px_80px_rgba(88,101,242,0.5)] transition-all"
              >
                Join Discord
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 md:py-16 border-t border-white/5 text-center font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] opacity-30 px-6">
        © 2026 CLIPNIC.COM · ALL SYSTEMS OPERATIONAL
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        
        .font-display { font-family: 'Anton', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        :root {
          --color-brand: #05D588;
          --color-brand-rgb: 5, 213, 136;
        }

        .bg-brand { background-color: var(--color-brand); }
        .text-brand { color: var(--color-brand); }
        .border-brand { border-color: var(--color-brand); }
        .selection\\:bg-brand::selection { background-color: var(--color-brand); }

        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        @media (min-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};
