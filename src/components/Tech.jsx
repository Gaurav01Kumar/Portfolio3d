import React, { useState } from "react";
import { skillCategories } from "../constants";
import { Code2, Server, Cloud, Bot, Cpu, CheckCircle2, Layers } from "lucide-react";

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const allSkills = skillCategories.flatMap((c) =>
    c.skills.map((s) => ({ ...s, category: c.category }))
  );

  const displayedSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <span className="hash-span" id="skills-anchor">
        &nbsp;
      </span>

      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Cpu className="w-3.5 h-3.5" />
          <span>TECH STACK & TOOLING</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tools, Languages & <span className="text-gradient-cyan">Frameworks</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Technologies I actively use in production to build resilient microservices, responsive web applications, and
          scalable cloud workflows.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 flex-wrap mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === category
                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {displayedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="dev-card p-4 rounded-xl flex flex-col items-center text-center justify-between group hover:border-cyan-500/50 hover:bg-slate-900/90"
          >
            <div className="w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700/60 p-2 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain filter group-hover:brightness-110"
              />
            </div>

            <div className="w-full">
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                {skill.name}
              </h4>
              <p className="text-[11px] text-cyan-300/80 font-mono mt-0.5">{skill.experience}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 w-full flex items-center justify-center">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Production Stack Note */}
      <div className="mt-10 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Currently shipping production services on Node.js + React.js + AWS at MentisPrep.</span>
        </div>
        <span className="text-cyan-400">Zero theoretical fluff • Real production execution</span>
      </div>
    </section>
  );
};

export default Tech;