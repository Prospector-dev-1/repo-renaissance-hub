import { motion } from "motion/react";
import { TrendingUp, Users, Zap, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "2,500+",
    label: "Active Members",
    color: "#4FC3F7",
  },
  {
    icon: Zap,
    value: "340+",
    label: "Projects Funded",
    color: "#7C4DFF",
  },
  {
    icon: DollarSign,
    value: "$45M",
    label: "Total Invested",
    color: "#4FC3F7",
  },
  {
    icon: TrendingUp,
    value: "89%",
    label: "Success Rate",
    color: "#7C4DFF",
  },
];

const logos = [
  "TechCrunch",
  "Forbes",
  "Wired",
  "Fast Company",
  "The Verge",
  "Bloomberg",
];

export function SocialProof() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a1a]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${metric.color}30, ${metric.color}10)`,
                      border: `1px solid ${metric.color}40`,
                    }}
                  >
                    <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                  </div>
                </div>
                <div
                  className="text-4xl mb-2"
                  style={{
                    background: `linear-gradient(135deg, ${metric.color}, ${metric.color}CC)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {metric.value}
                </div>
                <p className="text-white/60 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured in logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/40 text-sm mb-8">Featured in</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-white/30 hover:text-white/60 transition-colors cursor-pointer text-xl"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#7C4DFF] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-white/90">Trusted & Secure Platform</p>
              <p className="text-xs text-white/50">Bank-level encryption & verification</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
