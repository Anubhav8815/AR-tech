"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Compass,
  Cpu,
  FlaskConical,
  Globe2,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PanelTop,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UploadCloud,
  Zap,
  X,
} from "lucide-react";

const services = [
  { icon: BrainCircuit, logo: "/sap-logo.svg", title: "SAP", desc: "Enterprise SAP integration and process automation for resilient operations." },
  { icon: Code2, title: "Custom Software Development", desc: "Purpose-built platforms designed for scale and speed." },
  { icon: PanelTop, title: "Web Development", desc: "Immersive, conversion-first experiences for ambitious brands." },
  { icon: MonitorSmartphone, title: "Mobile Apps", desc: "Cross-platform products engineered around product-market fit." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Migration, modernization, and resilient cloud architecture." },
  { icon: UploadCloud, title: "DevOps", desc: "Automated delivery with observability, reliability, and governance." },
  { icon: FlaskConical, title: "QA Automation", desc: "Rigorous quality assurance that accelerates release confidence." },
  { icon: ShieldCheck, title: "Cyber Security", desc: "Secure-by-design strategies for every layer of your stack." },
  { icon: Sparkles, title: "UI/UX Design", desc: "Elegant, accessible experiences that feel intuitive and premium." },
  { icon: BarChart3, title: "Data Analytics", desc: "Actionable insights from your data estate and operational systems." },
];

const features = [
  { title: "Innovation", description: "Modern technologies with scalable architecture ready for growth.", icon: Zap },
  { title: "Transformation", description: "Digitally transform enterprises with measurable business impact.", icon: Compass },
  { title: "Growth", description: "Help businesses increase revenue with smart automation and insight.", icon: TrendingUp },
  { title: "Support", description: "24×7 technical assistance with strategic guidance at every milestone.", icon: LifeBuoy },
];

const industries = ["Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Real Estate", "Logistics", "E-commerce"];
const techStack = ["React", "Next.js", "Node.js", "Python", "Java", "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "Firebase", "OpenAI"];
const stats = [
  { value: "250+", label: "Projects" },
  { value: "120+", label: "Clients" },
  { value: "40+", label: "Experts" },
  { value: "15+", label: "Countries" },
];
const navItems = [["Home", "#home"], ["Services", "#services"], ["Solutions", "#solutions"], ["Industries", "#industries"], ["About", "#about"], ["Contact", "#contact"]];

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  const subject = encodeURIComponent(`RA Tech Inquiry from ${name || email}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:ashuy046@gmail.com?subject=${subject}&body=${body}`;
}

export function SiteShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50">
              <Image src="/IMG_2069.png" alt="RA Tech logo" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-slate-900">RA TECH</p>
              <p className="text-xs text-slate-500">Digital transformation studio</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            {[["Home", "#home"], ["Services", "#services"], ["Solutions", "#solutions"], ["Industries", "#industries"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 md:inline-flex">
              Book Consultation
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 lg:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {isMenuOpen && (
            <nav className="absolute left-0 right-0 top-full border-t border-emerald-100 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-xl lg:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                {navItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <main id="home" className="overflow-hidden">
        <section className="relative flex min-h-screen items-center justify-center px-6 py-24 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(132,204,22,0.16),_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#f0fdf4_48%,_#ecfccb_100%)]" />
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
            <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:82px_82px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
              We. Innovate. Transform. Grow.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              RA Tech empowers businesses through AI, Cloud, Software Engineering, Automation, and Digital Transformation.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-7 py-3 font-semibold text-white shadow-2xl shadow-emerald-500/20">
                Get Started
              </a>
              <a href="#services" className="rounded-full border border-emerald-200 bg-white/75 px-7 py-3 font-semibold text-emerald-800 backdrop-blur">
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Consulting</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Technology consulting built for modern growth</h2>
            </div>
            <p className="max-w-xl text-slate-400">We combine strategy, design, engineering, and operations to help organizations move faster with confidence.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-3xl border border-emerald-100 bg-white/80 p-7 shadow-xl shadow-emerald-950/5 backdrop-blur-xl transition hover:-translate-y-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 text-emerald-700">
                    {service.logo ? (
                      <Image src={service.logo} alt={`${service.title} logo`} width={40} height={40} className="h-10 w-10 object-contain" />
                    ) : (
                      <Icon size={22} />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{service.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50 p-8 shadow-xl shadow-emerald-950/5 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">A premium partner for transformation at enterprise speed</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">We blend strategic insight with engineering rigor to help modern organizations scale with confidence and clarity.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-2xl border border-emerald-100 bg-white/80 p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 text-emerald-700">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.85fr] items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Built for enterprise change with clarity and speed</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                RA Tech partners with ambitious organizations to design modern digital platforms, automate mission-critical workflows, and scale operations with trusted engineering.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Mission</p>
                  <p className="mt-3 text-slate-300">Create resilient technology ecosystems that accelerate outcomes and reduce operational risk.</p>
                </div>
                <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Approach</p>
                  <p className="mt-3 text-slate-300">Combine product strategy, engineering excellence, and measurable delivery to move from concept to value fast.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Industries</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Tailored solutions for every sector</h2>
            </div>
            <p className="max-w-xl text-slate-400">Our experience spans regulated, high-growth, and mission-critical environments where precision matters.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-3xl border border-emerald-100 bg-white p-6 text-slate-700 shadow-sm backdrop-blur">
                    <div className="mb-4 h-2 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400" />
                  <h3 className="text-lg font-semibold text-slate-900">{industry}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Tech Stack</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">A modern toolchain for ambitious delivery</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {techStack.map((tech) => (
                <div key={tech} className="rounded-3xl border border-emerald-100 bg-white p-6 text-slate-700 shadow-sm backdrop-blur">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 text-emerald-700">
                    <Cpu size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{tech}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-6 rounded-[2rem] border border-emerald-100 bg-emerald-50/70 p-8 shadow-xl shadow-emerald-950/5 md:grid-cols-2 xl:grid-cols-4 lg:p-12">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm">
                <div className="text-4xl font-semibold text-emerald-700">{stat.value}</div>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-xl shadow-emerald-950/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Let&apos;s build something exceptional</h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">Tell us where you are headed and we&apos;ll shape the roadmap with precision.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3"><Mail size={18} className="text-emerald-600" /> ratech@ratech.com</div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-emerald-600" /> +1 (800) 555-0148</div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-emerald-600" /> Signature Tower, Gurugram</div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl shadow-emerald-950/5">
              <form className="grid gap-4" onSubmit={handleContactSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Name</span>
                    <input name="name" className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-slate-900 outline-none" required />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Email</span>
                    <input name="email" className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-slate-900 outline-none" type="email" required />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Phone</span>
                    <input name="phone" className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-slate-900 outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Company</span>
                    <input name="company" className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-slate-900 outline-none" />
                  </label>
                </div>
                <label className="text-sm text-slate-300">
                  <span className="mb-2 block">Message</span>
                  <textarea name="message" className="min-h-32 w-full rounded-2xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-slate-900 outline-none" required />
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-6 py-3 font-semibold text-white">
                  Send Inquiry <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-emerald-50/70 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-emerald-100 bg-white">
                <Image src="/IMG_2069.png" alt="RA Tech logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-200">RA TECH</p>
                <p className="text-xs text-slate-400">Premium digital transformation</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">We help enterprise teams modernize with strategy, design, and engineering that lasts.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#industries" className="hover:text-white">Industries</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Social</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="https://www.linkedin.com" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.x.com" className="hover:text-white">X</a></li>
              <li><a href="https://www.instagram.com" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RA Tech. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-300">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      <a href="#home" className="fixed bottom-5 right-5 z-50 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 p-3 text-white shadow-2xl">
        <ArrowRight size={18} className="rotate-[-45deg]" />
      </a>

    </div>
  );
}
