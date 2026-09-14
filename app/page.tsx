import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                WebAI<span className="text-indigo-400">Builder</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#templates" className="hover:text-white transition-colors">Templates</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#login" className="hidden sm:inline-block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Sign In
              </a>
              <a
                href="#get-started"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Next-Generation Web Engineering
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Build AI Websites <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Faster</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Accelerate your workflow with AI-powered website development. Transform text prompts into production-ready Next.js & Tailwind CSS applications in seconds.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#generate"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Start Building Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch 2-Min Demo
            </a>
          </div>

          {/* Interactive Preview Mockup */}
          <div className="mt-16 max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-2 sm:p-4 backdrop-blur-xl shadow-2xl shadow-indigo-950/50">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-slate-400 font-mono bg-slate-950 px-3 py-1 rounded-md border border-slate-800/60 flex items-center gap-2">
                <span className="text-emerald-400">●</span> prompt -&gt; website-preview
              </div>
              <div className="w-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-left p-2">
              {/* Prompt Box */}
              <div className="md:col-span-5 bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-indigo-400 mb-2">AI Prompt</div>
                  <p className="text-sm text-slate-200 font-mono leading-relaxed bg-slate-900/90 p-3.5 rounded-lg border border-slate-800">
                    &quot;Create a modern SaaS landing page for an AI analytics platform with interactive charts, pricing, and dark mode.&quot;
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Generating components...</span>
                    <span className="text-indigo-400 font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-full"></div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Next.js 14</span>
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">Tailwind CSS</span>
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-pink-500/10 text-pink-300 border border-pink-500/20">TypeScript</span>
                  </div>
                </div>
              </div>

              {/* Live Preview Screen */}
              <div className="md:col-span-7 bg-slate-950 rounded-xl border border-slate-800/80 overflow-hidden min-h-[260px] flex flex-col justify-center p-6 relative">
                <div className="space-y-4">
                  <div className="h-4 w-32 bg-slate-800 rounded"></div>
                  <div className="h-8 w-3/4 bg-gradient-to-r from-slate-700 to-slate-800 rounded"></div>
                  <div className="h-3 w-5/6 bg-slate-800/60 rounded"></div>
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="h-20 bg-slate-900 border border-slate-800 rounded-lg p-3">
                      <div className="h-2 w-10 bg-indigo-500/40 rounded mb-2"></div>
                      <div className="h-4 w-12 bg-slate-700 rounded"></div>
                    </div>
                    <div className="h-20 bg-slate-900 border border-slate-800 rounded-lg p-3">
                      <div className="h-2 w-10 bg-purple-500/40 rounded mb-2"></div>
                      <div className="h-4 w-12 bg-slate-700 rounded"></div>
                    </div>
                    <div className="h-20 bg-slate-900 border border-slate-800 rounded-lg p-3">
                      <div className="h-2 w-10 bg-pink-500/40 rounded mb-2"></div>
                      <div className="h-4 w-12 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 border-t border-slate-800/80 bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3">Powerful Capabilities</h2>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Everything you need for AI-powered website development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Instant Code Generation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Generate clean, semantic TypeScript, React components, and Tailwind CSS layouts tailored to your exact prompt requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mobile-First & Responsive</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every generated website is fully responsive, styled with fluid grid layouts that look pixel-perfect on screens of all sizes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-pink-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">One-Click Deployment</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Seamlessly push directly to GitHub and publish automatically on Vercel with SEO optimizations built-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 py-12 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                AI
              </div>
              <span className="font-semibold text-white text-sm">WebAIBuilder</span>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} WebAIBuilder. AI-Powered Website Development Platform. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
