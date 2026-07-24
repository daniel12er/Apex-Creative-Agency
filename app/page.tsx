'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Pricing } from '@/components/pricing'
import { Chatbot } from '@/components/chatbot'
import { Footer } from '@/components/footer'

export default function Page() {

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Footer />
      <Chatbot />
    </main>
  )
}
