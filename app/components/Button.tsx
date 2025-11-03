"use client"
import React, { FormEvent } from 'react'
import Link from 'next/link'
import { cn } from 'clsx-for-tailwind'

type buttonProps = {
    title: string,
    href: any
    buttonType: string
}
function Button({title, href, buttonType}: buttonProps) {
   const handleClick = (e:FormEvent) => {
    e.preventDefault();

    if (href === "100vh") {
      window.scrollBy({
        top: window.innerHeight * 1, // 50% av viewport-höjd
        behavior: "smooth",
      });
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href; // fallback om det är en riktig länk
    }
  };
  return (
    <Link href={href}>
        <button className={cn(
            "p-1 rounded cursor-pointer", //deafault styling

            {"border-2 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-500 transition": buttonType === "primary"},
            {"bg-gray-200 hover:bg-gray-300 text-black": buttonType === "secondary"},
            
        )}
        onClick={handleClick}>
          
            {title}
        </button>
    </Link>
    
  )
}

export default Button