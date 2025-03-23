import HeroSection from '@/components/HeroSection'
import MustSeeSection from '@/components/MustSeeSection'
import React from 'react'

const Home = async () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MustSeeSection />
    </main>
  )
}

export default Home
