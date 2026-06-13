import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black relative">
      
      <div className="absolute inset-0 bg-grid-lines pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-sm font-bold tracking-[0.3em] uppercase text-white">
            Fraevo
          </a>
          
          <div className="flex items-center gap-8">
            <a href="#products" className="text-xs font-normal tracking-wide text-neutral-400 hover:text-white transition-colors">Products</a>
            <a href="#services" className="text-xs font-normal tracking-wide text-neutral-400 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="text-xs font-normal tracking-wide text-neutral-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative max-w-5xl mx-auto px-6 pt-32 pb-40 text-center z-10">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Status Badge with White/Grey Blinking Combo Dot */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-8000 bg-neutral-950/60 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5 bg-neutral-5000 rounded-full overflow-hidden">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-white"></span>
            </span>
            <span className="text-[11px] tracking-wide text-neutral-400 font-normal">Currently in development</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-[1.1]">
            Building Technology <br />
            <span className="text-neutral-500 font-medium">for Tomorrow.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 font-light leading-relaxed tracking-wide">
            Fraevo delivers software engineering, technology consulting, and AI-driven solutions while creating innovative products that shape the future.
          </p>

          <p className="text-xs text-neutral-500 max-w-md mx-auto pt-4">
            From digital transformation to next-generation products, we're building what comes next.
          </p>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900 relative z-10">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium block mb-3">Products</span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Quietly building the <br />next generation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Fraevo Fashion */}
          <div className="group relative p-8 rounded-2xl border border-neutral-900 hover:border-neutral-500 bg-neutral-950/40 backdrop-blur-sm flex flex-col justify-between min-h-[280px] transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">AI · Lifestyle</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400">Soon</span>
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">Fraevo Fashion</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
                Reimagining the future of fashion.
              </p>
            </div>
            <div className="pt-8">
              <a href="#" className="inline-flex items-center gap-2 text-xs text-neutral-400 group-hover:text-white transition-colors">
                Learn more <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Fraevo Robots */}
          <div className="group relative p-8 rounded-2xl border border-neutral-900 hover:border-neutral-500 bg-neutral-950/40 backdrop-blur-sm flex flex-col justify-between min-h-[280px] transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">Robotics · Automation</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400">Soon</span>
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">Fraevo Robots</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
                Building intelligent robotics and automation solutions for tomorrow.
              </p>
            </div>
            <div className="pt-8">
              <a href="#" className="inline-flex items-center gap-2 text-xs text-neutral-400 group-hover:text-white transition-colors">
                Learn more <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900 relative z-10">
        <div className="mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium block mb-3">Services</span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Engineering excellence, end to end.
          </h2>
        </div>

        <div className="border-t border-neutral-900">
          {[
            { num: "01", title: "Software Development", desc: "End-to-end engineering for web, mobile, and enterprise platforms." },
            { num: "02", title: "AI & Machine Learning Solutions", desc: "Custom models, intelligent agents, and data-driven systems." },
            { num: "03", title: "Technology Consulting", desc: "Strategy and architecture for modern, scalable engineering teams." },
            { num: "04", title: "Product Engineering", desc: "From zero-to-one digital products to mature platform evolution." },
            { num: "05", title: "Automation & Innovation", desc: "Robotic process automation and operational intelligence." }
          ].map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 py-7 border-b border-neutral-900 items-baseline gap-4">
              <div className="md:col-span-1 text-xs font-mono text-neutral-600">
                {service.num}
              </div>
              <div className="md:col-span-5 text-lg font-medium text-white">
                {service.title}
              </div>
              <div className="md:col-span-6 text-sm text-neutral-400 font-light md:text-left">
                {service.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-32 text-center border-t border-neutral-900 relative z-10">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-medium text-white tracking-tight">
            Our products are currently <br />
            <span className="text-neutral-400">in development.</span>
          </h2>
          <p className="text-sm text-neutral-400 font-light tracking-wide pb-6">
            Exciting things are on the way.
          </p>
          
          <a 
            href="mailto:hello@fraevo.com" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-xs tracking-wide font-normal transition-all text-neutral-200 hover:text-white"
          >
            hello@fraevo.com <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-neutral-900/60 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-500 tracking-wide font-light">
            &copy; 2026 Fraevo. Building the future through technology.
          </p>
          <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-neutral-500">
            Fraevo
          </span>
        </div>
      </footer>

    </div>
  );
}