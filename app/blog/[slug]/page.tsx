import React from 'react'
import { Metadata } from 'next'

interface BlogProps {
  params: { slug: string }
}

export async function generateMetadata({
  params
}: BlogProps): Promise<Metadata> {
  const { slug } = await params

  return {
    title: `Blog Post: ${slug.replace('-', ' ')}`,
    description: `Read the latest article about ${slug.replace('-', ' ')}`,
    openGraph: {
      title: `Blog Post: ${slug.replace('-', ' ')}`,
      description: `Read an insightful post about ${slug.replace('-', ' ')}`,
      url: `/blog/${slug}`,
      siteName: 'My Blog',
      type: 'article'
    }
  }
}

const EachBlog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}

export default EachBlog
