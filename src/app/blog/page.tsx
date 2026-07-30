// import Link from "next/link";

// const posts = [
//   { title: "Designing resilient AI systems for enterprise adoption", category: "AI" },
//   { title: "Modern cloud foundations for high-growth teams", category: "Cloud" },
//   { title: "Why transformation programs need product thinking", category: "Strategy" },
// ];

// export default function BlogPage() {
//   return (
//     <main className="min-h-screen bg-[#030712] px-6 py-24 text-slate-100 lg:px-8">
//       <div className="mx-auto max-w-6xl">
//         <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Blog</p>
//         <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Latest Insights</h1>
//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {posts.map((post) => (
//             <article key={post.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur">
//               <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">{post.category}</p>
//               <h2 className="mt-4 text-xl font-semibold text-white">{post.title}</h2>
//               <p className="mt-3 text-sm leading-7 text-slate-400">Practical perspectives and field-tested approaches for technology leaders navigating change.</p>
//             </article>
//           ))}
//         </div>
//         <Link href="/" className="mt-10 inline-flex rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white">Back to Home</Link>
//       </div>
//     </main>
//   );
// }
