import React from 'react'
import Link from 'next/link'
type LinkProps = {
    title: string
    href: string
}

function NavLinks({title, href}: LinkProps) {
  return (
    <Link href={href}>
        <p>{title}</p>
    </Link>
  )
}

export default NavLinks