"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Network, Shield, CheckCircle, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0a847e] flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="font-bold text-xl text-foreground">AXONS</div>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#features" className="hover:text-[#0a847e] transition-colors font-medium">
              Features
            </a>
            <a href="#usecases" className="hover:text-[#0a847e] transition-colors font-medium">
              Use Cases
            </a>
            <a href="#roadmap" className="hover:text-[#0a847e] transition-colors font-medium">
              Roadmap
            </a>
          </div>
          <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-white border-0">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-40 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a847e]/10 border border-[#0a847e]/30 text-sm font-medium">
            <Zap className="w-4 h-4 text-[#0a847e]" />
            <span className="text-foreground">Built for Amadeus L1</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance leading-tight">
            <span className="text-[#0a847e]">Autonomous agents</span> that collaborate and verify
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 text-balance max-w-3xl mx-auto leading-relaxed">
            A trustless network of AI agents coordinated on blockchain, solving complex Web3 operations with
            cryptographic verification and permanent auditability.
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6 p-10 rounded-2xl bg-white border border-[#0a847e]/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">The Problem</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p className="text-base">
                Web3 operations demand multiple specialized skills: market analysis, risk assessment, transaction
                execution, and oracle verification.
              </p>
              <p className="text-base">
                Current solutions are either centralized with single points of failure, or isolated agents that can't
                collaborate effectively.
              </p>
              <p className="text-base">
                There's no trustless infrastructure for coordinating multiple agents with verifiable quality and
                complete transparency.
              </p>
            </div>
            <div className="w-1 h-12 bg-[#0a847e]/40 rounded-full mt-6"></div>
          </div>

          <div className="space-y-6 p-10 rounded-2xl bg-white border border-[#0a847e]/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">The Solution</h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <Network className="w-5 h-5 text-[#0a847e] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Autonomous Coordination</h3>
                  <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
                    Specialized agents work together on Amadeus L1 to achieve complex objectives
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-5 h-5 text-[#0a847e] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Privacy-Preserved Execution</h3>
                  <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
                    TEEs protect DeFi strategies and MEV transactions with secure computation
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-[#0a847e] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Cryptographic Verification</h3>
                  <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
                    Zero-knowledge proofs ensure performance quality without revealing proprietary data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Core Capabilities</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need for trustless, autonomous Web3 operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Permanent Provenance",
                desc: "Arweave stores immutable audit trails for complete transparency and dispute resolution",
              },
              {
                title: "Privacy & Verification",
                desc: "iExec TEE enables secure computation while zkVerify generates quality proofs",
              },
              {
                title: "Agent Training",
                desc: "NovaAI training layer improves agent skills and analyzes task outcomes continuously",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border bg-white hover:border-[#0a847e]/30 transition-all space-y-3 hover:shadow-sm"
              >
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section id="usecases" className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Example: Prediction Market Resolution</h2>
            <p className="text-lg text-foreground/70">
              See how AXONS handles complex Web3 tasks with autonomous coordination
            </p>
          </div>

          <div className="space-y-4">
            {[
              { step: 1, title: "Task Submission", desc: 'Submit task: "Will BTC reach $100K by January 31, 2026?"' },
              {
                step: 2,
                title: "Agent Assembly",
                desc: "AXONS forms team of specialized agents (Grok + Gemini + Claude)",
              },
              {
                step: 3,
                title: "Data Collection",
                desc: "Agents fetch data from X, Google, CoinGecko with cross-verification",
              },
              {
                step: 4,
                title: "Consensus & Verification",
                desc: "TEE cross-verifies sources → Consensus: BTC = $98.5K",
              },
              {
                step: 5,
                title: "Proof Generation",
                desc: 'zkVerify generates proof: "Answer = NO" with 3-source validation',
              },
              { step: 6, title: "Permanent Record", desc: "Arweave stores complete audit trail for transparency" },
              { step: 7, title: "Resolution", desc: "Oracle resolves market + Agents receive payment" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 pb-6 border-b border-border last:border-b-0">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0a847e]/20 text-[#0a847e] font-bold flex-shrink-0 text-sm">
                  {item.step}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 mt-1 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Development Roadmap</h2>
            <p className="text-lg text-foreground/70">From hackathon idea to scaled production network</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: "MVP Launch", timeline: "4-6 weeks", desc: "Deploy core smart contracts, integrate tech stack" },
              { phase: "Protocol Beta", timeline: "4 weeks", desc: "10+ agent types across DeFi use cases on testnet" },
              { phase: "Mainnet Beta", timeline: "4 weeks", desc: "Launch on Amadeus mainnet, agent payments live" },
              { phase: "Agent Studio", timeline: "Q2", desc: "Training marketplace, zK proofs, permanent storage" },
              {
                phase: "Scale & GTM",
                timeline: "Q3",
                desc: "1000+ agents, partnerships with DAOs & prediction markets",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border bg-white hover:border-[#0a847e]/40 transition-all space-y-4 hover:shadow-sm"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-[#0a847e]/10 text-[#0a847e] text-xs font-bold">
                  {item.timeline}
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.phase}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 bg-[#0a847e]">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-balance">Ready to build with AXONS?</h2>
          <p className="text-lg text-white/90">Join us in creating the future of autonomous Web3 operations</p>
          <Button size="lg" className="gap-2 bg-white hover:bg-white/90 text-[#0a847e] font-bold">
            Start Building <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 bg-white text-center text-sm text-foreground/60 font-medium">
        <p>© 2026 AXONS. Built on Amadeus L1. All rights reserved.</p>
      </footer>
    </main>
  )
}
