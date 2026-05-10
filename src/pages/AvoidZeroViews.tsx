import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Clock,
  Target,
  ShieldAlert,
  UserCheck,
  Zap,
  Flame,
  MessageCircle,
  TrendingUp,
  Smartphone,
  CheckCircle2,
  Star,
  Lock
} from 'lucide-react';
import { Footer as SharedFooter } from '../components/Footer';

const Step = ({ id, number, title, description, details, children, icon: Icon }: { id: string, number: string, title: string, description: string, details?: React.ReactNode, children?: React.ReactNode, icon: any }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative grid lg:grid-cols-2 gap-12 md:gap-20 items-start py-12 md:py-20 border-b border-white/5 last:border-0 scroll-mt-32"
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
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5 font-sans text-sm md:text-base text-white/60 leading-relaxed space-y-4">
            {details}
          </div>
        )}
      </div>

      {children && (
        <div className="relative lg:sticky lg:top-40 group/preview">
          {children}
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

export const AvoidZeroViews = () => {
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
          onClick={() => window.location.href = '/docs'}
          className="group flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-48 pb-10 md:pb-20">
        <header className="max-w-4xl mb-16 md:mb-32 space-y-6 md:space-y-8 text-center lg:text-left">

          <h1 className="font-display text-[10vw] md:text-[7vw] leading-[0.85] tracking-tighter uppercase text-white">
            Avoid <br /> <span className="text-brand">0 Views</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light leading-relaxed text-balance">
            Alright, listen up—this is one of the most important steps if you want your content to actually get views. 
            Even with the best videos, if you don’t warm up your account properly, the algorithm might not push them at all.
          </p>
        </header>

        <div className="relative space-y-6">
          {/* Continuous Connection Line */}
          <div className="absolute -left-8 md:-left-12 top-40 bottom-40 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent hidden lg:block" />

          {/* Step 1: Don't Rush It */}
          <Step
            id="rush"
            number="01"
            title="Don't Rush It"
            description="You just made a new account? Cool. But don't post anything yet."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>For the first <strong className="text-white">24-48 hours</strong>, just act like a regular user.</li>
                <li>Scroll through videos, like some, leave comments, and follow a few pages.</li>
                <li>This tells TikTok you're a <strong className="text-white">real person</strong>, not a bot.</li>
              </ul>
            }
            icon={Clock}
          >
            <DashPreview>
               <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                      <UserCheck size={20} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Human Check</p>
                      <motion.p 
                        initial={{ opacity: 0.4 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-[10px] text-brand font-bold uppercase tracking-widest"
                      >
                        Verification Complete
                      </motion.p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 size={20} className="text-brand shadow-[0_0_20px_rgba(var(--color-brand-rgb),0.4)]" />
                  </motion.div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand shadow-[0_0_10px_rgba(var(--color-brand-rgb),0.5)]"
                  />
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 2: Stay in Your Niche */}
          <Step
            id="niche"
            number="02"
            title="Stay in Your Niche"
            description="Only engage with content similar to what you plan to post."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>If you’re going to make <strong className="text-white">fitness content</strong>, watch and interact with fitness videos.</li>
                <li>If you’re into <strong className="text-white">finance</strong>, engage with finance creators.</li>
                <li>This helps the algorithm understand what your account is about.</li>
              </ul>
            }
            icon={Target}
          >
            <DashPreview>
               <div className="p-8 bg-black rounded-2xl border border-white/10 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {['Fitness', 'Finance', 'Gaming', 'Tech'].map((tag) => (
                    <span key={tag} className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest ${tag === 'Fitness' ? 'bg-brand text-black' : 'bg-white/5 text-white/40'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] text-white/40 italic">Algorithm: "Okay, I know what you like!"</p>
              </div>
            </DashPreview>
          </Step>

          {/* Step 3: No Spammy Behavior */}
          <Step
            id="spam"
            number="03"
            title="No Spammy Behavior"
            description="Don't go crazy following a bunch of people or liking too many posts."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>That’s a red flag. Keep it slow.</li>
                <li>Follow <strong className="text-white">10-20 people</strong> a day max.</li>
                <li>Like a reasonable amount of videos—don't just rapid-fire like everything.</li>
              </ul>
            }
            icon={ShieldAlert}
          >
             <DashPreview>
              <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-2xl space-y-4">
                <div className="flex items-center gap-3 text-amber-500">
                  <Lock size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Spam Filter: ACTIVE</p>
                </div>
                <p className="text-xs text-white/60">Too many actions in 60 seconds will flag your account.</p>
              </div>
            </DashPreview>
          </Step>

          {/* Step 4: Set Up Properly */}
          <Step
            id="setup"
            number="04"
            title="Set Up Your Account"
            description="Link an email and phone number to your account."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>This makes it look <strong className="text-white">more legit</strong>.</li>
                <li>Reduces the risk of limiting your reach.</li>
                <li>Fill out your bio and add a profile picture.</li>
              </ul>
            }
            icon={Smartphone}
          >
            <DashPreview>
              <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl space-y-4 text-center">
                <div className="flex justify-center gap-4">
                  <div className="p-3 bg-brand/10 border border-brand/20 rounded-xl text-brand">
                    <UserCheck size={20} />
                  </div>
                  <div className="p-3 bg-brand/10 border border-brand/20 rounded-xl text-brand">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Account Authenticated</p>
              </div>
            </DashPreview>
          </Step>

          {/* Step 5: Start Posting Smartly */}
          <Step
            id="posting"
            number="05"
            title="Start Posting Smartly"
            description="After warming up, you can start posting. Don't be a bot."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Try using <strong className="text-white">trending sounds</strong> and hashtags.</li>
                <li>Don’t delete videos too fast—the algorithm tracks how you handle your content.</li>
                <li>Reply to comments to boost engagement.</li>
              </ul>
            }
            icon={Zap}
          >
            <DashPreview>
              <div className="p-8 bg-brand text-black rounded-2xl space-y-4 shadow-[0_0_50px_rgba(var(--color-brand-rgb),0.4)]">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-widest">Trending Sound</p>
                  <TrendingUp size={14} />
                </div>
                <p className="text-2xl font-display uppercase tracking-tight">Viral Potential: High</p>
              </div>
            </DashPreview>
          </Step>
        </div>

        {/* Bonus Tip Section */}
        <section className="mt-20 md:mt-40 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-brand text-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Star size={120} />
          </div>
          <div className="max-w-3xl space-y-8 relative z-10">
            <h2 className="font-display text-4xl md:text-7xl tracking-tighter uppercase leading-none">Bonus Tip: <br /> <span className="opacity-60 text-ink">Be Social</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center">
                  <Flame size={20} />
                </div>
                <h4 className="font-display text-xl uppercase">Use Stories</h4>
                <p className="font-sans text-sm opacity-70 leading-relaxed">If you’re active on Instagram, use stories to engage. It keeps your audience warm.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <h4 className="font-display text-xl uppercase">Reply to All</h4>
                <p className="font-sans text-sm opacity-70 leading-relaxed">Replying to comments helps boost engagement, which pushes your videos to more people.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="mt-10 md:mt-20">
        <SharedFooter />
      </div>

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

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
