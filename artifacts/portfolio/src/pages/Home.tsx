import { useEffect } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedText } from "@/components/ui/animated-text";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { MarqueeRow } from "@/components/ui/marquee-row";
import { ContactButton } from "@/components/ui/contact-button";
import { StickyCard } from "@/components/sticky-card";
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

const skillsRow1 = ["JavaScript", "TypeScript", "Python", "Rust", "Go", "C++", "Kotlin", "Swift", "React", "Next.js", "Vue", "Flutter", "Django", "FastAPI"];
const skillsRow2 = ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "Selenium", "Puppeteer", "Frida", "Ghidra", "Burp Suite", "Playwright", "AWS", "GCP"];

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "Full-stack web applications from landing pages to complex SaaS platforms, using React, Next.js, Node.js, Django, and more."
  },
  {
    id: "02",
    title: "App Development",
    desc: "Native and cross-platform mobile apps for iOS & Android using Flutter, React Native, Swift, and Kotlin."
  },
  {
    id: "03",
    title: "Automation & Bots",
    desc: "Custom bots, scrapers, workflow automations, and AI-powered agents that work 24/7 — Telegram, Discord, web-based."
  },
  {
    id: "04",
    title: "Reverse Engineering",
    desc: "Binary analysis, protocol reversing, APK decompilation, API reverse engineering, and security research."
  },
  {
    id: "05",
    title: "Backend Systems",
    desc: "High-performance APIs, microservices, databases, queues, and infrastructure — built to scale from day one."
  },
  {
    id: "06",
    title: "Security & Pentesting",
    desc: "Vulnerability assessments, exploit development, CTF solving, and hardening web/app targets."
  }
];

const projects = [
  {
    title: "AutoBot Engine",
    category: "Automation",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    ]
  },
  {
    title: "RevScan",
    category: "Reverse Engineering",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    ]
  },
  {
    title: "NexFlow",
    category: "Web",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    ]
  }
];

export default function Home() {
  return (
    <div className="relative bg-[#0C0C0C] text-white selection:bg-primary selection:text-black font-sans">
      <CustomCursor />

      {/* 1. HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden px-6 py-8 md:px-12 md:py-12">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0C0C0C]"></div>
        </div>

        {/* Top Navbar */}
        <nav className="relative z-10 w-full flex justify-between items-center mix-blend-exclusion">
          <FadeIn delay={0.1}>
            <div className="text-xl font-bold tracking-widest uppercase text-white">SHASHANK</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ul className="flex gap-6 md:gap-12 text-sm uppercase tracking-widest font-mono text-white">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li className="hidden md:block"><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </FadeIn>
        </nav>

        {/* Center Huge Heading */}
        <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
          <FadeIn delay={0.3} y={40} className="w-full">
            <h1 className="hero-heading text-[12vw] leading-none font-black uppercase tracking-tight text-center w-full block">
              Hi, I'm Shashank
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <FadeIn delay={0.5}>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest max-w-sm text-white/70">
              web · app · automation · reverse engineering · bots
            </p>
          </FadeIn>
          <FadeIn delay={0.6} x={20}>
            <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
          </FadeIn>
        </div>
      </section>

      {/* 2. MARQUEE SECTION */}
      <section id="skills" className="py-20 border-t border-white/10 bg-[#0C0C0C] relative z-10 overflow-hidden">
        <div className="-rotate-2 scale-105 bg-black/40 py-8 border-y border-white/5">
          <MarqueeRow items={skillsRow1} direction="right" speed={0.8} />
          <div className="h-4"></div>
          <MarqueeRow items={skillsRow2} direction="left" speed={1} />
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="min-h-[100dvh] relative flex items-center justify-center py-32 px-6 md:px-12 bg-[#0C0C0C] overflow-hidden">
        {/* Decorative Orbs */}
        <FadeIn x={-50} y={-50} className="absolute top-20 left-20 opacity-30 blur-[60px] w-64 h-64 rounded-full bg-secondary"></FadeIn>
        <FadeIn x={50} y={50} className="absolute bottom-20 right-20 opacity-30 blur-[60px] w-64 h-64 rounded-full bg-primary"></FadeIn>
        
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <FadeIn>
            <h2 className="hero-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">
              About Me
            </h2>
          </FadeIn>
          
          <div className="text-2xl md:text-5xl lg:text-6xl font-medium leading-[1.2] md:leading-[1.1] tracking-tight w-full mb-20 text-center md:text-left">
            <AnimatedText text="I'm Shashank — an expert engineer who builds web apps, mobile apps, automation systems, reverse-engineered tools, and bots. I'm fluent in every major language, framework, and database. I don't just write code — I build systems that work, scale, and sometimes break what they're not supposed to break. Let's build something extraordinary." />
          </div>

          <FadeIn y={30}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 text-primary uppercase font-mono tracking-widest text-sm border-b border-primary/30 pb-2 hover:border-primary transition-colors"
            >
              Contact Me
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="bg-white text-[#0C0C0C] rounded-t-[60px] relative z-20 py-32 px-6 md:px-12 mt-[-60px]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-24">
              What I Do.
            </h2>
          </FadeIn>
          
          <div className="flex flex-col">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.1} y={30} className="border-t border-black/10 py-12 flex flex-col md:flex-row md:items-start gap-8 group">
                <div className="text-6xl md:text-8xl font-black text-black/10 group-hover:text-primary transition-colors duration-500 w-32 shrink-0 leading-none">
                  {s.id}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold uppercase mb-6 group-hover:tracking-wider transition-all duration-500">{s.title}</h3>
                  <p className="text-lg md:text-xl text-black/60 max-w-2xl font-light leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="bg-[#0C0C0C] rounded-t-[60px] relative z-30 py-32 px-6 md:px-12 mt-[-60px]">
        <div className="max-w-7xl mx-auto mb-32">
          <FadeIn>
            <h2 className="hero-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-center">
              Selected Work
            </h2>
          </FadeIn>
        </div>
        
        <div className="relative pb-[50vh]">
          {projects.map((project, i) => (
            <StickyCard key={i} index={i} totalCards={projects.length} project={project} />
          ))}
        </div>
      </section>

      {/* 6. STATS BAR */}
      <section className="py-24 bg-[#050505] border-y border-white/10 relative z-40 mt-[-50vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-12">
          {[
            { label: "Projects Built", value: "50+" },
            { label: "Languages Mastered", value: "10+" },
            { label: "Years Experience", value: "5+" },
            { label: "Client Satisfaction", value: "100%" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col gap-2">
              <span className="text-5xl md:text-7xl font-black text-white">{stat.value}</span>
              <span className="text-primary font-mono uppercase tracking-widest text-sm">{stat.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 7. CONTACT / FOOTER */}
      <section id="contact" className="min-h-[100dvh] bg-[#0C0C0C] flex flex-col justify-between pt-32 pb-8 px-6 md:px-12 relative z-40">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <FadeIn y={30}>
            <h2 className="text-[10vw] md:text-[8vw] leading-none font-black uppercase tracking-tighter text-white mb-8">
              Let's Build<br />
              <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">Something</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} y={20}>
            <a href="mailto:shashank@email.com" className="text-2xl md:text-4xl text-primary hover:text-white transition-colors duration-300 border-b-2 border-primary hover:border-white pb-2 inline-block mb-16">
              shashank@email.com
            </a>
          </FadeIn>

          <FadeIn delay={0.3} className="flex gap-6">
            <a href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Send size={24} />
            </a>
          </FadeIn>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 font-mono text-xs uppercase tracking-widest pt-12 border-t border-white/10">
          <p>© 2026 Shashank. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for freelance projects
          </p>
        </div>
      </section>
    </div>
  );
}