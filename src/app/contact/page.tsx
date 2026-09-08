"use client";
import React, { useState } from "react";
import { submitToSheetDB } from "@/lib/sheetdb";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Club Recruitments Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);

    await submitToSheetDB({
      type: "contact",
      name,
      email,
      subject,
      message,
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Connect with Traders
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Have queries regarding recruitments, sponsorship, event collaborations, or research papers? Reach out to our executive desk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0F141C] border border-white/10">
          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out to Traders @ BPHC. Our executive team has received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="mt-2 px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-300 mb-1.5 font-medium">Your Full Name</label>
                <input
                  required
                  placeholder="e.g. Rahul Sen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-300 mb-1.5 font-medium">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="e.g. rahul@bits-pilani.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-300 mb-1.5 font-medium">Query Category</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#141A24] border border-white/10 text-zinc-300 focus:border-emerald-500 focus:outline-none"
                >
                  <option>Club Recruitments Inquiry</option>
                  <option>Sponsorship & Corporate Collaboration</option>
                  <option>Flagship Competition / Hackathon Query</option>
                  <option>Quantitative Research Collaboration</option>
                  <option>General Media / Alumni Outreach</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 mb-1.5 font-medium">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can Traders @ BPHC collaborate or assist you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wider uppercase transition-colors disabled:opacity-50"
              >
                {loading ? "Transmitting..." : "Transmit Inquiry"}
              </button>
            </form>
          )}
        </div>

        {/* Campus & Social Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0F141C] border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Campus Location</span>
            <h3 className="text-base font-bold text-white">BITS Pilani Hyderabad Campus</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Jawahar Nagar, Kapra Mandal<br />
              Hyderabad, Telangana 500078<br />
              India
            </p>
            <div className="pt-2 font-mono text-xs text-emerald-400">
              traders@hyderabad.bits-pilani.ac.in
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F141C] border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Socials & Networks</span>
            <div className="space-y-2 pt-1">
              <a
                href="https://www.instagram.com/traders_bphc/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-emerald-400 text-xs transition-colors"
              >
                <span>Instagram</span>
                <span className="text-zinc-500 font-mono">@traders_bphc &rarr;</span>
              </a>
              <a
                href="https://www.linkedin.com/company/tradersatbphc"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-emerald-400 text-xs transition-colors"
              >
                <span>LinkedIn</span>
                <span className="text-zinc-500 font-mono">tradersatbphc &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}