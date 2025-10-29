import { Link } from "react-router-dom";

export default function ForInvestorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white" style={{ paddingTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">For Investors</h1>
        <p className="text-lg text-white/70 mb-12 max-w-4xl">
          Access reviewed early‑stage projects with transparent execution. Fund against milestones, monitor progress, and double down when traction proves out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">What you'll see</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70">
              <li>Standardized pitch overview and problem/solution snapshot.</li>
              <li>Execution plan split into milestones with clear acceptance criteria.</li>
              <li>Artifacts and evidence at each step (designs, repos, demos, analytics).</li>
              <li>Signals: velocity, on‑time rate, acceptance rate, and user traction.</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Funding models</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70">
              <li><strong className="text-white">Milestone tranches:</strong> Release capital when work is accepted.</li>
              <li><strong className="text-white">Escrow protection:</strong> Funds held until criteria met.</li>
              <li><strong className="text-white">Follow‑on:</strong> Optional additional capital after predefined traction.</li>
              <li><strong className="text-white">Syndicates:</strong> Co‑invest with other verified investors.</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#29F19C] text-[#0a0a1a] font-bold rounded-xl cursor-pointer">
                Request verification
              </button>
              <Link to="/" className="px-6 py-3 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                Go to main page
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Evaluate faster with a standardized viewer</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70">
              <li><strong className="text-white">Hero pane:</strong> 60–120s demo video, quick tags, and traction badges.</li>
              <li><strong className="text-white">Milestones:</strong> scope, acceptance criteria, due dates, and required artifacts.</li>
              <li><strong className="text-white">Artifacts:</strong> design links, repo snapshots, Looms, analytics screenshots—timestamped for auditability.</li>
              <li><strong className="text-white">Signals:</strong> build velocity, on‑time rate, acceptance rate, and user metrics if enabled.</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Actions you can take</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70 mb-4">
              <li><strong className="text-white">Filter & Sort:</strong> by space, stage, velocity, and milestone risk.</li>
              <li><strong className="text-white">Ask & Track:</strong> post questions, request missing artifacts, subscribe to updates.</li>
              <li><strong className="text-white">Commit by milestone:</strong> stage capital per tranche; escrow releases on acceptance.</li>
              <li><strong className="text-white">Calendar & Messages:</strong> schedule calls, keep diligence threads attached to the project.</li>
            </ul>
            <p className="text-white/60">Optional NDAs for sensitive materials; access is limited to verified investor accounts during beta.</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-3">
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Who can invest?</summary>
              <p className="mt-2 text-white/60">Angels, micro‑funds, and syndicates during beta. KYC/verification required.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">How do I evaluate execution?</summary>
              <p className="mt-2 text-white/60">Milestone artifacts and standardized metrics provide a comparable dataset across projects.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Fees?</summary>
              <p className="mt-2 text-white/60">Beta is free. Pricing for post‑beta will be announced prior to public launch.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

