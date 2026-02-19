import { Navbar } from '@/components/layout/navbar'
import { FooterNew } from '@/components/sections/footer-new'
import Link from 'next/link'

export const metadata = {
  title: 'Refund Policy | Ritman Digital Marketing',
  description: 'Refund policy for Ritman Digital Marketing services',
}

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32">
        <div className="section-container">
          <div className="max-width-container">
            <Link href="/" className="text-blue-400 hover:text-cyan-400 mb-8 inline-block">
              ← Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Refund Policy
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <section className="p-4 bg-blue-500/10 border border-blue-400/20 rounded-lg mb-6">
                <p className="text-slate-300 font-semibold">
                  Key Point: Refunds are only available if the promotional service has NOT been initiated. Once campaign execution begins, refunds are not applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Service Nature</h2>
                <p className="text-slate-400 leading-relaxed">
                  Ritman Digital Marketing provides digital marketing and promotional services that are performance-dependent and subjective. These are professional services where results cannot be guaranteed and vary based on multiple factors including market conditions, competition, audience engagement, and campaign implementation quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Refund Eligibility - Service NOT Initiated</h2>
                <p className="text-slate-400 leading-relaxed">
                  Refunds are ONLY available if the service has NOT been initiated. Once campaign execution, promotional activities, or service delivery has begun in any form, refunds are not available. This ensures we can properly allocate resources and maintain service quality standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Request Process</h2>
                <p className="text-slate-400 leading-relaxed">
                  To request a refund, you must contact support@ritmandigital.com within 7 days of purchase with proof of payment. Refund requests after this period will not be considered.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Results May Vary - No Performance Refunds</h2>
                <p className="text-slate-400 leading-relaxed">
                  Refunds are not provided based on campaign performance, ROI, or results achieved. Results may vary depending on campaign scope, market conditions, target audience, platform changes, and external factors beyond our control. Clients are responsible for setting realistic expectations in consultation with our team. Campaign performance depends on multiple variables outside our direct control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation Policy</h2>
                <p className="text-slate-400 leading-relaxed">
                  If you wish to cancel a service after it has started, cancellation fees may apply depending on the stage of execution. Any cancellation must be submitted in writing to support@ritmandigital.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Service Modifications</h2>
                <p className="text-slate-400 leading-relaxed">
                  We reserve the right to modify our services or pricing with 30 days notice. Service modifications made during your campaign will be communicated in advance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Force Majeure</h2>
                <p className="text-slate-400 leading-relaxed">
                  We are not responsible for service delays or failures caused by circumstances beyond our control, including platform changes, policy updates, or technical issues beyond our reasonable control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Dispute Resolution</h2>
                <p className="text-slate-400 leading-relaxed">
                  Any disputes regarding refunds or services should be resolved through communication with our support team. We are committed to working with clients to address concerns fairly and professionally.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                <p className="text-slate-400 leading-relaxed">
                  For refund inquiries or disputes, please contact: support@ritmandigital.com. Include your order number and detailed explanation of your request.
                </p>
              </section>
            </div>

            <p className="text-slate-500 text-sm mt-12 pt-8 border-t border-white/10">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
      <FooterNew />
    </>
  )
}
