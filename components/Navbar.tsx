'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  const navLinks = [
    { label: 'Latest', href: '/latest' },
    { label: 'Trending', href: '/trending' },
    { label: 'JavaScript', href: '/javascript' },
    { label: 'TypeScript', href: '/typescript' },
    { label: 'Postal', href: '/postal' }
  ]

  return (
    <nav className="h-16 flex justify-between items-center p-5 bg-color4">
      <Link href={'/'} className="uppercase font-semibold text-color2">
        The Prasenjit&apos;s Blog
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5 font-semibold text-color1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative group ${
                pathname === link.href ? 'text-color2' : 'text-color1'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-color1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-color4 text-color1 flex flex-col items-center gap-4 py-5 px-5 md:hidden">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="w-full py-2 bg-color2 rounded flex justify-center font-semibold"
            >
              <Link
                href={link.href}
                className={`relative group ${
                  pathname === link.href ? 'text-color2' : 'text-color1'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
