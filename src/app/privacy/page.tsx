import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-6 py-24 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl shadow-black/20 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Your privacy matters</h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">We collect minimal information required to provide our services and improve your browsing experience. We do not sell your personal data.</p>
        <Link href="/" className="mt-10 inline-flex rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white">Back to Home</Link>
      </div>
    </main>
  );
}
