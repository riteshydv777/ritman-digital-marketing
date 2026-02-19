import { Navbar } from '@/components/layout/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { AboutUs } from '@/components/sections/about-us'
import { GettingStarted } from '@/components/sections/getting-started'
import { StatsNew } from '@/components/sections/stats-new'
import { ContactForm } from '@/components/sections/contact-form'
import { FooterNew } from '@/components/sections/footer-new'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <GettingStarted />
        <StatsNew />
        <ContactForm />
      </main>
      <FooterNew />
    </>
  )
}
