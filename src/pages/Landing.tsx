export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* HEADER */}
      <header className="fixed w-full z-50 bg-white/60 backdrop-blur-lg border-b border-[#c7d2fe]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#5046e4] to-[#3e36c0] bg-clip-text text-transparent">
            SecondBrain
          </span>
          <nav className="hidden md:flex space-x-8">
            {["Features", "Workflow", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#37319e] font-medium hover:text-[#3e36c0] transition"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#get-started"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#5046e4] to-[#3e36c0] text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20">
        {/* Background gradient blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#e0e7ff] via-[#c7d2fe] to-transparent rounded-full blur-3xl opacity-70" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* TEXT */}
          <div className="flex-1">
            <h1 className="text-6xl font-extrabold leading-tight text-[#37319e]">
              Think Smarter.
              <span className="bg-gradient-to-r from-[#5046e4] to-[#3e36c0] bg-clip-text text-transparent">
                Remember Everything.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Your AI-powered second brain to capture, connect, and create. All
              your ideas, perfectly organized and instantly searchable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5046e4] to-[#3e36c0] text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Start Free
              </a>
              <a
                href="#demo"
                className="px-6 py-3 rounded-xl border border-[#5046e4] text-[#5046e4] font-semibold hover:bg-[#e0e7ff] transition"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* MOCKUP / PREVIEW */}
          <div className="flex-1 relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#5046e4]/20 to-[#3e36c0]/20 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-[#c7d2fe] shadow-2xl">
              {/* Replace with your actual screenshot */}
              <div className="w-full h-[420px] bg-white flex items-center justify-center text-[#37319e] font-bold text-2xl">
                📒 Dashboard Screenshot
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="py-20 bg-gradient-to-b from-white to-[#e0e7ff]/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#37319e] mb-12">
            Why You’ll Love SecondBrain
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Linked Ideas",
                desc: "Connect notes like a mind map. See relationships instantly.",
              },
              {
                title: "Instant Search",
                desc: "Find anything in milliseconds, even inside PDFs & audio notes.",
              },
              {
                title: "AI Summaries",
                desc: "Turn messy thoughts into clean, actionable knowledge.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-6 bg-white rounded-2xl shadow-md border border-[#c7d2fe] hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#37319e]">
                  {f.title}
                </h3>
                <p className="mt-3 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
