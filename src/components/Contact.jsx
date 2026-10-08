import React, { useState } from "react";
import { personalInfo } from "../constants";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Terminal,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "Full-Stack Opportunity",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const topics = [
    "Full-Stack Opportunity",
    "SDE / Backend Role",
    "AI & Multi-Agent Project",
    "Microservices & Architecture",
    "General Tech Inquiry",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "Dispatching message payload..." });

    // Format mailto link as reliable fallback
    const subject = encodeURIComponent(`[Portfolio Contact: ${form.topic}] from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus({
        state: "success",
        message: "Thank you! Redirecting to email client to deliver directly to Gaurav...",
      });
      window.open(mailtoUrl, "_blank");
      setForm({ name: "", email: "", topic: "Full-Stack Opportunity", message: "" });
      setTimeout(() => setStatus({ state: "idle", message: "" }), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <span className="hash-span" id="contact-anchor">
        &nbsp;
      </span>

      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>CONTACT & COLLABORATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Build Something <span className="text-gradient-cyan">Extraordinary</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          I'm always interested in connecting with teams and founders building AI products, scalable backend systems,
          developer tools, SaaS platforms, or challenging engineering systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info & Developer Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Copy Contact Card */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Direct Developer Channels
            </h3>

            {/* Email item */}
            <div className="p-3.5 rounded-xl bg-[#090e1a] border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>

            {/* Phone item */}
            <div className="p-3.5 rounded-xl bg-[#090e1a] border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block">Phone</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>

            {/* Location item */}
            <div className="p-3.5 rounded-xl bg-[#090e1a] border border-slate-800 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block">Location</span>
                <span className="text-xs sm:text-sm font-mono text-white block">{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 text-xs font-mono text-slate-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 text-xs font-mono text-slate-200 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Discussion Interests Pills */}
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-xs">
            <span className="text-[11px] font-mono text-cyan-400 block mb-2">// INTERESTED IN DISCUSSING:</span>
            <div className="flex flex-wrap gap-2">
              {[
                "AI Products & Agents",
                "Scalable Microservices",
                "SaaS Systems",
                "FinTech & Banking",
                "EdTech Platforms",
                "AWS Cloud Architectures",
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300 font-mono"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-[#0b101e] border border-slate-800 shadow-xl">
          <div className="pb-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
              <p className="text-slate-400 text-xs font-mono mt-0.5">
                Delivered directly to {personalInfo.email}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              ● Fast Response
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Topic selector pills */}
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-2">Subject / Context:</label>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, topic: t })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      form.topic === t
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : "bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Miller"
                  className="w-full bg-[#070b14] px-4 py-3 text-sm text-white rounded-xl border border-slate-800 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className="w-full bg-[#070b14] px-4 py-3 text-sm text-white rounded-xl border border-slate-800 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Message / Requirements</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, system architecture requirements, or role..."
                className="w-full bg-[#070b14] px-4 py-3 text-sm text-white rounded-xl border border-slate-800 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {status.message && (
              <div
                className={`p-3 rounded-xl text-xs font-mono ${
                  status.state === "success"
                    ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/40"
                    : "bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>{status.state === "sending" ? "Dispatching..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;