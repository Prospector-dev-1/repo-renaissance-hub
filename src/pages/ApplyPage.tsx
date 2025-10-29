import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeading } from "../components/PageHeading";
import { Section } from "../components/Section";
import { ContentCard } from "../components/ContentCard";
import { Button } from "../components/ui/button";

type Role = "investor" | "innovator" | "creator";

interface Field {
  key: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

const fieldsByRole: Record<Role, Field[]> = {
  creator: [
    { key: "email", label: "Email", type: "email", required: true },
    { key: "name", label: "Full Name", type: "text", required: true },
    { key: "phone", label: "Phone Number", type: "tel", required: true },
    { key: "skill", label: "Primary Skill", type: "text", required: true, placeholder: "e.g., Frontend, Video, Growth" },
    { key: "website", label: "Website / Portfolio (optional)", type: "url", required: false },
  ],
  investor: [
    { key: "email", label: "Email", type: "email", required: true },
    { key: "name", label: "Full Name", type: "text", required: true },
    { key: "phone", label: "Phone Number", type: "tel", required: true },
    { key: "vcfirm", label: "VC Firm?", type: "select", options: ["Yes", "No"], required: true },
    { key: "website", label: "Website (optional)", type: "url", required: false },
  ],
  innovator: [
    { key: "email", label: "Email", type: "email", required: true },
    { key: "name", label: "Full Name", type: "text", required: true },
    { key: "phone", label: "Phone Number", type: "tel", required: true },
    { key: "building", label: "What are you building?", type: "textarea", required: true },
    { key: "website", label: "Website or Demo (optional)", type: "url", required: false },
    { key: "deck", label: "Pitch Deck (link)", type: "url", required: false },
    { key: "stage", label: "Stage", type: "select", options: ["Early Stage", "MVP", "Beta", "Launched", "Scaling"], required: true },
  ],
};

export default function ApplyPage() {
  const [role, setRole] = useState<Role>("investor");
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const missingFields = fieldsByRole[role]
      .filter((f) => f.required && !formData[f.key])
      .map((f) => f.label);
    
    if (missingFields.length > 0) {
      alert("Please fill: " + missingFields.join(", "));
      return;
    }
    
    alert(`Thanks! You joined the waitlist as ${role.charAt(0).toUpperCase() + role.slice(1)}. We'll be in touch.`);
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const renderField = (field: Field) => {
    const id = `field_${field.key}`;
    
    if (field.type === "select") {
      return (
        <div key={field.key}>
          <label htmlFor={id} className="block text-white/70 font-semibold mb-2">
            {field.label}
          </label>
          <select
            id={id}
            name={field.key}
            required={field.required}
            value={formData[field.key] || ""}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white"
          >
            <option value="">Select...</option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt.toLowerCase()}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      );
    }
    
    if (field.type === "textarea") {
      return (
        <div key={field.key}>
          <label htmlFor={id} className="block text-white/70 font-semibold mb-2">
            {field.label}
          </label>
          <textarea
            id={id}
            name={field.key}
            required={field.required}
            value={formData[field.key] || ""}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white min-h-[120px] resize-y"
          />
        </div>
      );
    }
    
    return (
      <div key={field.key}>
        <label htmlFor={id} className="block text-white/70 font-semibold mb-2">
          {field.label}
        </label>
        <input
          id={id}
          name={field.key}
          type={field.type}
          required={field.required}
          placeholder={field.placeholder}
          value={formData[field.key] || ""}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white"
        />
      </div>
    );
  };

  const fields = fieldsByRole[role];

  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeading
          title="Join the Fishtank Waitlist"
          subtitle="Tell us who you are. We'll tailor the form and keep you in the loop."
        />
        
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setRole("investor")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              role === "investor"
                ? "border-[#4FC3F7] bg-[#4FC3F7]/20"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            Investor
          </button>
          <button
            onClick={() => setRole("innovator")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              role === "innovator"
                ? "border-[#4FC3F7] bg-[#4FC3F7]/20"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            Innovator
          </button>
          <button
            onClick={() => setRole("creator")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              role === "creator"
                ? "border-[#4FC3F7] bg-[#4FC3F7]/20"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            Creator
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <ContentCard className="mb-6 space-y-4">
            {fields.map((field) => renderField(field))}
          </ContentCard>

          <div className="flex flex-wrap gap-3">
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] hover:opacity-90 transition-opacity rounded-xl"
            >
              Join Waitlist
            </Button>
            <Link to="/">
              <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-xl">
                Back to Home
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </Section>
  );
}
