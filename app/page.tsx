export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop guessing which Stripe charges are{' '}
          <span className="text-[#58a6ff]">tax deductible</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          InvoiceSort connects to your Stripe account and automatically categorizes every transaction — software, hardware, subscriptions, and more — then exports clean reports for your accountant.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Stripe Connect', 'AI Categorization', 'CSV Export', 'QuickBooks Ready', 'Tax-ready Reports'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to stay tax-ready</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Stripe transaction sync',
              'AI-powered category detection',
              'CSV &amp; QuickBooks export',
              'Deduction summary dashboard',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does InvoiceSort connect to Stripe?</h3>
            <p className="text-[#8b949e] text-sm">We use Stripe Connect to securely read your transaction history. We never store your Stripe secret keys — only the OAuth token needed to fetch invoices and charges.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the AI categorization?</h3>
            <p className="text-[#8b949e] text-sm">Our OpenAI-powered engine achieves over 90% accuracy on common freelancer expenses. You can always review and override any category before exporting.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} InvoiceSort. All rights reserved.
      </footer>
    </main>
  )
}
