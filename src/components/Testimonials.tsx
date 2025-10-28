import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, HealthTech Startup",
    image: "https://images.unsplash.com/photo-1690383921891-3f0a7567d815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHRlYW18ZW58MXx8fHwxNzYxNTA1MDI3fDA&ixlib=rb-4.1.0&q=80&w=400",
    quote: "Fishtank connected me with the perfect team and investors in under two weeks. What would've taken months happened in days.",
    highlight: "aqua",
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer, AI Platform",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE0NTkxODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    quote: "As a creator, I love working on meaningful projects. Fishtank gives me access to vetted opportunities I'd never find elsewhere.",
    highlight: "violet",
  },
  {
    name: "Jessica Park",
    role: "Angel Investor",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYxNTQ1OTQxfDA&ixlib=rb-4.1.0&q=80&w=400",
    quote: "The quality of deal flow on Fishtank is exceptional. I've invested in three companies through the platform, all performing above expectations.",
    highlight: "aqua",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];
  const accentColor = current.highlight === "aqua" ? "#4FC3F7" : "#7C4DFF";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]" />

      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        animate={{
          background: [
            "radial-gradient(circle, #4FC3F7 0%, transparent 70%)",
            "radial-gradient(circle, #7C4DFF 0%, transparent 70%)",
            "radial-gradient(circle, #4FC3F7 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Trusted by innovators</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            See what our community has to say
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="relative"
          >
            {/* Quote icon */}
            <div className="absolute -top-8 -left-4 md:-left-12">
              <Quote
                className="w-16 h-16 opacity-20"
                style={{ color: accentColor }}
              />
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                "{current.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${current.image})`,
                    border: `2px solid ${accentColor}`,
                  }}
                />
                <div>
                  <p className="text-white">{current.name}</p>
                  <p className="text-white/50 text-sm">{current.role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="w-12 h-12 rounded-xl hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: index === currentIndex ? accentColor : "#ffffff40",
                    width: index === currentIndex ? "24px" : "8px",
                  }}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="w-12 h-12 rounded-xl hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
