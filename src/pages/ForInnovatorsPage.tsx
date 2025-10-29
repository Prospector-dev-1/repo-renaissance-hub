import { motion } from "motion/react";
import { Lightbulb, Rocket, Users, Shield, Sparkles, CheckCircle, FileText, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function ForInnovatorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #4FC3F7 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #7C4DFF 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, #4FC3F7 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #4FC3F7 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
              >
                <Lightbulb className="w-4 h-4 text-[#4FC3F7]" />
                <span className="text-sm text-white/70">For Innovators</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-[#4FC3F7] to-[#7C4DFF] bg-clip-text text-transparent">
                Turn your concept into
                <br />
                a company
              </h1>

              <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                Apply to the private beta, get reviewed, and—if accepted—match with investors 
                and a vetted build team. We're selecting a limited cohort to maximize outcomes.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/apply">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] hover:opacity-90 transition-opacity rounded-2xl px-8"
                  >
                    Apply to Beta
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a1a]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4FC3F7] rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Not everyone can join</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Here's the process and what makes it different
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Submit your innovation",
                description: "Brief description + goal + optional deck.",
                color: "#4FC3F7",
              },
              {
                step: "2",
                title: "Manual review",
                description: "We evaluate originality, feasibility, and founder commitment.",
                color: "#7C4DFF",
              },
              {
                step: "3",
                title: "Acceptance decision",
                description: "If accepted, you'll enter the beta pool; otherwise you receive feedback.",
                color: "#4FC3F7",
              },
              {
                step: "4",
                title: "Matching",
                description: "We introduce investors & creators aligned with your domain and needs.",
                color: "#7C4DFF",
              },
              {
                step: "5",
                title: "Execution",
                description: "Milestones, escrow, and dashboards keep everyone accountable.",
                color: "#4FC3F7",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-8 flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 8px 32px ${item.color}40`,
                      color: item.color,
                    }}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-sm text-white/70">Private beta: 50 innovators only</span>
            </div>
            <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-sm text-white/70">Response in ~48 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">What you'll get</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Comprehensive support to bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Investor Connections",
                description: "Curated intros to angels/micro‑funds relevant to your space.",
                color: "#4FC3F7",
              },
              {
                icon: Users,
                title: "Creator Teams",
                description: "Bench of creators (engineering, design, growth) ready to ship.",
                color: "#7C4DFF",
              },
              {
                icon: FileText,
                title: "Milestone Templates",
                description: "Templates for MVP, pilots, and GTM sprints built-in.",
                color: "#4FC3F7",
              },
              {
                icon: Shield,
                title: "IP Protection",
                description: "IP protection and private repos; contributor agreements baked in.",
                color: "#7C4DFF",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`,
                  }}
                />
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                      border: `1px solid ${item.color}50`,
                    }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Package Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a1a]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Your submission package</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              What to include in your application
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Pitch summary",
                  description: "problem, solution, target user, why now (3–6 bullets).",
                  color: "#4FC3F7",
                },
                {
                  icon: Video,
                  title: "Demo video (60–120s)",
                  description: "Screen capture or prototype walk-through showing the core value.",
                  color: "#7C4DFF",
                },
                {
                  icon: Sparkles,
                  title: "Evidence",
                  description: "Links to Figma, repo, mock data, or early analytics (optional but powerful).",
                  color: "#4FC3F7",
                },
                {
                  icon: CheckCircle,
                  title: "Milestone plan",
                  description: "2–4 milestones with acceptance criteria and \"done\" proof.",
                  color: "#7C4DFF",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                      border: `1px solid ${item.color}50`,
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-white/60 max-w-2xl mx-auto">
                Keep it simple. Investors want to quickly see <em className="text-[#4FC3F7]">what it does</em>, <em className="text-[#7C4DFF]">who it's for</em>, and <em className="text-[#4FC3F7]">how you'll prove progress</em>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, #4FC3F730 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, #7C4DFF30 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, #4FC3F730 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#4FC3F7] rounded-full blur-[120px] opacity-20" />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
                >
                  <Lightbulb className="w-4 h-4 text-[#4FC3F7]" />
                  <span className="text-sm text-white/80">Ready to innovate?</span>
                </motion.div>

                <h2 className="text-4xl md:text-6xl mb-6">
                  Turn your idea into
                  <br />
                  <span className="bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] bg-clip-text text-transparent">
                    reality
                  </span>
                </h2>

                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
                  Join a select group of innovators building the next generation of breakthrough ideas.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/apply">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] hover:opacity-90 transition-opacity rounded-2xl px-10"
                    >
                      Apply to Beta
                    </Button>
                  </Link>
                </div>

                <p className="mt-8 text-sm text-white/40">
                  Limited spots available • Free to apply • Response in 48 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
