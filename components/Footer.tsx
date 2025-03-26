import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="h-[50svh] bg-color4 flex flex-col justify-between p-5 md:p-10">
      <div className="py-24 flex justify-between">
        <h1 className="flex flex-col xl:flex-row uppercase text-3xl sm:text-6xl xl:text-8xl font-extrabold gap-5 text-color2">
          The Prasenjit&apos;s
          <span className="text-color2 flex xl:flex-col gap-1">
            <p className="text-[10px] xl:text-[20px]">Blog about</p>
            <p className="text-[10px] xl:text-[20px]">JavaScript</p>
            <p className="text-[10px] xl:text-[20px]">TypeScript &</p>
            <p className="text-[10px] xl:text-[20px]">Postal</p>
          </span>
        </h1>
        <div className="flex gap-2 text-3xl sm:text-6xl xl:text-8xl text-color2">
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
      <p className="border-t border-color2 text-center text-color1 py-4">
        All rights reserved. © {currentYear} The Prasenjit&apos;s
      </p>
    </footer>
  )
}

export default Footer
