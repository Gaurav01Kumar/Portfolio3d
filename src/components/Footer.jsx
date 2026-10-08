import React from "react";
import { personalInfo } from "../constants";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#050811] py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Status */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-white font-bold text-base">
              gaurav<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              SDE @ MentisPrep
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Full-Stack Software Engineer • Microservices • Node.js • React • AWS • AI Builder
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-slate-400" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Email</span>
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div>
          © {new Date().getFullYear()} Gaurav Kumar. All systems operational.
        </div>
        <div>
          Designed & Built for Production with React, Node.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
