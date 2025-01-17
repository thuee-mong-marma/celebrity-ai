'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea = ({...props} : TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener('input', (e) => {
        const target = e.target as HTMLTextAreaElement
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
      }, false)
    }
  }, [])

  return <textarea {...props} className={cn("w-full max-h-[25dvh] p-2 border border-gray-500 rounded bg-gray-700 text-white focus:outline-none", props.className)} ref={textareaRef}  />
}

export default Textarea
