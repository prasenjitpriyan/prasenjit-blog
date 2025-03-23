import React from 'react'
import { FaPodcast } from 'react-icons/fa6'
import { FaRegPlayCircle } from 'react-icons/fa'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className="h-screen bg-color4 text-color1">
      <Navbar />
      <div className="px-5 md:px-10 flex justify-between mt-10">
        <h1 className="flex flex-col xl:flex-row uppercase text-3xl sm:text-6xl xl:text-8xl font-extrabold gap-5">
          The Prasenjit&apos;s
          <span className="text-color2 flex xl:flex-col gap-1">
            <p className="text-[10px] xl:text-[20px]">Blog about</p>
            <p className="text-[10px] xl:text-[20px]">JavaScript</p>
            <p className="text-[10px] xl:text-[20px]">TypeScript &</p>
            <p className="text-[10px] xl:text-[20px]">Postal</p>
          </span>
        </h1>
        <div className="flex gap-2 text-3xl sm:text-6xl xl:text-8xl text-color2">
          <FaPodcast aria-label="Podcast Icon" />
          <FaRegPlayCircle aria-label="Play Icon" />
        </div>
      </div>
      <div className="mx-5 min-h-[60svh] md:mx-10 mt-10 rounded bg-color1 text-color4 flex flex-col md:flex-row">
        <div className="flex-1 lg:flex-[1_1_33.333%] flex items-center justify-center p-4">
          01
        </div>
        <div className="flex-1 lg:flex-[1_1_66.666%] flex items-center justify-center p-4">
          02
        </div>
      </div>
    </section>
  )
}

export default HeroSection
