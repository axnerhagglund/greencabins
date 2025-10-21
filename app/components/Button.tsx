import React from 'react'
import Link from 'next/link'
import { cn } from 'clsx-for-tailwind'

type buttonProps = {
    title: string,
    href: string
    buttonType: string
}
function Button({title, href, buttonType}: buttonProps) {
  return (
    <Link href={href}>
        <button className={cn(
            "p-1 rounded cursor-pointer", //deafault styling

            {"border-2 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-500 transition": buttonType === "primary"},
            {"bg-gray-200 hover:bg-gray-300 text-black": buttonType === "secondary"},
            
        )}>
            {title}
        </button>
    </Link>
    
  )
}

export default Button