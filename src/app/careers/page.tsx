import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-6 py-24 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl shadow-black/20 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Careers</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Grow with AR Technologies</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">We are building a curious, high-performing team focused on responsible innovation and enterprise-grade execution.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <h2 className="text-xl font-semibold text-white">Senior Product Engineer</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">Lead platform architecture for AI-native digital products used by enterprise teams.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <h2 className="text-xl font-semibold text-white">Cloud Solutions Architect</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">Design secure, resilient cloud patterns spanning hybrid infrastructure and modern delivery.</p>
          </div>
        </div>
        <Link href="/" className="mt-10 inline-flex rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white">Back to Home</Link>
      </div>
    </main>
  );
}
