import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import Card from './Card'

const MustSeeSection = () => {
  return (
    <section className="min-h-screen bg-color1 py-10">
      <div className="p-x5 md:px-10 flex justify-between">
        <h1 className="text-4xl sm:text-6xl font-bold text-color4">
          Must-See Moments
        </h1>
        <FaRegArrowAltCircleRight className="text-4xl sm:text-6xl text-color4" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default MustSeeSection
