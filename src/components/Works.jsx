import React, { useState } from "react";
import { projects } from "../constants";
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./Icons";

const Works = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI & Agents", "Full-Stack SaaS", "FinTech & Systems"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <span className="hash-span" id="projects-anchor">
        &nbsp;
      </span>

      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PRODUCTION CODE & ARCHITECTURES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured <span className="text-gradient-cyan">Projects</span> & Systems
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Real-world applications and architectural designs showcasing practical engineering: AI agent workflows,
          payment gateways, high-throughput microservices, and finTech state machines.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === cat
                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.name}-${index}`}
            className="dev-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div>
              {/* Project Image Banner */}
              <div className="relative w-full h-52 bg-slate-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-black/30" />

                {/* Badges on top of image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-slate-700/80">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-purple-500/20 backdrop-blur-md text-purple-300 border border-purple-500/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-cyan-300/80 mt-1 mb-3">{project.tagline}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Key Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      // Architectural Highlights:
                    </span>
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.name}-${tag.name}`}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Footer Link Buttons */}
            <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
              {project.source_code_link && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>{project.source_code_link.includes("github.com") ? "View Code" : "Source"}</span>
                </a>
              )}

              <a
                href={project.live_link || project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/50 text-cyan-300 hover:text-cyan-200 transition-colors ml-auto"
              >
                <span>{project.live_link ? "Live Site" : "Preview"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;