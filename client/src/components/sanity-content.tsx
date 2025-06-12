import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import type { SanityImage, SanityBlock } from '@/types/sanity'
import { useTheme } from '@/components/theme-provider'

interface SanityContentProps {
  content: Array<SanityBlock | SanityImage | any>
  className?: string
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <div className="my-8">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          className="w-full rounded-lg"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-6 text-white font-orbitron">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mb-4 text-white font-orbitron">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mb-3 text-white font-orbitron">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#E5042F] pl-6 my-6 italic text-gray-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-[#E5042F]">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[#E5042F] hover:text-white transition-colors underline"
        target={value.blank ? '_blank' : '_self'}
        rel={value.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-2">
        {children}
      </ol>
    ),
  },
}

export function SanityContent({ content, className = '' }: SanityContentProps) {
  if (!content) return null

  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <PortableText 
        value={content} 
        components={portableTextComponents}
      />
    </div>
  )
}

interface SanityImageProps {
  image: SanityImage
  alt?: string
  width?: number
  height?: number
  className?: string
}

export function SanityImageComponent({ 
  image, 
  alt, 
  width = 800, 
  height, 
  className = '' 
}: SanityImageProps) {
  if (!image) return null

  const imageUrl = height 
    ? urlFor(image).width(width).height(height).url()
    : urlFor(image).width(width).url()

  return (
    <img
      src={imageUrl}
      alt={alt || ''}
      className={className}
    />
  )
}