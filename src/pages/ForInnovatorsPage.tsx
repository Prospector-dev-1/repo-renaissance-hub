import { Link } from "react-router-dom";

export default function ForInnovatorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white" style={{ paddingTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">For Innovators</h1>
        <p className="text-lg text-white/70 mb-12 max-w-4xl">
          Turn your concept into a company. Apply to the private beta, get reviewed, and—if accepted—match with investors and a vetted build team. We're selecting a limited cohort to maximize outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Not everyone can join (here's the process)</h2>
            <ol className="list-decimal list-inside space-y-3 mb-4 text-white/70">
              <li><strong className="text-white">Submit your innovation:</strong> Brief description + goal + optional deck.</li>
              <li><strong className="text-white">Manual review:</strong> We evaluate originality, feasibility, and founder commitment.</li>
              <li><strong className="text-white">Acceptance decision:</strong> If accepted, you'll enter the beta pool; otherwise you receive feedback.</li>
              <li><strong className="text-white">Matching:</strong> We introduce investors & creators aligned with your domain and needs.</li>
              <li><strong className="text-white">Execution:</strong> Milestones, escrow, and dashboards keep everyone accountable.</li>
            </ol>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full border border-white/10 text-sm">Private beta: 50 innovators only</span>
              <span className="px-3 py-1 rounded-full border border-white/10 text-sm">Response in ~48 hours</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">What you'll get</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70 mb-6">
              <li>Curated intros to angels/micro‑funds relevant to your space.</li>
              <li>Bench of creators (engineering, design, growth) ready to ship.</li>
              <li>Milestone templates for MVP, pilots, and GTM sprints.</li>
              <li>IP protection and private repos; contributor agreements baked in.</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/apply" className="px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#29F19C] text-[#0a0a1a] font-bold rounded-xl">
                Apply to Beta
              </Link>
              <Link to="/how-it-works" className="px-6 py-3 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                See how it works
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Your submission package</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70 mb-4">
              <li><strong className="text-white">Pitch summary:</strong> problem, solution, target user, why now (3–6 bullets).</li>
              <li><strong className="text-white">Demo video (60–120s):</strong> screen capture or prototype walk-through showing the core value.</li>
              <li><strong className="text-white">Evidence:</strong> links to Figma, repo, mock data, or early analytics (optional but powerful).</li>
              <li><strong className="text-white">Milestone plan:</strong> 2–4 milestones with acceptance criteria and "done" proof.</li>
            </ul>
            <p className="text-white/60">Keep it simple. Investors want to quickly see <em>what it does</em>, <em>who it's for</em>, and <em>how you'll prove progress</em>.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">How investors see your pitch</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70 mb-4">
              <li>Your project appears as a <strong className="text-white">card</strong> with title, space, tags, and match signals.</li>
              <li>When opened, investors see the <strong className="text-white">demo video</strong> first, followed by the summary and milestone plan.</li>
              <li>Standardized tabs: <strong className="text-white">Overview</strong>, <strong className="text-white">Milestones</strong>, <strong className="text-white">Artifacts</strong>, <strong className="text-white">Team</strong>, <strong className="text-white">Updates</strong>.</li>
              <li>They can mark <strong className="text-white">Interest</strong>, send <strong className="text-white">questions</strong>, or place a soft <strong className="text-white">commit</strong> tied to milestones.</li>
            </ul>
            <p className="text-white/60">Uploads are private to verified investors and reviewers during beta; NDAs may be required for sensitive artifacts.</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-3">
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Do I need a full deck?</summary>
              <p className="mt-2 text-white/60">No. A short pitch is fine. A deck helps reviewers move faster.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Will I give up equity?</summary>
              <p className="mt-2 text-white/60">Only if you opt for equity‑based creator compensation or fundraising; you retain IP ownership.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">What if I'm rejected?</summary>
              <p className="mt-2 text-white/60">We'll send feedback. You can reapply after major updates or traction.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

