// app/(main)/[lang]/page.js - FINAL CORRECTED VERSION

import { getDictionary } from '@/lib/dictionary'
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Mission from '@/app/components/Mission'
import Features from '@/app/components/Features'
import Pricing from '@/app/components/Pricing'
import Gallery from '@/app/components/Gallery'
import MezmurSamples from '@/app/components/MezmurSamples'
import Testimonials from '@/app/components/Testimonials'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default async function Home({ params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang)

  return (
    <div className="bg-earth-100 dark:bg-gray-900">
      <Navbar dict={dict.nav} lang={lang} />
      <main>
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Mission dict={dict.mission} />
        <Features dict={dict.features} />
        <Pricing dict={dict.pricing} />
         
        <MezmurSamples dict={dict.mezmur} />
        <Testimonials dict={dict.testimonials} lang={lang} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  )
}