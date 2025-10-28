import { motion } from "motion/react";
import { Lightbulb, Palette, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const personas = [
  {
    icon: Lightbulb,
    title: "Innovators",
    description: "Have a game-changing idea but need resources to make it real?",
    features: [
      "Submit your innovation pitch",
      "Get matched with investors & creators",
      "Retain creative control",
      "Access mentorship & guidance",
    ],
    gradient: "from-[#4FC3F7] to-[#2196F3]",
    accentColor: "#4FC3F7",
  },
  {
    icon: Palette,
    title: "Creators",
    description: "Build meaningful projects with talented teams and solid funding.",
    features: [
      "Browse vetted opportunities",
      "Work on cutting-edge ideas",
      "Collaborate with top talent",
      "Get paid for your craft",
    ],
    gradient: "from-[#7C4DFF] to-[#651FFF]",
    accentColor: "#7C4DFF",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Back high-potential ideas before they hit the mainstream.",
    features: [
      "Curated deal flow",
      "Early-stage opportunities",
      "Direct access to innovators",
      "Portfolio support",
    ],
    gradient: "from-[#4FC3F7] to-[#7C4DFF]",
    accentColor: "#4FC3F7",
  },
];

export function PersonaCards() {
  return (
    <section id="personas" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Built for three types of people</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Whether you're creating, building, or investing — Fishtank brings you together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {personas.map((persona, index) => (
          <motion.div
            key={persona.title}
            id={`persona-${persona.title.toLowerCase()}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12 }}
            className="group relative"
          >
    {/* Glow effect on hover */}
    <motion.div
      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
      style={{
        background: `linear-gradient(135deg, ${persona.accentColor}40, ${persona.accentColor}20)`,
      }}
    />


              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${persona.accentColor}30, ${persona.accentColor}10)`,
                    border: `1px solid ${persona.accentColor}50`,
                  }}
                >
                  <persona.icon className="w-8 h-8" style={{ color: persona.accentColor }} />
                </div>

                {/* Title and description */}
                <h3 className="text-2xl mb-4">{persona.title}</h3>
                <p className="text-white/60 mb-6">{persona.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {persona.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: persona.accentColor }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full group/btn hover:bg-white/10 rounded-xl"
                  asChild
                >
                  <a href={`/learn-more.html?tab=${persona.title.toLowerCase()}`} className="flex items-center justify-center w-full">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
