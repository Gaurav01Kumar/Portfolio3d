import React from "react";
import { engineeringPrinciples, educationList, certifications } from "../constants";
import {
  Brain,
  GraduationCap,
  Award,
  Zap,
  CheckCircle2,
  BookOpen,
  Sparkles,
} from "lucide-react";

const Principles = () => {
  return (
    <section id="principles" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <span className="hash-span" id="principles-anchor">
        &nbsp;
      </span>

      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Brain className="w-3.5 h-3.5" />
          <span>CORE VALUES & PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How I Approach <span className="text-gradient-cyan">Engineering</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          I believe software engineering is more than just writing syntax. It is understanding users, designing
          scalable architectures, prioritizing reliability, and shipping working products.
        </p>
      </div>

      {/* 5 Core Principles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {engineeringPrinciples.map((item, idx) => (
          <div
            key={item.title}
            className="dev-card p-5 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-cyan-400">0{idx + 1}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-cyan-300/80 mb-2">{item.mantra}</p>
              <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center gap-1 text-[11px] font-mono text-slate-400">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>Gaurav's Rule #{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Certifications Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Column */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-6">Education</h3>

          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-cyan-500/40 pl-4 py-1">
                <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                <p className="text-xs font-mono text-cyan-300 mt-0.5">{edu.degree}</p>
                <span className="text-xs text-slate-400 font-mono block mt-1">{edu.period}</span>
                <p className="text-xs text-slate-300 mt-1">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
            <Award className="w-4 h-4" />
            <span>CREDENTIALS & INDUSTRY TRAINING</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-6">Certifications & Simulations</h3>

          <div className="space-y-3.5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#090e1a] border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5 text-indigo-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs font-mono text-indigo-300">{cert.issuer}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{cert.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
