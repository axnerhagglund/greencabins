import React from 'react'
import Link from 'next/link'
import { cn } from "clsx-for-tailwind"

type LinkProps = {
    title: string
    href: string
}

function NavLink({title, href}: LinkProps) {
  return (
    <Link href={href}
     passHref
     aria-label={`Navigate to ${title}s page`}
     className={cn(
      "text-2xl" //default styling
     )}>
     
        <span>{title}</span>

    </Link>
  )
}

export default NavLink