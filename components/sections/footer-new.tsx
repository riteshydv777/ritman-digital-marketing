import Link from 'next/link'

export function FooterNew() {
  return (
    <footer className="bg-[#020817] text-slate-400 pt-16 pb-8">
      <div className="max-width-container px-6">

        {/* Service Disclaimer */}
        <div className="glass-effect p-6 rounded-xl mb-12 text-center">
          <h3 className="text-white font-semibold mb-2">
            Service Disclaimer
          </h3>
          <p className="text-sm">
            All services are provided for promotional and marketing purposes only.
            Results may vary depending on campaign scope and market conditions.
            Refunds apply only if the service has not been initiated.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Ritman Digital
            </h3>
            <p>
              Professional digital marketing and promotional services
              for businesses and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <p className="mb-2">
              📧 support@ritmandigital.com
            </p>

            <p className="mb-2">
              📞 <a
                href="tel:+918882509708"
                className="hover:text-white transition"
              >
                +91 88825 09708
              </a>
            </p>

            <p>
              Available for consultations 24/7
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>
            © 2026 Ritman Digital Marketing. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
