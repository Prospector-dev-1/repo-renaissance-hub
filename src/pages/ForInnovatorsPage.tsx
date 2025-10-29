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
                Scale your startup with
                <br />
                capital and talent
              </h1>

              <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                If you have a working product and need funding or a team to scale, join our waitlist. 
                We verify your startup is legitimate, then connect you with investors and top creators.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/apply">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] hover:opacity-90 transition-opacity rounded-2xl px-8"
                  >
                    Join Waitlist
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
            <h2 className="text-4xl md:text-5xl mb-4">How it works</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Simple verification, then join the waitlist
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Submit your startup",
                description: "Show us your product, traction data, and funding goals.",
                color: "#4FC3F7",
              },
              {
                step: "2",
                title: "Verification review",
                description: "We verify your startup is legitimate (not a phony submission).",
                color: "#7C4DFF",
              },
              {
                step: "3",
                title: "Join the waitlist",
                description: "Once verified, you join our waitlist to access the platform.",
                color: "#4FC3F7",
              },
              {
                step: "4",
                title: "Get matched",
                description: "We introduce investors & creators when spots open up.",
                color: "#7C4DFF",
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

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
              <span className="text-sm text-white/70">Verification within ~48 hours</span>
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
              <h2 className="text-4xl md:text-5xl mb-4">Your startup submission</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              What we need to evaluate your startup
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Working product",
                  description: "A functioning product or MVP with real users or early traction.",
                  color: "#4FC3F7",
                },
                {
                  icon: Video,
                  title: "Product demo",
                  description: "60–120s walkthrough showing your product in action (not a prototype).",
                  color: "#7C4DFF",
                },
                {
                  icon: FileText,
                  title: "Traction data",
                  description: "User metrics, revenue, or other proof of product-market fit.",
                  color: "#4FC3F7",
                },
                {
                  icon: Rocket,
                  title: "Growth plan",
                  description: "Clear milestones for scaling with identified resource needs.",
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
                We're looking for startups that have <em className="text-[#4FC3F7]">validated product-market fit</em>, <em className="text-[#7C4DFF]">real traction or users</em>, and <em className="text-[#4FC3F7]">clear scaling potential</em>.
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
                  Ready to scale your
                  <br />
                  <span className="bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] bg-clip-text text-transparent">
                    startup?
                  </span>
                </h2>

                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
                  Join a select group of startups with validated products ready to scale.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/apply">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] hover:opacity-90 transition-opacity rounded-2xl px-10"
                    >
                      Join Waitlist
                    </Button>
                  </Link>
                </div>

                <p className="mt-8 text-sm text-white/40">
                  Working product required • Free to join • Verification in 48 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
  );
}
