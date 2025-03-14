import React from 'react'

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-color1 text-color4">
      <div className="w-16 h-16 border-4 border-color4 border-dashed rounded-full animate-spin"></div>
      <p className="ml-3 text-lg">Loading...</p>
    </div>
  )
}

export default Loading
