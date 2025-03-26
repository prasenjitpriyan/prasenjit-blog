import FooterSection from '@/components/FooterSection'
import HeroSection from '@/components/HeroSection'
import MustSeeSection from '@/components/MustSeeSection'
import React from 'react'

const Home = async () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MustSeeSection />
      <FooterSection />
    </main>
  )
}

export default Home
