import React, { useState } from "react";
import { personalInfo } from "../constants";
import {
  Terminal,
  Code2,
  Cpu,
  Server,
  Cloud,
  ArrowRight,
  Copy,
  Check,
  Play,
  FileCode,
  Layers,
  Sparkles,
  GitBranch,
} from "lucide-react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("profile.ts");
  const [terminalOutput, setTerminalOutput] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommand = (cmd) => {
    if (cmd === "status") {
      setTerminalOutput("⚡ MentisPrep (US-based EdTech): Running Node.js microservices & React learning platforms on AWS.");
    } else if (cmd === "stack") {
      setTerminalOutput("🚀 Node.js, Express, React, TypeScript, Microservices, AWS EC2, PostgreSQL, MongoDB, Redis.");
    } else if (cmd === "ai") {
      setTerminalOutput("🤖 WriteMate AI (Browser extension) + Multi-Agent workflow orchestration (Understand → Reason → Plan → Execute).");
    } else if (cmd === "clear") {
      setTerminalOutput("");
    }
  };

  const codeSnippets = {
    "profile.ts": `// Gaurav Kumar — Software Engineer
interface EngineerProfile {
  name: string;
  role: string;
  currentCompany: string;
  experienceYears: number;
  coreStack: string[];
  aiInitiatives: string[];
  ownership: "Requirement → Architecture → AWS Prod";
  status: "Shipping production features 🚀";
}

export const gaurav: EngineerProfile = {
  name: "${personalInfo.name}",
  role: "Full-Stack Software Engineer & AI Builder",
  currentCompany: "MentisPrep (US Startup)",
  experienceYears: 3,
  coreStack: [
    "Node.js", "React.js", "Microservices",
    "AWS (EC2, ALB)", "REST APIs", "PostgreSQL", "Docker"
  ],
  aiInitiatives: [
    "WriteMate AI (In-Context Writing Assistant)",
    "Multi-Agent Execution Loops", "RAG Pipelines"
  ],
  ownership: "Requirement → Architecture → AWS Prod",
  status: "Shipping production features 🚀"
};`,
    "pipeline.sh": `#!/bin/bash
# Microservices Deployment Pipeline
set -e

echo "[1/4] Building React frontend & TypeScript types..."
npm run build --silent && echo "✔ Frontend build OK"

echo "[2/4] Testing Node.js microservices & API contracts..."
npm test -- --coverage --threshold=85 && echo "✔ All 42 unit tests passed"

echo "[3/4] Caching layer validation..."
redis-cli ping | grep PONG && echo "✔ Redis cache warm (-30% latency cut)"

echo "[4/4] Deploying container to AWS EC2 via ALB..."
aws ecs update-service --cluster prod-cluster --service mentisprep-api
echo "✔ Health check 200 OK. Traffic routed. System LIVE."`,
    "metrics.json": `{
  "system_telemetry": {
    "uptime": "99.98%",
    "api_response_improvement": "-30% (InfoCart caching)",
    "maintainability_index": "+25% (Nonstandard Digital)",
    "current_environment": "Production @ MentisPrep",
    "active_domains": [
      "Microservices Architecture",
      "Interactive Learning UI",
      "AWS Cloud Infrastructure",
      "Autonomous AI Agents"
    ]
  }
}`,
  };

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 flex items-center justify-center dev-grid-bg">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-purple-600/15 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Developer Pitch & Profile */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-slate-700/80 text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-semibold">Available</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">SDE @ MentisPrep</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">Full-Stack & AI Systems</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Architecting <span className="text-gradient-cyan">Scalable Microservices</span>, Cloud Infrastructure &{" "}
              <span className="text-gradient-purple">AI Systems</span>.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Hi, I'm <span className="text-white font-semibold">Gaurav Kumar</span> — a Full-Stack Software Engineer with{" "}
              <span className="text-cyan-400 font-mono font-medium">3+ years</span> of professional experience building and
              deploying production systems. From decoupled Node.js microservices and database tuning to interactive React
              interfaces and AWS cloud deployment.
            </p>
          </div>

          {/* Highlight metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full py-2">
            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-mono font-bold text-cyan-400">3+ Yrs</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Experience</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">-30%</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">API Latency Cut</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-mono font-bold text-indigo-400">AWS</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">EC2 & ALB Cloud</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-mono font-bold text-amber-400">End-to-End</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Feature Ownership</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#architecture"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200"
            >
              <span>Explore Architecture & Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-mono bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied gauravkumar1raj@gmail.com</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-400 hover:text-white px-3 py-2 transition-colors flex items-center gap-1.5"
            >
              Let's Connect &rarr;
            </a>
          </div>

          {/* Quick tech badge line */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 flex-wrap pt-1">
            <span className="text-slate-500">// Stack:</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300">Node.js</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300">React.js</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300">Microservices</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300">AWS (EC2/ALB)</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300">PostgreSQL</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300">AI Agents</span>
          </div>
        </div>

        {/* Right Column: Interactive Developer Terminal / Code Sandbox */}
        <div className="lg:col-span-5 w-full">
          <div className="dev-terminal overflow-hidden border border-slate-800 bg-[#090e1a]/95">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0c1222] border-b border-slate-800/90">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  gaurav@mentisprep:~/portfolio
                </span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-1">
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
                      activeTab === tab
                        ? "bg-slate-800 text-cyan-300 font-semibold border border-slate-700"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    <FileCode className="w-3 h-3 text-cyan-400" />
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 overflow-x-auto max-h-[360px] text-xs font-mono leading-relaxed bg-[#070b14]/90 text-slate-200 select-text">
              <pre className="text-slate-300">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Interactive Command Prompt Line */}
            <div className="p-3 bg-[#0b101e] border-t border-slate-800 text-xs font-mono flex flex-col gap-2">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span className="text-cyan-400 flex items-center gap-1">
                  <Play className="w-3 h-3" /> Quick CLI Invocations:
                </span>
                <span className="text-slate-500">Click to execute</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => handleCommand("status")}
                  className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-[11px] transition-colors"
                >
                  $ gaurav --status
                </button>
                <button
                  onClick={() => handleCommand("stack")}
                  className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-[11px] transition-colors"
                >
                  $ gaurav --stack
                </button>
                <button
                  onClick={() => handleCommand("ai")}
                  className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-[11px] transition-colors"
                >
                  $ gaurav --ai
                </button>
                {terminalOutput && (
                  <button
                    onClick={() => handleCommand("clear")}
                    className="px-2 py-1 rounded bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-800/40 text-[11px] transition-colors"
                  >
                    clear
                  </button>
                )}
              </div>

              {terminalOutput && (
                <div className="mt-1 p-2 rounded bg-slate-950 border border-slate-800 text-cyan-300 text-[11px] leading-relaxed animate-in fade-in duration-150">
                  <span className="text-emerald-400 mr-1.5">➜</span>
                  {terminalOutput}
                </div>
              )}

              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                <span className="text-emerald-400">gaurav@mentisprep:~$</span>
                <span className="text-slate-300">echo $MISSION</span>
                <span className="text-slate-500 cursor-blink">_</span>
                <span className="ml-auto text-[10px] text-slate-500 font-mono">v3.2.0 • PROD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;