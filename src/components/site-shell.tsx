import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Compass,
  Cpu,
  FlaskConical,
  Globe2,
  LifeBuoy,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  MoveRight,
  PanelTop,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stars,
  TrendingUp,
  UploadCloud,
  Zap,
} from "lucide-react";

const services = [
  { icon: BrainCircuit, title: "AI Solutions", desc: "Custom copilots and predictive optimization for modern teams." },
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
const process = ["Discovery", "Strategy", "Design", "Development", "Testing", "Launch", "Support"];
const caseStudies = [
  { title: "AI CRM Platform", category: "Revenue Operations" },
  { title: "Hospital ERP", category: "Care Delivery" },
  { title: "Banking Dashboard", category: "FinTech" },
  { title: "Retail Marketplace", category: "Commerce" },
  { title: "Analytics Platform", category: "Data Intelligence" },
];
const testimonials = [
  { name: "Sophia Chen", role: "COO, Northstar Labs", quote: "AR Technologies helped us modernize our operating model with the clarity of a strategic partner." },
  { name: "Marcus Reed", role: "CTO, Meridian Health", quote: "Their delivery cadence and thoughtful design brought the right level of confidence to a high-stakes rollout." },
  { name: "Ava Patel", role: "VP Product, BlueHarbor", quote: "From architecture to launch, the team translated complexity into usable momentum for our users." },
];
const techStack = ["React", "Next.js", "Node.js", "Python", "Java", "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "Firebase", "OpenAI"];
const stats = [
  { value: "250+", label: "Projects" },
  { value: "120+", label: "Clients" },
  { value: "40+", label: "Experts" },
  { value: "15+", label: "Countries" },
];
const pricing = [
  { name: "Starter", price: "$24", description: "For fast-moving teams building momentum.", features: ["AI advisory sprint", "Core web experience", "Priority email support"] },
  { name: "Professional", price: "$89", description: "For scaling digital products across operations.", features: ["Advanced architecture", "Automation workflows", "Dedicated delivery lead"] },
  { name: "Enterprise", price: "Custom", description: "For global organizations with complex systems.", features: ["Multi-region rollout", "Enterprise security", "Executive strategy workshops"] },
];
const faqs = [
  { question: "What types of clients do you support?", answer: "We partner with growth-stage companies and enterprise teams that need resilient technology strategy and hands-on execution." },
  { question: "How long does a typical engagement last?", answer: "Most engagements span from four weeks for focused sprints to several quarters for platform-scale transformation." },
  { question: "Do you provide ongoing support after launch?", answer: "Yes. We offer retention, optimization, and managed support models tailored to each operating environment." },
];
const blogPosts = [
  { title: "Designing resilient AI systems for enterprise adoption", category: "AI" },
  { title: "Future-proofing digital infrastructure with cloud-native architecture", category: "Cloud" },
  { title: "Why product-led transformation outperforms traditional delivery", category: "Strategy" },
];

export function SiteShell() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/30 to-blue-500/20 text-sm font-semibold text-white">
              AR
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-slate-200">AR TECHNOLOGIES</p>
              <p className="text-xs text-slate-400">Digital transformation studio</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {[["Home", "#home"], ["Services", "#services"], ["Solutions", "#solutions"], ["Industries", "#industries"], ["About", "#about"], ["Careers", "/careers"], ["Blog", "/blog"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 md:inline-flex">
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      <main id="home" className="overflow-hidden">
        <section className="relative flex min-h-screen items-center justify-center px-6 py-24 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.25),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(37,99,235,0.25),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#0b1023_48%,_#111827_100%)]" />
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:82px_82px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <Sparkles size={16} className="text-purple-400" /> We. Innovate. Transform. Grow.
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Building Tomorrow&apos;s Digital Enterprise
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              AR Technologies empowers businesses through AI, Cloud, Software Engineering, Automation, and Digital Transformation.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3 font-semibold text-white shadow-2xl shadow-purple-500/20">
                Get Started
              </a>
              <a href="#services" className="rounded-full border border-white/15 bg-white/10 px-7 py-3 font-semibold text-slate-200 backdrop-blur">
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Enterprise services built for modern growth</h2>
            </div>
            <p className="max-w-xl text-slate-400">We combine strategy, design, engineering, and operations to help organizations move faster with confidence.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{service.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A premium partner for transformation at enterprise speed</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">We blend strategic insight with engineering rigor to help modern organizations scale with confidence and clarity.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-200">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="industries" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Industries</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tailored solutions for every sector</h2>
            </div>
            <p className="max-w-xl text-slate-400">Our experience spans regulated, high-growth, and mission-critical environments where precision matters.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-slate-200 backdrop-blur">
                <div className="mb-4 h-2 w-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">A refined path from strategy to scale</h2>
              <div className="mt-10 space-y-6">
                {process.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-sm font-semibold text-purple-200">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">A thoughtful milestone that keeps business objectives and execution aligned.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Case Studies</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Selected work with measurable impact</h2>
                </div>
                <div className="hidden h-16 w-16 items-center justify-center rounded-full border border-white/10 text-purple-300 md:flex">
                  <Rocket size={24} />
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                {caseStudies.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <ArrowRight size={18} className="text-slate-400" />
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{item.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 p-8 shadow-2xl shadow-black/20 lg:p-12">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Testimonials</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Trusted by forward-looking teams</h2>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 font-semibold text-white">
                  {testimonials[0].name.split(" ").map((word) => word[0]).join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonials[0].name}</h3>
                  <p className="text-sm text-slate-400">{testimonials[0].role}</p>
                </div>
              </div>
              <p className="mt-6 text-xl leading-9 text-slate-300">“{testimonials[0].quote}”</p>
              <div className="mt-6 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Stars key={index} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Tech Stack</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A modern toolchain for ambitious delivery</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {techStack.map((tech) => (
              <div key={tech} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-slate-200 backdrop-blur">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-200">
                  <Cpu size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 shadow-2xl shadow-black/20 md:grid-cols-2 xl:grid-cols-4 lg:p-12">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center">
                <div className="text-4xl font-semibold text-white">{stat.value}</div>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Flexible engagements for every stage</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <div key={plan.name} className={`rounded-[2rem] border p-8 shadow-2xl ${index === 1 ? "border-purple-400/40 bg-gradient-to-br from-purple-500/15 to-blue-500/10" : "border-white/10 bg-white/10"}`}>
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{plan.description}</p>
                <div className="mt-8 flex items-end gap-1">
                  <span className="text-4xl font-semibold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="pb-1 text-slate-400">/mo</span>}
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-300" /> {feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white">Choose Plan</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Answers to common questions</h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
                    <div className="flex w-full items-center justify-between px-5 py-4 text-left text-white">
                      <span>{faq.question}</span>
                      <ChevronDown size={18} className="text-slate-400" />
                    </div>
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Blog</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Latest insights from our team</h2>
              <div className="mt-8 space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">{post.category}</p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{post.title}</h3>
                    <a href="/blog" className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">Read article <MoveRight size={16} /></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s build something exceptional</h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">Tell us where you are headed and we&apos;ll shape the roadmap with precision.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3"><Mail size={18} className="text-purple-300" /> hello@artechnologies.ai</div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-purple-300" /> +1 (800) 555-0148</div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-purple-300" /> 225 Park Avenue, New York, NY</div>
              </div>
              <div className="mt-8 h-48 rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-center text-slate-400">
                <Globe2 className="mx-auto mb-4 text-purple-300" size={28} />
                Google Maps placeholder
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 shadow-2xl shadow-black/20">
              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Name</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" required />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Email</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" type="email" required />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Phone</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Company</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" />
                  </label>
                </div>
                <label className="text-sm text-slate-300">
                  <span className="mb-2 block">Message</span>
                  <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" required />
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white">
                  Send Inquiry <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#020617]/90 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/30 to-blue-500/20 text-sm font-semibold text-white">
                AR
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-200">AR TECHNOLOGIES</p>
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
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
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
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Newsletter</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">Subscribe for product, strategy, and technology updates.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input className="w-full rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none" placeholder="Email address" />
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white">Join</button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AR Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-300">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      <a href="#home" className="fixed bottom-5 right-5 z-50 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-white shadow-2xl">
        <ArrowRight size={18} className="rotate-[-45deg]" />
      </a>

      <a href="https://wa.me/18005550148" className="fixed bottom-24 right-5 z-40 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300 backdrop-blur">
        <MessageCircle size={18} /> WhatsApp
      </a>

      <div className="fixed bottom-24 left-5 z-40 rounded-full border border-white/10 bg-slate-950/80 p-3 text-slate-300 shadow-2xl backdrop-blur">
        <Bot size={18} />
      </div>
    </div>
  );
}
