import React from "react";
import { personalInfo, engineeringPillars, engineeringFocus } from "../constants";
import { Code2, Server, Cloud, Bot, UserCheck, Terminal, Compass, ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <span className="hash-span" id="about-anchor">
        &nbsp;
      </span>

      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>ABOUT GAURAV KUMAR</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Full-Stack Software Engineer & <span className="text-gradient-cyan">System Builder</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          I started my journey with frontend development and systematically expanded across backend engineering,
          databases, cloud infrastructure, system architecture, and AI-powered multi-agent systems. Today, I build
          complete end-to-end solutions that turn ideas into reliable production systems.
        </p>
      </div>

      {/* 4 Core Engineering Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {engineeringPillars.map((pillar, idx) => (
          <div
            key={pillar.title}
            className="dev-card p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center p-2.5 group-hover:border-cyan-500/50 transition-colors">
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="w-full h-full object-contain filter group-hover:brightness-110"
                  />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono text-cyan-300 mb-3">{pillar.subtitle}</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Pillar 0{idx + 1}</span>
              <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">Production Ready &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Focus & Proficiency Distribution */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <Compass className="w-4 h-4" />
              <span>CORE COMPETENCIES & TECHNICAL PROFICIENCY</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Engineering Focus Breakdown</h3>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 self-start sm:self-auto">
            Production Weighted Metrics
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringFocus.map((focus) => (
            <div key={focus.area} className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">{focus.area}</span>
                <span className="text-xs font-mono font-bold text-cyan-400">{focus.percent}%</span>
              </div>
              {/* Progress bar meter */}
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${focus.percent}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 font-mono mt-1">{focus.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;