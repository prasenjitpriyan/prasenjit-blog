import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="border border-color4 rounded-lg p-6">
      <Image
        width={1200}
        height={630}
        src="/blog.jpg"
        alt="blog"
        className="rounded"
      />
      <div className="flex gap-2 pt-2">
        <p className="bg-color3 px-3 py-1 rounded-4xl text-color1 text-xs">
          Music
        </p>
      </div>
      <p className="py-2 text-xs text-color2">Sunday 23, 2025</p>
      <h3 className="text-2xl font-semibold text-color4">
        Soundscapes of the City: An interview with PD
      </h3>
      <p className="py-2 text-xs text-color2">8 min read</p>
      <p className="text-color4 font-thin">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat totam
        perferendis sit.
      </p>
    </div>
  )
}

export default Card
