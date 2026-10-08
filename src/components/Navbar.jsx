import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../constants";
import { Terminal, Mail, Menu, X, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070a13]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-12">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Terminal className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-white font-mono font-bold text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                gaurav<span className="text-cyan-400">.dev</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                SDE @ MentisPrep
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Full-Stack & Microservices
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="list-none hidden lg:flex flex-row items-center gap-7">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[14px] font-medium transition-colors cursor-pointer ${
                active === nav.title
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="flex items-center gap-1 py-1">
                <span className="text-cyan-500/60 font-mono text-xs">/</span>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action Icons & Email Quick-Copy */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 transition-all"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-sm shadow-cyan-500/20 transition-all"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300"
            title="Copy Email"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {toggle ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {toggle && (
          <div className="lg:hidden p-6 bg-[#0b101e]/95 backdrop-blur-xl border border-slate-800 absolute top-20 right-4 left-4 z-50 rounded-2xl shadow-2xl shadow-black/80 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="text-xs font-mono text-cyan-400">// NAVIGATION</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                SDE @ MentisPrep
              </span>
            </div>
            <ul className="list-none flex flex-col gap-3">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-mono text-base py-1.5 px-2 rounded-lg transition-colors ${
                    active === nav.title
                      ? "text-cyan-400 bg-cyan-500/10 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="flex items-center justify-between">
                    <span>
                      <span className="text-cyan-500/50 mr-2">&gt;</span>
                      {nav.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{personalInfo.email}</span>
                <span className="text-slate-500">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href="#contact"
                  onClick={() => setToggle(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-600 text-white font-medium text-xs"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;