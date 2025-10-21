import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { CabinType } from '../data/mockupdata/cabins'
function Cabin({cabin}: {cabin: CabinType}) {
  return (
    <main className=" text-gray-300 h-[400px] ">
       <h1>Cabin</h1>
       <h2 className="font-bold text-2xl mb-2 text-gray-300">{cabin.name}</h2>
       <Image
        src={"/08-night.jpg"}
        alt="creek cabin"
        width="300"
        height="200"
        className='rounded border-2 border-gray-600'/>
        <section className='pt-6'>
          <div className='flex flex-row gap-5'>
              <Button href='#' title='Book' buttonType='primary'/> 
              <Button href={`/cabins/${cabin.id}`} title='Learn more' buttonType='primary'/> 
          </div>
          {!cabin.available ? <p className='text-red-400 self-end pt-3'>Not available</p> : null} 
        </section>
            
    </main>
  )
}

export default Cabin