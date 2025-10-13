"use client"

import React from 'react'
import { useState } from 'react'
import NavLink from './NavLink'

function Header() {

const [toggle, setToggle] = useState(false)
console.log(toggle)


  return (
    <>
    <header className="flex flex-row justify-between items-center pt-2 z-50">
        <h1 className="font-bold text-[20px]">greencabins.</h1>
        <button onClick={() => setToggle(prev => !prev)} className="font-bold text-[20px]">{toggle ? <p>close</p> : <p>menu</p>}</button>
    </header>
    {toggle ? <div onClick={() => setToggle(false)} className="inset-0 z-40 bg-[#00002027] fixed "></div> : null}
    <div className='flex items-center justify-center'>
    {toggle ? <nav className="z-1000 bottom-0 fixed w-[350px] h-[500px] font-medium mb-2 rounded bg-amber-50"> 
        <div className='flex flex-col gap-3 ml-4 mt-10 tracking-tighter'>
            <NavLink href="#" title="Home"/>
            <NavLink href="#" title="About"/>
            <NavLink href="#" title="Contact"/>
        </div>
    
            </nav> : null }
    
    </div>
    
    </>
    //overlay mobile
    
  )
}

export default Header
