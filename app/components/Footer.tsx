import React from 'react'
import NavLink from './NavLink'

function Footer() {
  return (
    <main className="bg-green-950 flex flex-col pl-5 gap-5">
        <section className='flex flex-col'>
            <h2>Contact us</h2>
            <NavLink title='Contact' href='#'/>
            <NavLink title='info.greencabins.se' href='#'/>
            <NavLink title='Stigbergsliden 5' href='#'/>
        </section>
         <section className='flex flex-col'>
            <h2>About</h2>
            <NavLink title='About us' href='#'/>
            <NavLink title='Blog' href='#'/>
            <NavLink title='Karriär' href='#'/>
        </section>
    </main>
  )
}

export default Footer