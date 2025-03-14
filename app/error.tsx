'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error caught by boundary:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-color1 text-color3">
      <h1 className="text-3xl font-bold">Something went wrong!</h1>
      <p className="mt-2">{error.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 rounded bg-color3 text-white hover:bg-color4 transition cursor-pointer"
      >
        Try Again
      </button>
    </div>
  )
}
