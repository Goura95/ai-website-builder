import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              WebBuilder<span className="text-indigo-400">.ai</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#tech-stack" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="#login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/50"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>⚡ Next-Gen AI Web Engineering Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
            Build AI Websites Faster
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Create, improve, test, and deploy production-ready websites with AI.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#get-started"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-semibold shadow-xl shadow-indigo-500/25 transition-all text-center"
            >
              Start Building Free
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium transition-all hover:bg-slate-800 text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </a>
          </div>

          {/* Feature Tech Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Next.js & TypeScript
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Tailwind CSS
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              GitHub & Vercel Integration
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Automated Testing
            </div>
          </div>

          {/* Interactive Preview Mockup */}
          <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-indigo-500/10 overflow-hidden">
            {/* Top Bar */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-xs text-slate-500 font-mono">app/page.tsx — WebBuilder Studio</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready
                </span>
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Vercel Live
                </span>
              </div>
            </div>

            {/* Prompt Window & Code Split */}
            <div className="p-6 text-left grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Left Column: Prompting */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-indigo-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      AI Prompt
                    </span>
                    <span>Just now</span>
                  </div>
                  <p className="text-sm text-slate-200 font-mono bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    "Build a modern SaaS homepage with a clean hero section, automated workflow features, responsive design, and instant deployment."
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Execution Pipeline</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-emerald-400">
                      <span className="flex items-center gap-2">✓ Planning & Architecture</span>
                      <span className="text-slate-500">Completed</span>
                    </div>
                    <div className="flex items-center justify-between text-emerald-400">
                      <span className="flex items-center gap-2">✓ Generating React & Tailwind Code</span>
                      <span className="text-slate-500">Completed</span>
                    </div>
                    <div className="flex items-center justify-between text-emerald-400">
                      <span className="flex items-center gap-2">✓ Executing Automated Tests</span>
                      <span className="text-slate-500">Passed</span>
                    </div>
                    <div className="flex items-center justify-between text-indigo-400">
                      <span className="flex items-center gap-2">⚡ GitHub Commit & Vercel Sync</span>
                      <span className="text-indigo-400 font-semibold">Deploying</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Code / Preview Visual */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto text-slate-300 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-500">
                  <span>Generated Code Preview</span>
                  <span className="text-indigo-400">TypeScript / JSX</span>
                </div>
                <p><span className="text-purple-400">export default function</span> <span className="text-blue-400">Hero</span>() &#123;</p>
                <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                <p className="pl-8 text-slate-400">&lt;<span className="text-pink-400">div</span> <span className="text-indigo-300">className</span>=<span className="text-emerald-300">"hero-container"</span>&gt;</p>
                <p className="pl-12 text-slate-400">&lt;<span className="text-pink-400">h1</span> <span className="text-indigo-300">className</span>=<span className="text-emerald-300">"text-6xl font-bold"</span>&gt;</p>
                <p className="pl-16 text-emerald-300">Build AI Websites Faster</p>
                <p className="pl-12 text-slate-400">&lt;/<span className="text-pink-400">h1</span>&gt;</p>
                <p className="pl-12 text-slate-400">&lt;<span className="text-pink-400">p</span> <span className="text-indigo-300">className</span>=<span className="text-emerald-300">"text-xl text-slate-300"</span>&gt;</p>
                <p className="pl-16 text-emerald-300">Create, improve, test, and deploy production-ready websites with AI.</p>
                <p className="pl-12 text-slate-400">&lt;/<span className="text-pink-400">p</span>&gt;</p>
                <p className="pl-8 text-slate-400">&lt;/<span className="text-pink-400">div</span>&gt;</p>
                <p className="pl-4">);</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 border-t border-slate-900 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Capabilities</h2>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Everything you need to ship web apps at lightspeed
              </p>
              <p className="mt-4 text-slate-400 text-base">
                From initial idea to published domain, our AI handles every step of modern web engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Production React Code</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Generates clean TypeScript, Next.js, and Tailwind CSS code standard with responsive design built-in.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Automated Verification</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Inspects and validates code before deployment to prevent runtime errors and visual glitches.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">GitHub & Vercel Sync</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Directly commits to your repository and triggers instant Vercel deployments with live URLs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">Workflow</h2>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                How It Works
              </p>
              <p className="mt-4 text-slate-400 text-base">
                Four automated steps from concept to production-ready website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 relative">
                <div className="text-xs font-mono text-indigo-400 mb-2">STEP 01</div>
                <h4 className="text-lg font-semibold text-white mb-2">Prompt & Plan</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Describe your target audience, goals, and desired layout in natural language.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 relative">
                <div className="text-xs font-mono text-indigo-400 mb-2">STEP 02</div>
                <h4 className="text-lg font-semibold text-white mb-2">AI Generation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">AI crafts responsive, accessible Next.js component files and Tailwind styling.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 relative">
                <div className="text-xs font-mono text-indigo-400 mb-2">STEP 03</div>
                <h4 className="text-lg font-semibold text-white mb-2">Test & Refine</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Automatic inspection ensures accessibility, responsiveness, and zero syntax errors.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 relative">
                <div className="text-xs font-mono text-indigo-400 mb-2">STEP 04</div>
                <h4 className="text-lg font-semibold text-white mb-2">Deploy & Host</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Code is pushed to GitHub and automatically deployed live on Vercel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900 p-8 sm:p-12 border border-indigo-500/20 text-center relative overflow-hidden">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Ready to Build AI Websites Faster?
                </h2>
                <p className="mt-4 text-slate-300 text-base">
                  Create, improve, test, and deploy production-ready websites with AI today.
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href="#get-started"
                    className="px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-100 transition-all shadow-xl shadow-indigo-500/10"
                  >
                    Get Started Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-500 py-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
              AI
            </div>
            <span className="font-semibold text-slate-300">WebBuilder.ai</span>
          </div>
          <p>© {new Date().getFullYear()} WebBuilder AI Platform. All rights reserved.</p>
          <div className="flex space-x-6 text-xs text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
