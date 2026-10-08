import React, { useState } from "react";
import { architecturePipeline, agenticLifecycle } from "../constants";
import {
  Layers,
  Cpu,
  Server,
  Cloud,
  Database,
  ShieldCheck,
  Activity,
  Bot,
  Terminal,
  ArrowRight,
  Workflow,
  Sparkles,
} from "lucide-react";

const Architecture = () => {
  const [activePipelineIndex, setActivePipelineIndex] = useState(3); // default on Full-Stack
  const [activeTab, setActiveTab] = useState("pipeline"); // 'pipeline' | 'agentic'

  return (
    <section id="architecture" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <span className="hash-span" id="architecture-anchor">
        &nbsp;
      </span>

      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Workflow className="w-3.5 h-3.5" />
          <span>SYSTEM ARCHITECTURE & LIFECYCLE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How I Think About <span className="text-gradient-cyan">Systems</span> & End-to-End Ownership
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          I don't just write isolated functions or close tickets. I take end-to-end ownership — from dissecting product
          requirements and designing distributed microservices to AWS EC2 deployment, database reliability, and telemetry.
        </p>
      </div>

      {/* Architecture Tabs */}
      <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab("pipeline")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all ${
            activeTab === "pipeline"
              ? "bg-slate-800 text-cyan-400 border border-slate-700 font-bold"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Production Engineering Pipeline (7 Phases)</span>
        </button>
        <button
          onClick={() => setActiveTab("agentic")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all ${
            activeTab === "agentic"
              ? "bg-slate-800 text-purple-400 border border-slate-700 font-bold"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          <Bot className="w-4 h-4 text-purple-400" />
          <span>Autonomous AI Agentic Loop</span>
        </button>
      </div>

      {/* View 1: Production Engineering Pipeline */}
      {activeTab === "pipeline" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Visual Interactive Pipeline Timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {architecturePipeline.map((step, idx) => {
              const isSelected = activePipelineIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActivePipelineIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between min-h-[105px] ${
                    isSelected
                      ? "bg-cyan-950/40 border-cyan-500/80 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                      : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-cyan-400" : "text-slate-500"
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-cyan-400 animate-pulse" : "bg-slate-700"
                      }`}
                    ></span>
                  </div>
                  <div>
                    <h3
                      className={`text-xs font-semibold leading-tight line-clamp-2 ${
                        isSelected ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {step.phase}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Detail Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-[#0c1424] border border-cyan-500/30 shadow-xl shadow-black/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-mono font-extrabold text-cyan-400">
                  {architecturePipeline[activePipelineIndex].step}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {architecturePipeline[activePipelineIndex].phase}
                  </h3>
                  <span className="text-xs font-mono text-cyan-300">
                    Primary Focus: {architecturePipeline[activePipelineIndex].focus}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300">
                  Phase {activePipelineIndex + 1} of 7
                </span>
                {activePipelineIndex < 6 && (
                  <button
                    onClick={() => setActivePipelineIndex(activePipelineIndex + 1)}
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 border border-cyan-500/40 transition-colors"
                  >
                    Next Phase &rarr;
                  </button>
                )}
              </div>
            </div>

            <p className="mt-6 text-slate-200 text-base sm:text-lg leading-relaxed">
              {architecturePipeline[activePipelineIndex].description}
            </p>

            {/* Microservice Architecture Blueprint Graphic */}
            <div className="mt-8 p-5 rounded-xl bg-[#070b14] border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-slate-400 mb-2 flex items-center justify-between">
                <span>// RUNTIME ARCHITECTURE SCHEMATIC</span>
                <span className="text-emerald-400 text-[11px]">● PRODUCTION READY</span>
              </div>
              <div className="min-w-[600px] py-3 text-slate-300 leading-6">
                <span className="text-purple-400">PRODUCT IDEA</span> ───►{" "}
                <span className="text-cyan-400">Technical Specs & Architecture</span>
                <br />
                {"                         "}│
                <br />
                {"         "}┌───────────────┴───────────────┐
                <br />
                {"         "}▼                               ▼
                <br />
                {"    "}
                <span className="text-emerald-400">[Frontend: React.js / Next]</span>
                {"     "}
                <span className="text-amber-400">[Backend: Node.js Microservices]</span>
                <br />
                {"    "}• Client-side Cache & State{"           "}• RESTful APIs & Caching (-30% latency)
                <br />
                {"    "}• Responsive UI & Dashboards{"           "}• Auth (JWT/RBAC) & WebSockets
                <br />
                {"         "}└───────────────┬───────────────┘
                <br />
                {"                         "}▼
                <br />
                {"              "}
                <span className="text-blue-400">[Databases: PostgreSQL / MongoDB / MySQL]</span>
                <br />
                {"                         "}▼
                <br />
                {"              "}
                <span className="text-indigo-400">[Cloud: AWS EC2 + Application Load Balancer]</span>
                <br />
                {"                         "}▼
                <br />
                {"              "}
                <span className="text-emerald-400">[Production Telemetry & Live Health Monitoring]</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 2: Autonomous AI Agentic Loop */}
      {activeTab === "agentic" && (
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#100e26] to-[#0a1128] border border-purple-500/30 shadow-xl shadow-black/40 space-y-8 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BEYOND SIMPLE CHATBOTS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">The Multi-Agent Execution Lifecycle</h3>
              <p className="text-slate-300 text-sm mt-1">
                "I don't want AI to simply be a chatbot sitting inside an application. I build systems where AI can
                reason, plan, use tools, and execute workflows." — Gaurav Kumar
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 self-start sm:self-auto">
              Applied in WriteMate AI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
            {agenticLifecycle.map((stage, idx) => (
              <div
                key={stage.step}
                className="p-4 rounded-xl bg-[#080c16] border border-purple-900/40 flex flex-col justify-between hover:border-purple-500/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-purple-400">0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{stage.step}</h4>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 text-xs text-purple-200 font-mono flex items-center justify-between flex-wrap gap-2">
            <span>
              💡 Implemented in browser automation, context-aware DOM writing assistance, and automated grading pipelines.
            </span>
            <a
              href="#projects"
              className="text-cyan-400 hover:underline flex items-center gap-1 text-xs"
            >
              See WriteMate AI project &rarr;
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Architecture;
