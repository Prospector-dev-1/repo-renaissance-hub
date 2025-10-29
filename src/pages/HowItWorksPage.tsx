export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white" style={{ paddingTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How it Works</h1>
        <p className="text-lg text-white/70 mb-12 max-w-4xl">
          Fishtank aligns <strong>Innovators</strong>, <strong>Creators</strong>, and <strong>Investors</strong> with a simple milestone engine. Submit your idea, get matched, build transparently, and unlock capital as you ship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">1) Apply</h2>
            <p className="text-white/60">Submit your innovation (idea, goal, optional deck). Your submission stays private during review.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">2) Review</h2>
            <p className="text-white/60">Our team reviews for originality, feasibility, and founder commitment. We accept a limited cohort for quality.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">3) Match</h2>
            <p className="text-white/60">We introduce investors and creators with the right domain fit and availability.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">4) Plan</h2>
            <p className="text-white/60">Define milestones with scope, acceptance criteria, and artifacts (designs, repo, analytics).</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">5) Execute</h2>
            <p className="text-white/60">Creators ship; Innovators give feedback; Investors monitor. Escrow releases on acceptance.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">6) Scale</h2>
            <p className="text-white/60">Hit traction gates to unlock follow‑on capital, expand the team, and prepare for public launch.</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who talks to whom?</h2>
          <p className="text-white/60 mb-6">
            The diagram shows typical flows. Innovators define the roadmap and milestones. Creators deliver artifacts to meet acceptance, while Investors fund milestone tranches and mentor founders. Everyone sees the same progress dashboard.
          </p>
          
          <div className="flex justify-center">
            <svg width="800" height="360" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl" aria-label="Communication between Innovators, Creators, and Investors">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4FC3F7"/>
                  <stop offset="100%" stopColor="#29F19C"/>
                </linearGradient>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L6,3 z" fill="#4FC3F7"/>
                </marker>
              </defs>
              <rect x="40" y="120" rx="14" ry="14" width="180" height="120" fill="rgba(255,255,255,0.06)" stroke="#4FC3F7"/>
              <text x="130" y="160" textAnchor="middle" fill="#E8EDF5" fontSize="16" fontFamily="Inter" fontWeight="700">Innovators</text>
              <text x="130" y="186" textAnchor="middle" fill="#A5AFBF" fontSize="12" fontFamily="Inter">Ideas • Roadmap • IP</text>

              <rect x="310" y="40" rx="14" ry="14" width="180" height="120" fill="rgba(255,255,255,0.06)" stroke="#7C4DFF"/>
              <text x="400" y="80" textAnchor="middle" fill="#E8EDF5" fontSize="16" fontFamily="Inter" fontWeight="700">Creators</text>
              <text x="400" y="106" textAnchor="middle" fill="#A5AFBF" fontSize="12" fontFamily="Inter">Build • Design • Growth</text>

              <rect x="580" y="120" rx="14" ry="14" width="180" height="120" fill="rgba(255,255,255,0.06)" stroke="#29F19C"/>
              <text x="670" y="160" textAnchor="middle" fill="#E8EDF5" fontSize="16" fontFamily="Inter" fontWeight="700">Investors</text>
              <text x="670" y="186" textAnchor="middle" fill="#A5AFBF" fontSize="12" fontFamily="Inter">Capital • Mentoring</text>

              <path d="M220 180 C 280 140, 320 120, 310 100" stroke="url(#g1)" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
              <path d="M490 100 C 520 120, 560 140, 580 160" stroke="url(#g1)" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
              <path d="M580 200 C 520 220, 460 240, 400 220" stroke="url(#g1)" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
              <path d="M310 220 C 280 210, 240 200, 220 200" stroke="url(#g1)" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>

              <circle cx="400" cy="300" r="6" fill="#4FC3F7"/><text x="415" y="304" fill="#A5AFBF" fontSize="12">Milestones & Artifacts</text>
              <circle cx="560" cy="300" r="6" fill="#29F19C"/><text x="575" y="304" fill="#A5AFBF" fontSize="12">Capital Releases</text>
            </svg>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-3">
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">What happens after I submit?</summary>
              <p className="mt-2 text-white/60">We manually review your application. If accepted, you'll be added to the beta pool and matched within days.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Do I have to use escrow?</summary>
              <p className="mt-2 text-white/60">Yes, during beta. It protects both parties and keeps incentives aligned.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Can I bring my own team or investor?</summary>
              <p className="mt-2 text-white/60">Yes—Fishtank can work with your team and still provide structure, milestones, and transparency.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

