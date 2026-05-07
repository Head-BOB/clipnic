/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  Zap,
  ArrowRight,
  Instagram,
  ChevronDown,
  Link as LinkIcon,
  Upload as UploadIcon,
  DollarSign,
  TrendingUp,
  Share2,
  Trophy,
  History,
  CheckCircle2,
  Box,
  ArrowLeft,
  Eye,
  Play,
  BarChart2,
  ExternalLink
} from 'lucide-react';
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";

const BrandPartnershipPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for sending data (e.g., to a backend or Formspree)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-brand selection:text-ink">
      <nav className="p-8 lg:p-12 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => window.location.href = '/'}>
          <img src="logo.webp" className="w-8 h-8 rounded-lg object-cover" alt="Clipnic Logo" />
          <span className="font-display text-xl tracking-widest uppercase">CLIPNIC.COM</span>
        </div>
        <button onClick={() => window.location.href = '/'} className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2">
          <ArrowLeft size={12} />
          Back to Feed
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="font-display text-[12vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase">Scale <br /> Your <br /> <span className="text-brand">Viral</span> Velocity</h1>
            <p className="font-sans text-xl opacity-60 font-light max-w-md leading-relaxed">Join the global infrastructure for short-form video distribution. Deploy your first high-velocity campaign today.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <Zap size={24} className="text-brand" />
              </div>
              <div>
                <h4 className="font-display text-xl uppercase">Decentralized Reach</h4>
                <p className="font-sans opacity-40 text-sm">Thousands of professional clippers producing for your brand natively.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <TrendingUp size={24} className="text-brand" />
              </div>
              <div>
                <h4 className="font-display text-xl uppercase">Performance Driven</h4>
                <p className="font-sans opacity-40 text-sm">Only pay for verified engagement and impressions. High CPM efficiency.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {submitted ? (
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center space-y-8 py-20 backdrop-blur-3xl shadow-2xl">
              <div className="w-20 h-20 bg-brand text-ink rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(var(--color-brand-rgb),0.5)]">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-4xl uppercase">Transmission Received</h2>
                <p className="font-sans opacity-60 text-lg">Our strategy team will review your brand and reach out within 24 hours.</p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] space-y-8 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full -mr-16 -mt-16" />

              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 ml-4">Brand / Company Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter brand name"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand/50 focus:outline-none transition-all placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 ml-4">Corporate Email</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand/50 focus:outline-none transition-all placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 ml-4">Campaign Goal</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What are you looking to achieve?"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand/50 focus:outline-none transition-all placeholder:opacity-20 resize-none"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand text-ink font-sans font-bold py-6 rounded-2xl uppercase tracking-widest text-lg shadow-[0_20px_50px_rgba(var(--color-brand-rgb),0.3)] hover:shadow-[0_20px_60px_rgba(var(--color-brand-rgb),0.5)] transition-all"
              >
                Submit Partnership
              </motion.button>

              <p className="text-center font-sans text-[10px] opacity-40">By submitting, you agree to the Clipnic Terms of Service.</p>
            </form>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

const NotFound = () => (
  <div className="min-h-screen bg-ink flex items-center justify-center p-6 text-center text-paper">
    <div className="max-w-2xl space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        className="relative inline-block"
      >
        <div className="w-40 h-40 bg-paper/5 rounded-[3rem] flex items-center justify-center border border-paper/10 shadow-2xl relative z-10">
          <Zap size={64} className="text-brand fill-brand" />
        </div>
        <div className="absolute -top-4 -right-4 bg-brand text-ink font-display font-bold text-3xl w-20 h-20 rounded-3xl flex items-center justify-center border-8 border-ink rotate-12 shadow-2xl">
          404
        </div>
      </motion.div>
      <div className="space-y-6">
        <h1 className="font-display text-[10vw] md:text-[8vw] tracking-tighter leading-none uppercase">Transmission <br /> Lost</h1>
        <p className="font-sans opacity-60 text-xl font-light max-w-lg mx-auto">The requested sector could not be located in the current feed. The transmission may have been purged.</p>
      </div>
      <div className="pt-8">
        <button
          onClick={() => window.location.href = '/'}
          className="px-16 py-6 rounded-full bg-paper text-ink font-sans font-bold text-xl hover:opacity-90 transition-all uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
        >
          Return to Feed
        </button>
      </div>
    </div>
  </div>
);

// --- Components ---

const Navigation = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-8 px-6 lg:px-12 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-1.5 cursor-pointer"
        onClick={() => window.location.href = '/'}
      >
        <img src="logo.webp" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" alt="Clipnic Logo" />
        <span className="font-display text-xl md:text-2xl tracking-widest">CLIPNIC.COM</span>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onGetStarted}
        className="px-6 py-2 rounded-full border border-white font-sans font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all"
      >
        GET STARTED
      </motion.button>
    </nav>
  );
};



const GetStartedModal = ({ isOpen, onClose, onBrandLaunch }: { isOpen: boolean, onClose: () => void, onBrandLaunch: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/90 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-paper p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl space-y-8 md:space-y-12 text-ink border-4 border-ink"
        >
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none uppercase">Enter the <br /> Network</h2>
            <p className="font-sans opacity-60 text-base md:text-lg">Select your entry point to start growing or earning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <button
              onClick={onBrandLaunch}
              className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-ink hover:bg-ink hover:text-paper transition-all text-left space-y-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors">
                <Zap size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl md:text-2xl uppercase tracking-tight">Launch Campaign</h4>
                <p className="text-[10px] md:text-xs opacity-60 mt-1">Fund your campaign. Scale reach.</p>
              </div>
            </button>

            <button
              onClick={() => window.location.href = 'https://dash.clipnic.com/'}
              className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-ink hover:bg-ink hover:text-paper transition-all text-left space-y-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors">
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl md:text-2xl uppercase tracking-tight">Start Clipping</h4>
                <p className="text-[10px] md:text-xs opacity-60 mt-1">Post content. Get Paid Instantly.</p>
              </div>
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full py-4 text-xs font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
          >
            Cancel
          </button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const BrandGatewayModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [view, setView] = useState<'options' | 'form'>('options');
  const [formData, setFormData] = useState({ brand: '', email: '', goal: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleWebhookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brand || !formData.email || !formData.goal) return;

    setStatus('sending');
    try {
      const response = await fetch('https://discord.com/api/webhooks/1499094004422148390/mkc18PEy2nbbFP6LuXRIcH9LRLwmAVkdbDv1Chpe3T7mAGexWX5-xMJQuUVTeUcOeXy5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: "<@&1495708238988181686> 🚨 **NEW BRAND INQUIRY RECEIVED**",
          embeds: [{
            title: "🚀 Brand Partnership Request",
            color: 0x5865F2,
            fields: [
              { name: "🏢 Brand Name", value: formData.brand, inline: true },
              { name: "📧 Contact Email", value: formData.email, inline: true },
              { name: "🎯 Campaign Goal", value: formData.goal }
            ],
            timestamp: new Date().toISOString(),
            footer: { text: "Clipnic Transmission System" }
          }]
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setView('options');
          setStatus('idle');
          setFormData({ brand: '', email: '', goal: '' });
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-xl bg-paper p-8 md:p-12 rounded-[3rem] shadow-2xl text-ink border-4 border-ink overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full -mr-16 -mt-16" />

            {view === 'options' ? (
              <div className="space-y-10 relative z-10">
                <div className="text-center space-y-4">
                  <h2 className="font-display text-4xl md:text-5xl tracking-tighter leading-none uppercase">Select <br /> Gateway</h2>
                  <p className="font-sans opacity-60 text-sm max-w-xs mx-auto">Choose your preferred channel to initiate a partnership.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://discord.com/users/1497492779226366153', '_blank')}
                    className="group p-8 rounded-3xl bg-ink text-paper flex items-center justify-between hover:bg-black transition-all"
                  >
                    <div className="text-left space-y-1">
                      <p className="text-[10px] opacity-40 uppercase tracking-widest font-black">Direct Access</p>
                      <h4 className="font-display text-2xl uppercase">Contact Discord</h4>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#5865F2] text-white flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <Share2 size={24} />
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setView('form')}
                    className="group p-8 rounded-3xl border-2 border-ink flex items-center justify-between hover:bg-ink/5 transition-all"
                  >
                    <div className="text-left space-y-1">
                      <p className="text-[10px] opacity-40 uppercase tracking-widest font-black">Automated</p>
                      <h4 className="font-display text-2xl uppercase">Inquiry Form</h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-ink flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Box size={20} />
                    </div>
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <button onClick={() => setView('options')} className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 flex items-center gap-2">
                    <ArrowLeft size={12} /> Back
                  </button>
                  <h3 className="font-display text-2xl uppercase tracking-tighter">Inquiry Terminal</h3>
                </div>

                {status === 'success' ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-brand text-ink rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="font-display text-3xl uppercase">Transmission Sent</h4>
                    <p className="font-sans opacity-60 text-sm">Our team has been notified via Discord.</p>
                  </div>
                ) : (
                  <form onSubmit={handleWebhookSubmit} className="space-y-4">
                    <input
                      required
                      placeholder="Brand / Company Name"
                      value={formData.brand}
                      onChange={e => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-ink/50 focus:outline-none transition-all"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Corporate Email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-ink/50 focus:outline-none transition-all"
                    />
                    <textarea
                      required
                      rows={3}
                      placeholder="Campaign Goals"
                      value={formData.goal}
                      onChange={e => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-ink/50 focus:outline-none transition-all resize-none"
                    />
                    <button
                      disabled={status === 'sending'}
                      className="w-full bg-ink text-paper font-sans font-bold py-5 rounded-2xl uppercase tracking-widest disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Transmitting...' : 'Submit Inquiry'}
                    </button>
                    {status === 'error' && <p className="text-center text-red-500 text-[10px] uppercase font-bold">Transmission Failed. Try again.</p>}
                  </form>
                )}
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full mt-8 py-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 transition-opacity"
            >
              Exit Gateway
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ activeView, setActiveView, onBrandLaunch }: { activeView: 'clipper' | 'brand', setActiveView: (v: 'clipper' | 'brand') => void, onBrandLaunch: () => void }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-ink pt-32 pb-8">
      <motion.div
        style={{ scale }}
        className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"
      />

      <div className="relative z-10 text-center text-paper px-6 flex flex-col items-center justify-center flex-grow">
        <div className="relative">
          <motion.h1
            key={activeView}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[14vw] md:text-[18vw] leading-[0.8] tracking-tighter"
          >
            {activeView === 'clipper' ? (
              <>POST CLIPS <br /> <span className="text-stroke-paper text-ink">GET PAID</span></>
            ) : (
              <>GROW YOUR <br /> <span className="text-stroke-paper text-ink">BRAND</span></>
            )}
          </motion.h1>


        </div>

        <motion.p
          key={activeView + "p"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl mx-auto font-sans text-xl opacity-60 font-light text-balance"
        >
          {activeView === 'clipper'
            ? "Clipnic is a clipping company for turning engagement into capital. We pay clippers high CPMs for high-velocity short-form content. The best way to earn money by editing clips on TikTok, Reels, and Shorts."
            : "The leading clipping platform to grow your brand across thousands of accounts. We automate performance-based UGC and the creator economy to give you infinite organic reach through viral short-form video."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-12"
        >
          <div className="bg-white/5 p-2 rounded-full border border-white/10 flex gap-2 relative z-20">
            <button
              onMouseEnter={() => setActiveView('clipper')}
              onClick={() => {
                if (activeView === 'clipper') window.location.href = 'https://dash.clipnic.com/clipper';
                else setActiveView('clipper');
              }}
              className={`px-8 py-3 rounded-full font-sans font-bold text-[10px] md:text-sm transition-all ${activeView === 'clipper' ? 'bg-brand text-black shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.4)]' : 'text-white hover:bg-white/10'}`}
            >
              START EARNING
            </button>
            <button
              onMouseEnter={() => setActiveView('brand')}
              onClick={() => {
                if (activeView === 'brand') onBrandLaunch();
                else setActiveView('brand');
              }}
              className={`px-8 py-3 rounded-full font-sans font-bold text-[10px] md:text-sm transition-all ${activeView === 'brand' ? 'bg-brand text-black shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.4)]' : 'text-white hover:bg-white/10'}`}
            >
              LAUNCH CAMPAIGN
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="opacity-30 relative z-10 pt-8"
      >
        <ChevronDown size={32} color="white" />
      </motion.div>
    </section>
  );
};

const ProcessStep = ({ icon: Icon, title, desc, dashPreview, index }: { icon: any, title: string, desc: string, dashPreview?: ReactNode, index: number }) => (
  <section className={`py-32 px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
    >
      <div className={`mb-8 p-6 inline-block rounded-full border-2 ${index % 2 !== 0 ? 'bg-paper text-ink border-paper' : 'bg-ink text-paper border-ink'}`}>
        <Icon size={32} />
      </div>
      <h2 className="font-display text-4xl md:text-8xl tracking-tighter leading-none mb-8">
        {title}
      </h2>
      <p className="font-sans text-xl opacity-60 max-w-md font-light text-balance leading-relaxed">
        {desc}
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative aspect-square md:aspect-video lg:aspect-square bg-dash-bg border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center p-4 sm:p-8`}
    >
      <div className="w-full scale-[0.85] sm:scale-100 origin-center">
        {dashPreview}
      </div>
    </motion.div>
  </section>
);

const ConnectDash = () => (
  <div className="w-full space-y-4">
    <div className="border border-white/10 p-6 rounded-2xl bg-dash-card flex items-center justify-between text-white shadow-xl shadow-black/50">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-black border border-white/10 rounded-full grid place-items-center"><Instagram size={20} className="text-pink-500" /></div>
        <div>
          <p className="font-sans font-medium text-sm text-white">Link Socials</p>
          <p className="font-sans text-xs text-zinc-500">Connect primary platform</p>
        </div>
      </div>
      <div className="bg-pink-500/10 border border-pink-500/20 text-pink-400 px-3 py-1.5 rounded-full font-sans text-[10px] uppercase font-semibold flex items-center gap-2">
        <CheckCircle2 size={12} />
        IG: @CLIPNICTEAM
      </div>
    </div>

    <div className="border border-white/10 p-6 rounded-2xl bg-dash-card flex items-center justify-between text-white shadow-xl shadow-black/50 opacity-60">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#5865F2] rounded-full grid place-items-center"><div className="w-5 h-5 bg-white rounded-full mask-clipping" /></div>
        <div>
          <p className="font-sans font-medium text-sm text-white">Discord Verification</p>
          <p className="font-sans text-xs text-zinc-500">Join server to confirm identity</p>
        </div>
      </div>
      <div className="text-emerald-400 px-3 py-1.5 font-sans text-sm font-medium flex items-center gap-2">
        <CheckCircle2 size={16} />
        Verified
      </div>
    </div>
  </div>
);

const SubmissionDash = () => (
  <div className="w-full max-w-md space-y-4">
    <div className="bg-dash-card border border-white/10 p-6 rounded-2xl">
      <p className="font-sans text-xs text-zinc-500 mb-2 uppercase tracking-wide">Submit Clip URL</p>
      <div className="relative">
        <input
          disabled
          value="https://tiktok.com/@clipnic/video/123..."
          className="w-full bg-black border border-white/10 rounded-xl pl-4 pr-10 py-3 font-mono text-[10px] sm:text-sm focus:outline-none text-zinc-300"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <CheckCircle2 className="text-emerald-500" size={14} />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-5 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-1">Status</p>
        <p className="font-sans font-medium text-emerald-400">Yield Generating</p>
      </div>
      <div className="p-5 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-1">Est. Yield</p>
        <p className="font-mono font-medium text-white">$120.50</p>
      </div>
    </div>
  </div>
);

const EarningsDash = () => (
  <div className="w-full space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-3">Total Clips</p>
        <p className="font-sans font-medium text-4xl text-white">24</p>
      </div>
      <div className="p-6 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-3">Total Views</p>
        <p className="font-sans font-medium text-4xl text-white">1.2M</p>
      </div>
    </div>

    <div className="p-6 bg-dash-card border border-white/10 rounded-2xl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-sans font-semibold text-white">Recent Payouts</h3>
        <p className="font-sans text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">Available: $8,512</p>
      </div>
      <div className="space-y-4">
        {[
          { date: 'APR 23', amt: '+ $2,400.00', label: 'Velocity Bonus' },
          { date: 'APR 21', amt: '+ $1,150.20', label: 'Ad Revenue Share' }
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 last:pb-0">
            <div>
              <p className="font-sans font-medium text-sm text-zinc-200">{tx.label}</p>
              <p className="font-sans text-xs text-zinc-500 mt-1">{tx.date}</p>
            </div>
            <p className="font-mono text-sm text-white">{tx.amt}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Brand Previews ---

const BrandCampaignDash = () => (
  <div className="w-full space-y-4">
    <div className="bg-dash-card border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-xs text-zinc-500 uppercase tracking-wide">Active Campaign</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="font-sans text-[10px] text-emerald-500">RUNNING</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-400">Budget Deployed</span>
          <span className="text-white font-mono">$50,000.00</span>
        </div>
        <div className="w-full bg-black h-2 rounded-full overflow-hidden">
          <div className="bg-brand w-[65%] h-full" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-dash-card border border-white/10 rounded-2xl">
        <p className="text-[10px] text-zinc-500 uppercase mb-1">Clippers Active</p>
        <p className="text-2xl text-white font-display">1,420</p>
      </div>
      <div className="p-4 bg-dash-card border border-white/10 rounded-2xl">
        <p className="text-[10px] text-zinc-500 uppercase mb-1">Avg. CPM</p>
        <p className="text-2xl text-white font-display">$4.20</p>
      </div>
    </div>
  </div>
);

const BrandMetricsDash = () => (
  <div className="w-full space-y-4">
    <div className="bg-dash-card border border-white/10 p-6 rounded-2xl">
      <h3 className="font-sans text-sm text-white mb-4">Viral Velocity</h3>
      <div className="h-32 flex items-end gap-1">
        {[40, 20, 60, 80, 45, 90, 100, 70, 85].map((h, i) => (
          <div key={i} className="flex-grow bg-brand/20 border-t-2 border-brand rounded-t-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
    <div className="p-5 bg-dash-card border border-white/10 rounded-2xl flex items-center justify-between">
      <div>
        <p className="text-[10px] text-zinc-500 uppercase">Estimated Reach</p>
        <p className="text-xl text-white font-display">8.4M VIEWS</p>
      </div>
      <TrendingUp className="text-brand" size={24} />
    </div>
  </div>
);

const brandFaqItems = [
  {
    q: 'What do I need to get started?',
    a: 'Just your content and a clear direction for your brand. Our team takes it from there setting up your campaign infrastructure, briefing clippers, and launching distribution. No technical knowledge needed on your end.',
  },
  {
    q: 'Will I have to manage anything?',
    a: 'Nothing. We handle the full operation: building your clipping community, launching accounts across platforms, tracking performance, and optimising for reach. You just watch the numbers move.',
  },
  {
    q: 'What results can I expect?',
    a: 'Every campaign is different, but here\'s the standard: branded pages tailored to your identity, millions of organic views across TikTok, Reels and Shorts, a live dashboard with all your analytics, weekly performance reports, and 24/7 support from our team.',
  },
];

const clipperFaqItems = [
  {
    q: 'Do I need to monetize my channel?',
    a: 'No, you don\'t have to be monetized. Earnings are based on views, engagement, and the specific bounty rules for each campaign. Clipnic handles the attribution and payouts regardless of your channel status.',
  },
  {
    q: 'How do I get paid?',
    a: 'Payouts are processed directly to your linked wallet or bank account once you hit the minimum threshold. You can track your earnings in real-time on your dashboard.',
  },
  {
    q: 'Can I post on multiple platforms?',
    a: 'Yes! We encourage distribution across TikTok, YouTube Shorts, and Instagram Reels. Each platform helps you reach different audiences and increase your earning potential.',
  },
];

const GenericFAQ = ({ items, title, subtitle }: { items: { q: string, a: string }[], title: string, subtitle: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 lg:px-12 bg-paper text-ink border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">

          {/* Left label */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">Before You Ask</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase leading-none">
              {title}
            </h2>
            <p className="font-sans text-base opacity-50 font-light leading-relaxed max-w-xs">
              {subtitle}
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:w-2/3 space-y-0 divide-y-2 divide-ink/10 border-y-2 border-ink/10">
            {items.map((item, i) => (
              <div 
                key={i}
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-8 py-8 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl uppercase tracking-tight group-hover:text-brand transition-colors">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="shrink-0 w-8 h-8 rounded-full border-2 border-ink/20 flex items-center justify-center group-hover:border-brand group-hover:bg-brand transition-all"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base md:text-lg opacity-60 font-light leading-relaxed pb-8 max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};


const Contact = ({ activeView, setActiveView, onBrandLaunch }: { activeView: 'clipper' | 'brand', setActiveView: (v: 'clipper' | 'brand') => void, onBrandLaunch: () => void }) => {
  return (
    <section id="campaigns" className="py-32 px-6 lg:px-12 bg-paper flex flex-col items-center text-center border-t border-line text-ink">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 bg-ink rounded-full flex items-center justify-center text-paper mb-12 shadow-[8px_8px_0_var(--color-brand)] border-4 border-ink"
      >
        <Zap size={40} className="fill-brand text-brand" />
      </motion.div>
      <h2 className="font-display text-[15vw] md:text-[12vw] tracking-tighter leading-[0.85] mb-12 uppercase">
        {activeView === 'clipper' ? <>Ready to <br /> Get Paid?</> : <>Ready to <br /> Dominate?</>}
      </h2>
      <p className="max-w-2xl font-sans text-xl opacity-60 mb-16 font-light">
        {activeView === 'clipper'
          ? "The viral economy is waiting. Connect your reach to our capital engine today."
          : "The feed is the new market. Connect your brand to our viral engine today."
        }
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.location.href = 'https://dash.clipnic.com/clipper';
          }}
          className={`px-12 py-5 rounded-full font-sans font-bold text-lg uppercase tracking-widest transition-all shadow-xl ${activeView === 'clipper'
              ? 'bg-ink text-paper'
              : 'bg-white border-2 border-ink text-ink hover:bg-ink hover:text-paper'
            }`}
        >
          Start Earning
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBrandLaunch}
          className={`px-12 py-5 rounded-full font-sans font-bold text-lg uppercase tracking-widest transition-all shadow-xl ${activeView === 'brand'
              ? 'bg-ink text-paper'
              : 'bg-white border-2 border-ink text-ink hover:bg-ink hover:text-paper'
            }`}
        >
          Launch Campaign
        </motion.button>
      </div>

      <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 font-mono text-[10px] md:text-xs uppercase tracking-widest text-left border-t border-line pt-20">
        <div>
          <p className="opacity-40 mb-4">Ecosystem</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Documentation</a>
            <a href="#" className="hover:underline">Revenue Model</a>
            <a href="#" className="hover:underline">Viral Metrics</a>
          </div>
        </div>
        <div>
          <p className="opacity-40 mb-4">Command Center</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Dashboard</a>
            <a href="#" className="hover:underline">Campaign Registry</a>
            <a href="#" className="hover:underline">Payout History</a>
          </div>
        </div>
        <div>
          <p className="opacity-40 mb-4">Transmissions</p>
          <div className="flex flex-col gap-2">
            <a href="https://x.com/clipnic" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter / X</a>
            <a href="https://discord.gg/pW6RJs8Ctp" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord Guild</a>
          </div>
        </div>
        <div>
          <p className="opacity-40 mb-4">Legal Framework</p>
          <div className="flex flex-col gap-2">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/terms" className="hover:underline">Clipper Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-ink text-paper py-12 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-line">
    <div className="font-display text-2xl tracking-widest opacity-80 uppercase">CLIPNIC.COM</div>
    <div className="font-mono text-[10px] uppercase tracking-widest opacity-40">
      © 2026 clipnic.com all rights reserved
    </div>
    <div className="flex gap-6 items-center">
      <a href="https://instagram.com/clipnicteam" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 cursor-pointer">
        <Instagram size={18} />
      </a>
      <a href="https://x.com/clipnic" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 cursor-pointer">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      </a>
      <a href="https://discord.gg/pW6RJs8Ctp" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 cursor-pointer">

        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
      </a>
    </div>
  </footer>
);

const PrivacyOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-ink text-paper overflow-y-auto p-6 md:p-20 font-sans cursor-auto selection:bg-brand selection:text-ink scroll-smooth"
      >
        <button
          onClick={onClose}
          className="fixed top-10 left-10 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-paper text-ink font-sans font-bold text-xs tracking-widest hover:bg-white transition-all z-[210] shadow-xl uppercase"
        >
          <ArrowLeft size={14} />
          Return
        </button>

        <div className="max-w-3xl mx-auto space-y-12 pb-32 font-sans text-paper">
          <div className="pt-12 space-y-4 border-b-2 border-paper/20 pb-8">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Privacy Policy</h1>
            <div className="flex flex-col md:flex-row md:justify-between gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60 font-bold">
              <p>Document: Privacy Policy for Clipnic</p>
              <p>Last Updated: April 24, 2026</p>
            </div>
          </div>

          <div className="text-lg leading-relaxed space-y-6">
            <p className="font-bold uppercase tracking-tight text-sm text-brand">Your Privacy is Important</p>
            <p className="opacity-80">
              This Privacy Policy explains how Clipnic ("we," "our," or "us") collects, uses, and protects your personal information when you use our platform (clipnic.com) to connect brands, creators, and independent editors ("Clippers").
            </p>
          </div>

          <div className="space-y-10">
            <section className="p-8 bg-paper/5 border border-paper/10 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Table of Contents</h3>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm font-medium">
                <ol className="list-decimal pl-4 space-y-3">
                  <li><a href="#p-1" className="hover:text-brand transition-colors">Introduction & Scope</a></li>
                  <li><a href="#p-2" className="hover:text-brand transition-colors">Children's Privacy & Parental Consent</a></li>
                  <li><a href="#p-3" className="hover:text-brand transition-colors">Information Collection</a></li>
                  <li><a href="#p-4" className="hover:text-brand transition-colors">How We Use Your Information</a></li>
                </ol>
                <ol className="list-decimal pl-4 space-y-3" start={5}>
                  <li><a href="#p-5" className="hover:text-brand transition-colors">Cookies and Tracking</a></li>
                  <li><a href="#p-6" className="hover:text-brand transition-colors">Data Security</a></li>
                  <li><a href="#p-7" className="hover:text-brand transition-colors">Your Rights & API Revocation</a></li>
                  <li><a href="#p-8" className="hover:text-brand transition-colors">Contact Information</a></li>
                </ol>
              </nav>
            </section>

            <section id="p-1" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">1.0 Introduction & Scope</h3>
              <p className="leading-relaxed opacity-60">
                Clipnic is committed to protecting your privacy and handling your personal information in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), the Children's Online Privacy Protection Act (COPPA), and other relevant privacy legislation.
              </p>
              <p className="leading-relaxed opacity-60">
                This Privacy Policy applies to all users—including content creators, brands, and clippers—and covers all data processing activities across our platform.
              </p>
            </section>

            <section id="p-2" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">2.0 Children's Privacy & Parental Consent</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Because Clipnic offers earning opportunities, we take the privacy of our younger users very seriously.</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><span className="font-bold text-paper">Under 13:</span> Our platform is not directed at, nor do we knowingly collect personal information from, children under the age of 13. If we discover we have inadvertently collected data from a child under 13, we will delete it immediately.</li>
                  <li><span className="font-bold text-paper">Ages 13 to 17:</span> Users between 13 and the age of legal majority in their jurisdiction may only use Clipnic with the verifiable consent of a parent or legal guardian.</li>
                  <li><span className="font-bold text-paper">Guardian Rights:</span> Parents or guardians who have consented to their child's use of the platform have the right to review the minor's personal information, request its deletion, and refuse to allow further collection of data by contacting us at contact@clipnic.com.</li>
                </ul>
              </div>
            </section>

            <section id="p-3" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">3.0 Information Collection</h3>
              <div className="space-y-6 leading-relaxed opacity-60">
                <p>We collect information through three primary methods:</p>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">A. Directly from You</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Account Details:</span> Name, email address, and date of birth (to verify age requirements).</li>
                    <li><span className="font-bold text-paper">Profile Information:</span> Usernames, bios, and profile pictures.</li>
                    <li><span className="font-bold text-paper">Financial Information:</span> Payout details (e.g., PayPal email, bank details) collected securely through third-party payment processors to issue campaign bounties.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">B. Automatically</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Technical Data:</span> IP addresses, browser type, operating system, and device identifiers.</li>
                    <li><span className="font-bold text-paper">Analytics Data:</span> Platform usage, page interactions, and time spent on the site.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">C. Third-Party Sources (APIs & OAuth)</h4>
                  <p>To track clip performance and verify bounties, Clipnic connects with third-party platforms (e.g., YouTube, TikTok, Instagram, X).</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">OAuth Tokens:</span> When you link a social media account, we use secure OAuth authentication. We do not see or store your platform passwords.</li>
                    <li><span className="font-bold text-paper">API Data:</span> We collect public metrics (views, likes, engagement data) related only to the specific clips submitted for Clipnic campaigns.</li>
                    <li><span className="font-bold text-paper">Platform Policies:</span> By linking your YouTube account, for example, you also agree to be bound by the YouTube Terms of Service and Google Privacy Policy.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="p-4" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">4.0 How We Use Your Information</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>We use your information for legitimate business purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-bold text-paper">Service Provision:</span> To host the marketplace, track campaign performance, and facilitate collaboration between Brands and Clippers.</li>
                  <li><span className="font-bold text-paper">Bounty Verification:</span> To analyze engagement metrics, detect fraudulent activity (e.g., viewbotting, engagement pods), and ensure fair payouts.</li>
                  <li><span className="font-bold text-paper">Platform Security:</span> To monitor for unauthorized access, enforce our Terms of Service, and comply with legal or tax reporting obligations.</li>
                  <li><span className="font-bold text-paper">Communication:</span> To notify you about campaign updates, payout statuses, and platform changes.</li>
                </ul>
              </div>
            </section>

            <section id="p-5" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">5.0 Cookies and Tracking</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>We use cookies and similar tracking technologies to ensure the platform functions properly:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">Essential Cookies:</span> Necessary for account authentication, security, and tracking active sessions. (Cannot be disabled).</li>
                  <li><span className="font-bold text-paper">Analytics Cookies:</span> Help us understand user behavior and improve platform design. (Opt-out available).</li>
                  <li><span className="font-bold text-paper">Cookie Management:</span> You can control or delete non-essential cookies through your browser settings at any time.</li>
                </ul>
              </div>
            </section>

            <section id="p-6" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">6.0 Data Security</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>We implement strict security measures to protect your data, including:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">Encryption:</span> Data is encrypted in transit (HTTPS/TLS) and at rest.</li>
                  <li><span className="font-bold text-paper">Access Control:</span> Restricted, role-based access to personal data by Clipnic staff.</li>
                  <li><span className="font-bold text-paper">Data Retention:</span> We retain your data only as long as necessary to provide our services, process your payouts, or comply with legal tax obligations.</li>
                </ul>
              </div>
            </section>

            <section id="p-7" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">7.0 Your Rights & API Revocation</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Depending on your location (e.g., under GDPR or CCPA), you have the right to:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">Access & Portability:</span> Request a copy of the personal data we hold about you.</li>
                  <li><span className="font-bold text-paper">Correction:</span> Update or correct inaccurate account information.</li>
                  <li><span className="font-bold text-paper">Deletion (Right to be Forgotten):</span> Request the deletion of your account and personal data, subject to legal and financial retention requirements.</li>
                  <li><span className="font-bold text-paper">Revoking API Access:</span> You can disconnect your social media accounts from Clipnic at any time. For example, you can revoke Clipnic's access to your YouTube data via your Google Account Security Settings page. Doing so will stop further data collection but may prevent you from participating in active campaigns.</li>
                </ul>
              </div>
            </section>

            <div id="p-8" className="pt-12 border-t border-paper/20 space-y-6 scroll-mt-20">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">8.0 Contact Information</p>
                <p className="opacity-60 text-sm mb-4">If you have any questions about this Privacy Policy, need to verify parental consent, or wish to exercise your data rights, please contact our privacy team:</p>
                <div className="space-y-2">
                  <p className="text-xl font-black underline decoration-brand decoration-2 underline-offset-4 text-brand">clipnicteam@gmail.com</p>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-40">Subject Line: Privacy Policy Inquiry - [Your Subject]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const TermsOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-ink text-paper overflow-y-auto p-6 md:p-20 font-sans cursor-auto selection:bg-brand selection:text-ink scroll-smooth"
      >
        <button
          onClick={onClose}
          className="fixed top-10 left-10 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-paper text-ink font-sans font-bold text-xs tracking-widest hover:bg-white transition-all z-[210] shadow-xl uppercase"
        >
          <ArrowLeft size={14} />
          Return
        </button>

        <div className="max-w-3xl mx-auto space-y-12 pb-32 font-sans text-paper">
          <div className="pt-12 space-y-4 border-b-2 border-paper/20 pb-8">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Terms of Service</h1>
            <div className="flex flex-col md:flex-row md:justify-between gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60 font-bold">
              <p>Platform: Clipnic (clipnic.com)</p>
              <p>Last Updated: April 24, 2026</p>
            </div>
          </div>

          <div className="text-lg leading-relaxed space-y-6">
            <p className="font-bold uppercase tracking-tight text-sm text-brand">Agreement to Terms</p>
            <p className="opacity-80">
              By accessing and using Clipnic (clipnic.com), you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div className="space-y-10">
            <section className="p-8 bg-paper/5 border border-paper/10 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Table of Contents</h3>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm font-medium">
                <ol className="list-decimal pl-4 space-y-3">
                  <li><a href="#t-1" className="hover:text-brand transition-colors">Acceptance of Terms</a></li>
                  <li><a href="#t-2" className="hover:text-brand transition-colors">Account & Age Requirements</a></li>
                  <li><a href="#t-3" className="hover:text-brand transition-colors">Service Description</a></li>
                  <li><a href="#t-4" className="hover:text-brand transition-colors">User Responsibilities</a></li>
                  <li><a href="#t-5" className="hover:text-brand transition-colors">Prohibited Uses</a></li>
                </ol>
                <ol className="list-decimal pl-4 space-y-3" start={6}>
                  <li><a href="#t-6" className="hover:text-brand transition-colors">Intellectual Property</a></li>
                  <li><a href="#t-7" className="hover:text-brand transition-colors">Payouts and Taxes</a></li>
                  <li><a href="#t-8" className="hover:text-brand transition-colors">Limitation of Liability</a></li>
                  <li><a href="#t-9" className="hover:text-brand transition-colors">Contact Information</a></li>
                </ol>
              </nav>
            </section>

            <section id="t-1" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">1.0 Acceptance of Terms</h3>
              <p className="leading-relaxed opacity-60">
                These Terms of Service ("Terms") govern your use of Clipnic's platform, which connects brands and content creators with independent video editors ("Clippers") to create and distribute promotional short-form content. By creating an account or using our services, you agree to these terms. These terms constitute a legally binding agreement between you and Clipnic. If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section id="t-2" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">2.0 Account & Age Requirements</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Because our platform involves financial payouts and independent work, we have specific age requirements to comply with international laws:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><span className="font-bold text-paper">Minimum Age:</span> You must be at least 13 years old to use our services.</li>
                  <li><span className="font-bold text-paper">Users Under 18 (Minors):</span> If you are between the ages of 13 and the age of legal majority in your jurisdiction (usually 18), you may only use Clipnic with the explicit consent, involvement, and supervision of a parent or legal guardian.</li>
                  <li className="list-none pl-4 border-l-2 border-paper/10 italic"><span className="font-bold text-paper">Guardian Liability:</span> By allowing a minor to use the platform, the parent or legal guardian agrees to be bound by these Terms and assumes full responsibility for the minor's actions, content, and any legal or tax obligations arising from payouts.</li>
                  <li><span className="font-bold text-paper">Account Verification:</span> We reserve the right to request proof of age or parental consent at any time.</li>
                </ul>
              </div>
            </section>

            <section id="t-3" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">3.0 Service Description</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Clipnic acts as an intermediary platform facilitating campaigns between Content Creators/Brands and Clippers:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">For Brands/Creators:</span> A marketplace to post content, set bounties/campaign rules, and leverage a network of clippers to expand your audience.</li>
                  <li><span className="font-bold text-paper">For Clippers:</span> A platform to access approved source content, create short-form clips, post them to social media (TikTok, YouTube Shorts, Instagram Reels, X), and earn bounties based on views, engagement, or conversions.</li>
                  <li><span className="font-bold text-paper">Tracking & Analytics:</span> Tools to verify clip performance, track legitimate engagement, and process campaign bounties.</li>
                </ul>
              </div>
            </section>

            <section id="t-4" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">4.0 User Responsibilities</h3>
              <div className="space-y-6 leading-relaxed opacity-60">
                <p>Depending on your role on the platform, you have specific obligations:</p>
                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">All Users</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintain accurate account and payment information.</li>
                    <li>Keep login credentials secure and notify us immediately of unauthorized access.</li>
                    <li>Comply with the Terms of Service of third-party platforms (TikTok, YouTube, Meta, etc.) where clips are posted.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">For Clippers</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Quality & Brand Guidelines:</span> Only post clips that align with the specific campaign guidelines set by the Brand/Creator.</li>
                    <li><span className="font-bold text-paper">Authentic Engagement:</span> You must generate organic views. The use of viewbots, engagement pods, or purchased traffic is strictly prohibited and will result in immediate termination and forfeiture of earnings.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">For Brands/Creators</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Rights to Content:</span> You represent and warrant that you own or have the necessary licenses to the content you upload for Clippers to use.</li>
                    <li><span className="font-bold text-paper">Clear Terms:</span> You are responsible for clearly defining campaign rules, acceptable content, and payout metrics.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="t-5" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">5.0 Prohibited Uses</h3>
              <p className="leading-relaxed opacity-60 mb-4">You may not use our services for any unlawful purpose or in a way that damages the Clipnic ecosystem:</p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Fake Engagement", d: "Using automated tools, bots, or paid services to artificially inflate views, likes, or followers on clips." },
                  { t: "Harmful Content", d: "Creating or distributing clips that promote hate speech, violence, harassment, illegal acts, or explicit material." },
                  { t: "Platform Abuse", d: "Attempting to manipulate Clipnic's tracking metrics, reverse engineering our software, or creating multiple accounts to exploit bounties." },
                  { t: "Off-Platform Circumvention", d: "Brands and Clippers may not use Clipnic to make initial contact and then move their transactions off-platform to avoid fees." }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-paper/10 rounded-xl bg-paper/5">
                    <p className="font-bold text-xs uppercase mb-1 text-paper">{item.t}</p>
                    <p className="text-sm opacity-50">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="t-6" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">6.0 Intellectual Property</h3>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed opacity-60">
                <li><span className="font-bold text-paper">Clipnic's Rights:</span> All platform software, design, and trademarks are owned by Clipnic.</li>
                <li><span className="font-bold text-paper">Creator Content:</span> Brands/Creators retain ultimate ownership of their original content. By launching a campaign, the Creator grants Clippers a limited, revocable, non-exclusive license to edit, modify, and distribute the content solely for the purpose of the specific Clipnic campaign.</li>
                <li><span className="font-bold text-paper">Takedown Rights:</span> Brands/Creators and Clipnic reserve the right to demand the removal of any clip from social media platforms if it violates campaign guidelines, harms the brand's reputation, or breaches these Terms.</li>
              </ul>
            </section>

            <section id="t-7" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">7.0 Payouts and Taxes</h3>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed opacity-60">
                <li><span className="font-bold text-paper">Bounties:</span> Clippers earn money based on the metrics explicitly defined in the active campaign. Payouts are subject to verification of organic engagement.</li>
                <li><span className="font-bold text-paper">Withholding:</span> Clipnic reserves the right to withhold or cancel payouts if fraudulent activity, viewbotting, or copyright infringement is suspected.</li>
                <li><span className="font-bold text-paper">Taxes:</span> Clippers (or their legal guardians, if under 18) are considered independent contractors. You are solely responsible for calculating, reporting, and paying all applicable local, state, or federal taxes on your Clipnic earnings.</li>
              </ul>
            </section>

            <section id="t-8" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">8.0 Limitation of Liability</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">"As Is" Service:</span> Clipnic is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or specific financial returns.</li>
                  <li><span className="font-bold text-paper">Third-Party Platforms:</span> We are not responsible for changes to algorithms, API access, or bans issued by third-party platforms (e.g., TikTok, YouTube) that may affect a Clipper's ability to earn or a Brand's campaign reach.</li>
                  <li><span className="font-bold text-paper">Dispute Resolution:</span> Clipnic acts as a facilitator. While we may offer mediation tools, we are not legally liable for disputes between Brands and Clippers regarding creative direction or third-party copyright strikes. Total liability to Clipnic is limited to the fees collected by Clipnic related to the specific dispute.</li>
                </ul>
              </div>
            </section>

            <div id="t-9" className="pt-12 border-t border-paper/20 space-y-6 scroll-mt-20">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">9.0 Contact Information</p>
                <p className="opacity-60 text-sm mb-4">If you have any questions, concerns, or need to verify parental consent regarding these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <p className="text-xl font-black underline decoration-brand decoration-2 underline-offset-4 text-brand">clipnicteam@gmail.com</p>
                  <p className="font-mono text-sm opacity-40">www.clipnic.com/support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── Case Studies Data ───────────────────────────────────────────────────────

const caseStudiesData = [
  {
    id: 'daxmain',
    client: 'Dax',
    handle: '@daxmainfocus',
    handleUrl: 'https://www.youtube.com/@daxmainfocus',
    category: 'Music Artist',
    tagline: 'Authorised Clips · Organic Growth Engine',
    description:
      'Dax is an independent rap artist with a dedicated fanbase. Clipnic built a full clipping pipeline around his long-form content, chopping viral moments, formatting for Shorts and Reels, and distributing through our clipper network with zero paid promotion.',
    result: '250K+',
    resultLabel: 'Organic Views Generated',
    duration: '6 Weeks',
    clippers: '12',
    featuredVideos: [
      {
        url: 'https://www.youtube.com/shorts/zqdjDLRnvUE',
        videoId: 'zqdjDLRnvUE',
        views: '190K+',
        label: 'Top Performing Clip',
      },
      {
        url: 'https://www.youtube.com/shorts/zNv2-8o4-78',
        videoId: 'zNv2-8o4-78',
        views: '40K+',
        label: 'Viral Moment',
      },
    ],
    metrics: [
      { label: 'Total Views', value: '250K+', icon: Eye },
      { label: 'Clips Published', value: '40+', icon: Play },
      { label: 'Avg. Views / Clip', value: '6,250', icon: BarChart2 },
      { label: 'Impressions', value: '400K+', icon: TrendingUp },
    ],
    highlight:
      'Every single view was organic — no ad spend, no botted traffic. Pure clipper-driven distribution across short-form platforms.',
    color: '#C8F135',
    accentRgb: '200,241,53',
  },
];

// ─── CaseStudiesPage ─────────────────────────────────────────────────────────

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-brand selection:text-ink">
      {/* Nav */}
      <nav className="p-8 lg:p-12 flex justify-between items-center border-b border-white/5">
        <div
          className="flex items-center gap-1.5 cursor-pointer"
          onClick={() => (window.location.href = '/')}
        >
          <img src="logo.webp" className="w-8 h-8 rounded-lg object-cover" alt="Clipnic Logo" />
          <span className="font-display text-xl tracking-widest uppercase">CLIPNIC.COM</span>
        </div>
        <button
          onClick={() => (window.location.href = '/')}
          className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
        >
          <ArrowLeft size={12} />
          Back to Home
        </button>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand">Proof of Work</p>
          <h1 className="font-display text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter uppercase">
            Case <br />
            <span className="text-brand">Studies</span>
          </h1>
          <p className="font-sans text-xl opacity-60 font-light max-w-xl leading-relaxed">
            Real campaigns. Real numbers. Zero paid ads. Here's what happens when the
            Clipnic engine runs at full velocity.
          </p>
        </motion.div>
      </div>

      {/* Case Study Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-32 space-y-8">
        {caseStudiesData.map((cs) => {
          const MetricIcon0 = cs.metrics[0].icon;
          const MetricIcon1 = cs.metrics[1].icon;
          const MetricIcon2 = cs.metrics[2].icon;
          const MetricIcon3 = cs.metrics[3].icon;
          const metricIcons = [MetricIcon0, MetricIcon1, MetricIcon2, MetricIcon3];
          return (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden"
            >
              {/* Top banner */}
              <div
                className="relative px-10 pt-12 pb-10 border-b border-white/10"
                style={{ background: `radial-gradient(ellipse at top left, rgba(${cs.accentRgb},0.12) 0%, transparent 70%)` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
                        style={{ color: cs.color, borderColor: `rgba(${cs.accentRgb},0.3)`, background: `rgba(${cs.accentRgb},0.08)` }}
                      >
                        {cs.category}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                        {cs.duration} campaign
                      </span>
                    </div>
                    <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase leading-none">
                      {cs.client}
                    </h2>
                  </div>

                  {/* Big stat */}
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-2">{cs.resultLabel}</p>
                    <p
                      className="font-display text-6xl md:text-8xl tracking-tighter"
                      style={{ color: cs.color }}
                    >
                      {cs.result}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-2">
                      100% Organic · No Paid Ads
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10">
                {cs.metrics.map((m, i) => {
                  const Icon = metricIcons[i];
                  return (
                    <div
                      key={i}
                      className={`px-8 py-8 space-y-3 ${i < cs.metrics.length - 1 ? 'border-r border-white/10' : ''}`}
                    >
                      <Icon size={16} className="opacity-30" />
                      <p className="font-display text-3xl md:text-4xl tracking-tight" style={{ color: cs.color }}>
                        {m.value}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">{m.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Featured Videos */}
                <div className="px-10 py-10 space-y-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Featured Clips</p>
                  <div className="grid grid-cols-2 gap-4">
                    {cs.featuredVideos.map((v) => (
                      <a
                        key={v.videoId}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all"
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-[9/16] bg-white/5 overflow-hidden">
                          <img
                            src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`}
                            alt={v.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors" />
                          {/* Play icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play size={14} className="text-white ml-0.5" fill="white" />
                            </div>
                          </div>
                          {/* Views badge */}
                          <div
                            className="absolute top-3 right-3 font-display text-sm px-2.5 py-1 rounded-full"
                            style={{ background: `rgba(${cs.accentRgb},0.9)`, color: '#111' }}
                          >
                            {v.views}
                          </div>
                        </div>
                        {/* Label */}
                        <div className="px-4 py-3 space-y-0.5">
                          <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">{v.label}</p>
                          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-brand transition-all">
                            Watch on YouTube
                            <ExternalLink size={10} />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Highlight */}
                <div
                  className="px-10 py-10 flex flex-col justify-between gap-8"
                  style={{ background: `radial-gradient(ellipse at bottom right, rgba(${cs.accentRgb},0.07) 0%, transparent 70%)` }}
                >
                  <div className="space-y-4">
                    <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Key Insight</p>
                    <blockquote
                      className="font-sans text-sm md:text-base opacity-70 leading-relaxed font-light"
                      style={{ borderLeft: `3px solid ${cs.color}`, paddingLeft: '1.25rem' }}
                    >
                      "{cs.highlight}"
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-6 flex-wrap">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Clippers</p>
                      <p className="font-display text-3xl" style={{ color: cs.color }}>{cs.clippers}</p>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Duration</p>
                      <p className="font-display text-3xl" style={{ color: cs.color }}>{cs.duration}</p>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Ad Spend</p>
                      <p className="font-display text-3xl" style={{ color: cs.color }}>$0</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-center pt-16 space-y-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Ready to be next?</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase leading-none">
            Launch Your <br />
            <span className="text-brand">Campaign</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = '/')}
            className="inline-flex items-center gap-3 px-12 py-5 bg-brand text-ink font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_20px_60px_rgba(200,241,53,0.25)] hover:shadow-[0_20px_80px_rgba(200,241,53,0.4)] transition-all"
          >
            Get Started
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

// ─── CaseStudies Landing Section ─────────────────────────────────────────────

const CaseStudiesSection = () => {
  const cs = caseStudiesData[0];
  const metricIcons = [Eye, Play, BarChart2, TrendingUp];
  return (
    <section className="py-32 px-6 lg:px-12 bg-ink text-paper border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand">Proof of Work</p>
            <h2 className="font-display text-5xl md:text-8xl tracking-tighter uppercase leading-none">
              Case <br /> <span className="text-brand">Studies</span>
            </h2>
          </div>
          <motion.a
            href="/case-studies"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-mono text-[10px] uppercase tracking-widest hover:border-brand hover:text-brand transition-all shrink-0"
          >
            View All Cases
            <ArrowRight size={12} />
          </motion.a>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer group"
          onClick={() => (window.location.href = '/case-studies')}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top left, rgba(${cs.accentRgb},0.1) 0%, transparent 60%)` }}
          />

          <div className="relative grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Left: Info */}
            <div className="px-10 py-12 space-y-8">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: cs.color, borderColor: `rgba(${cs.accentRgb},0.3)`, background: `rgba(${cs.accentRgb},0.08)` }}
                >
                  {cs.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">{cs.tagline}</span>
              </div>

              <div>
                <h3 className="font-display text-6xl md:text-7xl tracking-tighter uppercase leading-none mb-3">
                  {cs.client}
                </h3>
              </div>

              <p className="font-sans text-lg opacity-60 font-light leading-relaxed max-w-md">
                {cs.description}
              </p>

              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest group-hover:text-brand transition-colors">
                View Full Case Study
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Right: Stats */}
            <div
              className="px-10 py-12 flex flex-col justify-between gap-10"
              style={{ background: `radial-gradient(ellipse at bottom right, rgba(${cs.accentRgb},0.06) 0%, transparent 70%)` }}
            >
              {/* Big stat */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-3">{cs.resultLabel}</p>
                <p className="font-display text-7xl md:text-8xl tracking-tighter" style={{ color: cs.color }}>
                  {cs.result}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    100% Organic · Zero Ad Spend
                  </span>
                </div>
              </div>

              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-4">
                {cs.metrics.map((m, i) => {
                  const Icon = metricIcons[i];
                  return (
                    <div key={i} className="bg-white/5 border border-white/[0.08] rounded-2xl px-5 py-4 space-y-2">
                      <Icon size={14} className="opacity-30" />
                      <p className="font-display text-2xl tracking-tighter" style={{ color: cs.color }}>
                        {m.value}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">{m.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const getInitialView = (): 'clipper' | 'brand' => {
    const params = new URLSearchParams(window.location.search);
    return params.get('v') === 'brand' ? 'brand' : 'clipper';
  };
  const [activeView, setActiveView] = useState<'clipper' | 'brand'>(getInitialView);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [brandGatewayOpen, setBrandGatewayOpen] = useState(false);
  const isBrandPath = window.location.pathname === '/brand' || window.location.pathname === '/brands';
  const isPrivacyPath = window.location.pathname === '/privacy';
  const isTermsPath = window.location.pathname === '/terms' || window.location.pathname === '/clipper-terms';
  const isCaseStudiesPath = window.location.pathname === '/case-studies';
  const isHome = window.location.pathname === '/';
  const isComingSoon = window.location.pathname === '/coming-soon';

  if (isBrandPath || isComingSoon) return <BrandPartnershipPage />;
  if (isPrivacyPath) return <PrivacyOverlay isOpen={true} onClose={() => window.location.href = '/'} />;
  if (isTermsPath) return <TermsOverlay isOpen={true} onClose={() => window.location.href = '/'} />;
  if (isCaseStudiesPath) return <CaseStudiesPage />;
  if (!isHome) return <NotFound />;

  return (
    <div className="relative font-sans selection:bg-ink selection:text-paper">
      <SpeedInsights />
      <Navigation onGetStarted={() => setGetStartedOpen(true)} />

      <main className="relative">
        <Hero
          activeView={activeView}
          setActiveView={setActiveView}
          onBrandLaunch={() => setBrandGatewayOpen(true)}
        />

        <div id="process">
          <AnimatePresence mode="wait">
            {activeView === 'clipper' ? (
              <motion.div
                key="clipper-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProcessStep
                  index={0}
                  icon={LinkIcon}
                  title="AGGREGATE PROFILES"
                  desc="Synchronize your TikTok, Instagram, and YouTube accounts. Our engine verifies your reach and establishes the connection. Perfect for teen creators and editors looking to monetize their social presence."
                  dashPreview={<ConnectDash />}
                />
                <ProcessStep
                  index={1}
                  icon={UploadIcon}
                  title="TRANSMIT CONTENT"
                  desc="Post your content natively on your accounts, then transmit the URL to our validation layer. We track velocity in real-time. Learn how to clip and earn from every viral moment."
                  dashPreview={<SubmissionDash />}
                />
                <ProcessStep
                  index={2}
                  icon={History}
                  title="GET PAID INSTANTLY"
                  desc="As views surge, your dashboard updates. Withdraw your capital through traditional rails or crypto-infrastructure. High CPM rewards for top-performing short-form content."
                  dashPreview={<EarningsDash />}
                />
              </motion.div>
            ) : (
              <motion.div
                key="brand-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProcessStep
                  index={0}
                  icon={DollarSign}
                  title="FUND YOUR CAMPAIGN"
                  desc="Fund your viral engine. Allocate budgets for bounties and watch as thousands of creators begin producing for your brand. The ultimate strategy for US-based and global brands looking to grow fast."
                  dashPreview={<BrandCampaignDash />}
                />
                <ProcessStep
                  index={1}
                  icon={TrendingUp}
                  title="PAY ONLY FOR PERFORMANCE"
                  desc="Define your performance benchmarks. Our protocol automatically calculates and distributes yield based on real engagement. Secure performance-based UGC at scale."
                  dashPreview={<BrandMetricsDash />}
                />
                <ProcessStep
                  index={2}
                  icon={Share2}
                  title="SCALE VIRAL REACH"
                  desc="Achieve infinite organic reach. Your brand becomes the content, natively embedded in the feeds of millions. A global clipping revolution, decentralized and unstoppable."
                  dashPreview={
                    <div className="text-center p-10">
                      <p className="font-display text-4xl text-white mb-4">8.4M+</p>
                      <p className="font-sans text-zinc-500 uppercase tracking-widest text-xs">Total Network Impressions</p>
                    </div>
                  }
                />

                <section className="py-32 px-6 lg:px-12 bg-white text-ink border-t border-ink/5">
                  <div className="max-w-6xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12">Protocol Standard</p>
                    <h2 className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-20">Brand Safety</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div className="space-y-6">
                        <div className="w-12 h-12 bg-ink text-paper rounded-2xl flex items-center justify-center">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="font-display text-2xl uppercase">100% Human Traffic</h4>
                        <p className="font-sans opacity-60 leading-relaxed font-light">"No bots. Our engine verifies all accounts to ensure your views are from real, organic feeds."</p>
                      </div>

                      <div className="space-y-6">
                        <div className="w-12 h-12 bg-ink text-paper rounded-2xl flex items-center justify-center">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="font-display text-2xl uppercase">Vetted Clippers</h4>
                        <p className="font-sans opacity-60 leading-relaxed font-light">"Every creator in our network passes strict quality control and adheres to your specific brand guidelines."</p>
                      </div>

                      <div className="space-y-6">
                        <div className="w-12 h-12 bg-ink text-paper rounded-2xl flex items-center justify-center">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="font-display text-2xl uppercase">Real-Time Tracking</h4>
                        <p className="font-sans opacity-60 leading-relaxed font-light">"Monitor exactly where your content is being posted through your command center."</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="py-32 px-6 lg:px-12 bg-ink text-paper">
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand mb-8">Performance Layer</p>
                      <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase mb-12 leading-none">Analytics <br /> & Scale</h2>
                      <p className="font-sans text-xl opacity-60 leading-relaxed mb-12 font-light">
                        Monitor every impression in real-time. Our intelligence layer provides deep insights into which creatives are driving the most value, allowing you to scale your viral reach with surgical precision.
                      </p>
                      <button
                        onClick={() => setBrandGatewayOpen(true)}
                        className="px-10 py-5 bg-brand text-ink font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all"
                      >
                        Launch Command Center
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full animate-pulse" />
                      <div className="relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 overflow-hidden backdrop-blur-xl">
                        <div className="space-y-8">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Growth Velocity</p>
                              <p className="text-4xl font-bold font-mono text-brand">+842%</p>
                            </div>
                            <TrendingUp className="text-brand" size={32} />
                          </div>
                          <div className="h-40 flex items-end gap-2">
                            {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                              <div key={i} className="flex-1 bg-brand/20 rounded-t-lg transition-all hover:bg-brand" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                            <div>
                              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Total Reach</p>
                              <p className="text-xl font-bold font-mono">12.4M</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Active Nodes</p>
                              <p className="text-xl font-bold font-mono">1,204</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <section className="py-32 px-6 lg:px-12 bg-white text-ink border-t border-ink/5">
                  <div className="max-w-6xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12">Flow Protocol</p>
                    <h2 className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-20">How to distribute<br />your content</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                      <div className="space-y-4">
                        <p className="font-display text-4xl text-brand">01</p>
                        <h4 className="font-display text-xl uppercase">Submit Content</h4>
                        <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                          Give us your raw content. Whether it's long-form videos, streams, or podcasts, our engine is ready to process.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <p className="font-display text-4xl text-brand">02</p>
                        <h4 className="font-display text-xl uppercase">Launch Campaign</h4>
                        <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                          We will make a custom campaign tailored to your brand goals, setting bounties and distribution rules.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <p className="font-display text-4xl text-brand">03</p>
                        <h4 className="font-display text-xl uppercase">Organic Reach</h4>
                        <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                          Our clippers generate pure organic content. View all metrics in our highly advanced command center.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <p className="font-display text-4xl text-brand">04</p>
                        <h4 className="font-display text-xl uppercase">Exponential Growth</h4>
                        <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                          Grow your content presence. Scale your brand natively across every major short-form feed simultaneously.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <CaseStudiesSection />

        {activeView === 'brand' ? (
          <GenericFAQ
            items={brandFaqItems}
            title={<>Common<br />Questions</>}
            subtitle="Everything you need to know before launching your first campaign with Clipnic."
          />
        ) : (
          <GenericFAQ
            items={clipperFaqItems}
            title={<>Clipper<br />Questions</>}
            subtitle="Everything you need to know before you start editing and earning with Clipnic."
          />
        )}

        <Contact
          activeView={activeView}
          setActiveView={setActiveView}
          onBrandLaunch={() => setBrandGatewayOpen(true)}
        />
      </main>

      <Footer />
      <PrivacyOverlay isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOverlay isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
        onBrandLaunch={() => {
          setGetStartedOpen(false);
          setBrandGatewayOpen(true);
        }}
      />
      <BrandGatewayModal
        isOpen={brandGatewayOpen}
        onClose={() => setBrandGatewayOpen(false)}
      />

      {/* Floating Status Indicator */}


      <style>{`
        .text-stroke-paper {
          -webkit-text-stroke: 1px #F5F5F5;
        }
        .text-stroke-ink {
          -webkit-text-stroke: 1px #111111;
        }
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
