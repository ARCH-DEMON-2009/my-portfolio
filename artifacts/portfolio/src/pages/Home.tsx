import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedText } from "@/components/ui/animated-text";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { MarqueeRow } from "@/components/ui/marquee-row";
import { ContactButton } from "@/components/ui/contact-button";
import { StickyCard } from "@/components/sticky-card";
import { LoadingScreen } from "@/components/ui/loading-screen";

const skillsRow1 = ["JavaScript","TypeScript","Python","Rust","Go","C++","Kotlin","Swift","React","Next.js","Vue","Flutter","Django","FastAPI"];
const skillsRow2 = ["PostgreSQL","MongoDB","Redis","Docker","Kubernetes","Selenium","Puppeteer","Frida","Ghidra","Burp Suite","Playwright","AWS","GCP"];

const services = [
  { id:"01", title:"Web Development",      desc:"Full-stack web applications from landing pages to complex SaaS platforms, using React, Next.js, Node.js, Django, and more." },
  { id:"02", title:"App Development",       desc:"Native and cross-platform mobile apps for iOS & Android using Flutter, React Native, Swift, and Kotlin." },
  { id:"03", title:"Automation & Bots",     desc:"Custom bots, scrapers, workflow automations, and AI-powered agents that work 24/7 — Telegram, Discord, web-based." },
  { id:"04", title:"Reverse Engineering",   desc:"Binary analysis, protocol reversing, APK decompilation, API reverse engineering, and security research." },
  { id:"05", title:"Backend Systems",       desc:"High-performance APIs, microservices, databases, queues, and infrastructure — built to scale from day one." },
  { id:"06", title:"Security & Pentesting", desc:"Vulnerability assessments, exploit development, CTF solving, and hardening web/app targets." },
];

const projects = [
  {
    title: "AutoBot Engine",
    category: "Automation",
    desc: "A high-throughput bot orchestration engine that coordinates hundreds of concurrent agents across Telegram, Discord, and the web — powered by async Python and Redis pub/sub.",
    tech: ["Python","Redis","Selenium","Playwright","Telegram API","Docker"],
    accentColor: "#00ffc4",
    lines: [
      "$ python -m autobot start --workers 64",
      "# Initializing worker pool...",
      "✓ Redis connection established",
      "✓ 64 agents spawned",
      "● Task queue: 1,204 jobs pending",
      "● [worker-01] Scraping target A — 200 OK",
      "● [worker-02] Scraping target B — 200 OK",
      "✓ Dispatched 843 Telegram messages",
      "! Rate limiter triggered — backing off 2s",
      "✓ Resumed. Throughput: 312 req/s",
      "● Uptime: 14d 06h 22m | Errors: 0.03%",
    ],
  },
  {
    title: "RevScan",
    category: "Reverse Engineering",
    desc: "An automated reverse-engineering toolkit that decompiles APKs, traces native libraries with Frida, and reconstructs private API schemas — cutting manual analysis from days to minutes.",
    tech: ["Frida","Ghidra","Python","JADX","IDA Pro","Burp Suite"],
    accentColor: "#a78bfa",
    lines: [
      "$ revscan analyze --target app.apk",
      "# Decompiling with JADX...",
      "✓ 1,842 classes extracted",
      "✓ Obfuscation map rebuilt",
      "$ revscan frida --hook ssl_read",
      "● SSL pinning bypass injected",
      "● Intercepted POST /api/v3/auth",
      "  payload: { token: '<redacted>' }",
      "● Intercepted GET /api/v3/user/me",
      "✓ Schema reconstructed: 34 endpoints",
      "# Report saved → revscan_report.json",
    ],
  },
  {
    title: "NexFlow",
    category: "Web / SaaS",
    desc: "A real-time workflow automation SaaS that lets teams connect APIs, databases, and AI models through a visual node editor — no-code speed with pro-code power.",
    tech: ["React","Node.js","PostgreSQL","WebSockets","Docker","OpenAI"],
    accentColor: "#38bdf8",
    lines: [
      "$ npm run dev",
      "✓ NexFlow server running on :3000",
      "● DB: 12 active connections",
      "● WebSocket: 247 live sessions",
      "$ nexflow deploy --workflow prod",
      "✓ 18 nodes validated",
      "✓ AI node: gpt-4o linked",
      "● Trigger: webhook /hook/inbound",
      "✓ Deployed in 1.3s",
      "● Runs today: 4,821 | Avg: 230ms",
      "✓ All nodes healthy",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative bg-[#0C0C0C] text-white selection:bg-primary selection:text-black font-sans">
      <LoadingScreen />
      <CustomCursor />

      {/* ── 1. HERO ── */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden px-5 py-6 sm:px-8 sm:py-8 md:px-12 md:py-12">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay muted loop playsInline preload="none"
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0C0C0C]" />
        </div>

        {/* Navbar */}
        <nav className="relative z-10 w-full flex justify-between items-center mix-blend-exclusion">
          <FadeIn delay={0.1}>
            <a href="/" aria-label="Shashank SV — Home">
              <img
                src="/logo.svg"
                alt="Shashank SV logo"
                className="h-8 sm:h-10 w-auto"
                draggable={false}
              />
            </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ul className="flex gap-4 sm:gap-8 md:gap-12 text-[10px] sm:text-sm uppercase tracking-widest font-mono text-white">
              <li><a href="#about"    className="hover:text-primary transition-colors">About</a></li>
              <li className="hidden sm:block"><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact"  className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </FadeIn>
        </nav>

        {/* Main heading */}
        <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
          <FadeIn delay={0.3} y={40} className="w-full">
            <h1 className="hero-heading text-[14vw] sm:text-[12vw] leading-none font-black uppercase tracking-tight text-center w-full block">
              Hi, I'm Shashank
            </h1>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <FadeIn delay={0.5}>
            <p className="font-mono text-[10px] sm:text-sm uppercase tracking-widest max-w-xs sm:max-w-sm text-white/70 leading-relaxed">
              web · app · automation · reverse engineering · bots
            </p>
          </FadeIn>
          <FadeIn delay={0.6} x={20}>
            <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
          </FadeIn>
        </div>
      </section>

      {/* ── 2. MARQUEE ── */}
      <section id="skills" className="py-16 sm:py-20 border-t border-white/10 bg-[#0C0C0C] relative z-10 overflow-hidden">
        <div className="-rotate-2 scale-105 bg-black/40 py-6 sm:py-8 border-y border-white/5">
          <MarqueeRow items={skillsRow1} direction="right" speed={0.8} />
          <div className="h-3 sm:h-4" />
          <MarqueeRow items={skillsRow2} direction="left" speed={1} />
        </div>
      </section>

      {/* ── 3. ABOUT ── */}
      <section id="about" className="min-h-[100dvh] relative flex items-center justify-center py-20 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] overflow-hidden">
        <FadeIn x={-50} y={-50} className="absolute top-20 left-10 opacity-30 blur-[60px] w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-secondary pointer-events-none" />
        <FadeIn x={50}  y={50}  className="absolute bottom-20 right-10 opacity-30 blur-[60px] w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-primary pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <FadeIn>
            <h2 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-12 sm:mb-16 text-center">
              About Me
            </h2>
          </FadeIn>

          <div className="text-xl sm:text-3xl md:text-5xl font-medium leading-[1.25] tracking-tight w-full mb-16 sm:mb-20 text-center md:text-left">
            <AnimatedText text="I'm Shashank — an expert engineer who builds web apps, mobile apps, automation systems, reverse-engineered tools, and bots. I'm fluent in every major language, framework, and database. I don't just write code — I build systems that work, scale, and sometimes break what they're not supposed to break. Let's build something extraordinary." />
          </div>

          <FadeIn y={30}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 text-primary uppercase font-mono tracking-widest text-sm border-b border-primary/30 pb-2 hover:border-primary transition-colors"
            >
              Contact Me
              <span className="animate-bounce-x">→</span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[60px] relative z-20 py-20 sm:py-32 px-5 sm:px-8 md:px-12 mt-[-40px] sm:mt-[-60px]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 sm:mb-24">
              What I Do.
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {services.map((s, i) => (
              <FadeIn
                key={s.id}
                delay={i * 0.08}
                y={30}
                className="border-t border-black/10 py-8 sm:py-12 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group"
              >
                <div className="text-5xl sm:text-6xl md:text-8xl font-black text-black/10 group-hover:text-primary transition-colors duration-500 sm:w-32 shrink-0 leading-none">
                  {s.id}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 sm:mb-6 group-hover:tracking-wider transition-all duration-500">
                    {s.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-black/60 max-w-2xl font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROJECTS ── */}
      <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[60px] relative z-30 py-20 sm:py-32 px-5 sm:px-8 md:px-12 mt-[-40px] sm:mt-[-60px]">
        <div className="max-w-7xl mx-auto mb-20 sm:mb-32">
          <FadeIn>
            <h2 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-center">
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

      {/* ── 6. STATS ── */}
      <section className="py-16 sm:py-24 bg-[#050505] border-y border-white/10 relative z-40 mt-[-50vh]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {[
            { label: "Projects Built",       value: "50+" },
            { label: "Languages Mastered",   value: "10+" },
            { label: "Years Experience",     value: "5+"  },
            { label: "Client Satisfaction",  value: "100%"},
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col gap-2">
              <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white">{stat.value}</span>
              <span className="text-primary font-mono uppercase tracking-widest text-[10px] sm:text-sm">{stat.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 7. CONTACT / FOOTER ── */}
      <section id="contact" className="min-h-[100dvh] bg-[#0C0C0C] flex flex-col justify-between pt-24 sm:pt-32 pb-8 px-5 sm:px-8 md:px-12 relative z-40">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <FadeIn y={30}>
            <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] leading-none font-black uppercase tracking-tighter text-white mb-8">
              Let's Build<br />
              <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">Something</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <a
              href="mailto:info@shashanksv.com"
              className="text-xl sm:text-2xl md:text-4xl text-primary hover:text-white transition-colors duration-300 border-b-2 border-primary hover:border-white pb-2 inline-block mb-12 sm:mb-16 break-all sm:break-normal"
            >
              info@shashanksv.com
            </a>
          </FadeIn>

          {/* 3D pushable hire-me button */}
          <FadeIn delay={0.35} y={20}>
            <button className="pb" onClick={() => { window.location.href = 'mailto:info@shashanksv.com'; }}>
              <span className="pb__shadow" />
              <span className="pb__edge" />
              <span className="pb__front px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-[12px]">
                Hire Me
              </span>
            </button>
          </FadeIn>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-white/50 font-mono text-[10px] sm:text-xs uppercase tracking-widest pt-10 sm:pt-12 border-t border-white/10">
          <p>© 2026 Shashank. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for freelance projects
          </p>
        </div>
      </section>
    </div>
  );
}
