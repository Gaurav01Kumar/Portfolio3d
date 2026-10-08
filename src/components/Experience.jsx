import React from "react";
import { experiences } from "../constants";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <span className="hash-span" id="experience-anchor">
        &nbsp;
      </span>

      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE & TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional <span className="text-gradient-cyan">Experience</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Over 3 years of building software for US startups and high-throughput systems, taking features from
          conceptual technical design all the way through AWS production deployments and telemetry.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={`${exp.company_name}-${idx}`} className="relative group">
            {/* Timeline node dot */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                exp.current
                  ? "bg-cyan-950 border-cyan-400 shadow-lg shadow-cyan-500/50"
                  : "bg-slate-900 border-slate-700 group-hover:border-slate-500"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  exp.current ? "bg-cyan-400 animate-ping" : "bg-slate-500"
                }`}
              ></div>
            </div>

            {/* Experience Card */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                exp.current
                  ? "bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-[#0c1322] border-cyan-500/40 shadow-xl shadow-cyan-950/20"
                  : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                        ● Present Role
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-cyan-400 font-mono mt-1">
                    <span className="font-semibold">{exp.company_name}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono text-slate-400">// Technologies:</span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/70 border border-slate-700/60 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;