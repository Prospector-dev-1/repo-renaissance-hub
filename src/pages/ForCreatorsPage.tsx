import { Link } from "react-router-dom";

export default function ForCreatorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white" style={{ paddingTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">For Creators</h1>
        <p className="text-lg text-white/70 mb-12 max-w-4xl">
          Work on real startups before they launch. Choose projects that match your skills, earn <strong>cash</strong>, <strong>equity</strong>, or <strong>commission</strong>, and build a portfolio with verified outcomes and milestone-linked payouts.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who are Creators?</h2>
          <p className="text-white/70 mb-6">Creators are the builders who turn ideas into products and growth. If you can design, code, write, market, sell, analyze, or ship—there's a seat for you in the tank.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Engineering & Product</h3>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Frontend Engineer (React/Next)</li>
                <li>Backend Engineer (Node/Python)</li>
                <li>Mobile Dev (React Native/Flutter)</li>
                <li>Full‑stack Engineer</li>
                <li>Product Manager / Product Owner</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Design & Content</h3>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Product Designer (UI/UX)</li>
                <li>Brand/Visual Designer</li>
                <li>Motion/Video Editor</li>
                <li>Content Writer / Technical Writer</li>
                <li>No‑code Builder (Framer/Webflow)</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Growth & Ops</h3>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Growth Marketer / Performance Ads</li>
                <li>SEO/Content Marketer</li>
                <li>Community & Social Manager</li>
                <li>Sales / SDR / Partnerships</li>
                <li>Data Analyst / RevOps</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 px-3 py-2 inline-block border border-white/10 rounded-full text-white/70">
            You can also propose a specialty—legal ops, compliance, localization, support engineering, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">No upfront costs</h2>
            <p className="text-white/70">You never have to spend your own money to start. Projects are funded by innovators and/or investors. You focus on shipping; payouts are released from <strong>escrow</strong> when milestones are approved.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Only 5% platform commission</h2>
            <p className="text-white/70 mb-4">We only earn when you earn: a flat <strong>5% commission</strong> on approved milestone payouts. Comparable freelancing apps charge around <strong>20%</strong>—that's <strong>75% less</strong> in platform fees for you.</p>
            <div className="overflow-hidden border border-white/10 rounded-xl">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="p-3 bg-white/5 text-left border-b border-white/10">Platform</th>
                    <th className="p-3 bg-white/5 text-left border-b border-white/10">Creator fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-white/10">Fishtank</td>
                    <td className="p-3 border-b border-white/10"><strong>5%</strong></td>
                  </tr>
                  <tr>
                    <td className="p-3">Typical freelance marketplace</td>
                    <td className="p-3">~20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-white/50">Calculation: (20% − 5%) ÷ 20% = 75% less.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">How you can get paid</h2>
            <div className="overflow-hidden border border-white/10 rounded-xl mb-4">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="p-3 bg-white/5 text-left border-b border-white/10">Model</th>
                    <th className="p-3 bg-white/5 text-left border-b border-white/10">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-white/10"><strong>Cash</strong></td>
                    <td className="p-3 border-b border-white/10">Fixed milestone fees released from escrow when work is approved.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10"><strong>Equity</strong></td>
                    <td className="p-3 border-b border-white/10">Equity grants that vest upon milestone acceptance (standard IP & contributor agreements apply).</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10"><strong>Cash + Equity</strong></td>
                    <td className="p-3 border-b border-white/10">A hybrid structure—smaller cash now plus aligned upside.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10"><strong>Commission</strong></td>
                    <td className="p-3 border-b border-white/10">Performance pay tied to measurable outcomes (e.g., ad ROAS, qualified leads, or closed sales).</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10"><strong>Success Bonus</strong></td>
                    <td className="p-3 border-b border-white/10">One‑time bonus when a major milestone is achieved (e.g., MVP launch, first 1k users).</td>
                  </tr>
                  <tr>
                    <td className="p-3"><strong>Retainer</strong></td>
                    <td className="p-3">Ongoing monthly support with pre‑defined deliverables and review checkpoints.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/70">All models are protected by milestone scopes, acceptance criteria, and transparent timelines.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Why creators love Fishtank</h2>
            <ul className="list-disc list-inside space-y-3 text-white/70 mb-6">
              <li>Work with vetted founders and investors—no flaky gigs.</li>
              <li>Milestone clarity: scope, success criteria, and artifacts defined upfront.</li>
              <li>Escrow and audit trail de‑risk your time.</li>
              <li>Portfolio proof—deliverables are verifiable, not just "trust me".</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/apply" className="px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#29F19C] text-[#0a0a1a] font-bold rounded-xl">
                Apply to Beta
              </Link>
              <Link to="/investors" className="px-6 py-3 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                See how investors track work
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Invest with zero dollars (sweat equity)</h2>
          <p className="text-white/70 mb-4">
            If you want upside, you can choose to be paid partly or entirely in <strong>equity</strong>. That means you're effectively investing your time instead of cash—owning a piece of what you help build.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
            <li>Hybrid offers (cash + equity) keep you liquid while building long‑term value.</li>
            <li>Equity terms are standardized, with clear vesting and cliff tied to milestones.</li>
            <li>Your equity is recorded alongside milestone approvals for a clean paper trail.</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link to="/apply" className="px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#29F19C] text-[#0a0a1a] font-bold rounded-xl">
              Apply as a Creator
            </Link>
            <Link to="/investors" className="px-6 py-3 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              See investor safeguards
            </Link>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-3">
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Can I choose cash or equity?</summary>
              <p className="mt-2 text-white/60">Yes. Each milestone has a pay model. You can propose cash, equity, hybrid, or commission, depending on role and goals.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">How do I track approval?</summary>
              <p className="mt-2 text-white/60">Every milestone has acceptance criteria. Once approved, escrow releases automatically.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">Can I work part‑time?</summary>
              <p className="mt-2 text-white/60">Absolutely. Many creators contribute 5–20 hours/week across 1–2 projects.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold cursor-pointer">What about IP?</summary>
              <p className="mt-2 text-white/60">Innovators own IP; you license or assign contributions per standard contributor agreements.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

