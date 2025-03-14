import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-color1">
      <h1 className="text-9xl font-extrabold text-color4 tracking-widest">
        404
      </h1>
      <div className="bg-color1 border-2 border-color3 text-color3 px-2 text-sm rounded rotate-12 absolute uppercase">
        Page Not Found
      </div>
      <button className="mt-5 rounded">
        <Link
          href={'/'}
          className="relative inline-block text-sm font-medium text-color1"
        >
          <span className="relative block px-8 py-3 bg-color3 border border-current rounded">
            Go Home
          </span>
        </Link>
      </button>
    </main>
  )
}

export default NotFound
