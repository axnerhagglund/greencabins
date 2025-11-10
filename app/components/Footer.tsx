import React from 'react'
import NavLink from './NavLink'
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';

function Footer() {
  return (
    <main className="bg-gray-500 flex flex-col py-5 items-center justify-center gap-3">
        
        <section className='flex flex-col pb-4 w-[150px]'>
            <h2 className='font-medium'>Contact us</h2>
            <NavLink title='Contact' href='#'/>
            <NavLink title='info.greencabins.se' href='#'/>
            <NavLink title='Stigbergsliden 5' href='#'/>
        </section>
         <section className='flex flex-col w-[150px]'>
            <h2 className='font-medium'>About</h2>
            <NavLink title='About us' href='#'/>
            <NavLink title='Blog' href='#'/>
            <NavLink title='Karriär' href='#'/>
        </section>
        
         <section className='text-center max-w-[400px] p-3'>
          <h2 className='font-bold text-2xl pb-3'>greencabins.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum possimus porro officiis corrupti totam dicta quasi, expedita molestias a dolor minima repellat, inventore mollitia!</p>
          <section className='flex flex-row gap-3 mt-2'>
            <Instagram/>
            <Facebook />
            <Linkedin/>
          </section>
        </section>

    </main>
  )
}

export default Footer