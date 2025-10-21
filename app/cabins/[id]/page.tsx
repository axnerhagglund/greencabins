"use client"
import React, { useMemo } from 'react'
import { useContext } from 'react'
import { Cabinscontext } from '@/app/components/DataProvider'
import Image from 'next/image'
import Button from '@/app/components/Button'

function Page({ params }: { params: Promise<{ id: string }> } ) {

   
        const { id } = React.use(params)
        const cabins = useContext(Cabinscontext)
        if(!cabins) return console.log("no cabin found")
          
        const cabin = useMemo(() => {
            if(!cabins) return undefined
            return cabins.find(c => c.id === id)
        },[cabins, id])
        if(!cabin) return console.log("no cabinid found")
    
        console.log(cabins)
    
   
    

  return (
    <main className="bg-black h-screen flex flex-col justify-center text-gray-400 font-med pl-4 gap-5">
        <h1 className='text-3xl '>{cabin.name}</h1>
        <Image
                src={"/08-night.jpg"}
                alt="creek cabin"
                width="600"
                height="200"
                className='rounded border-2 border-gray-600'/>

        <section>
            <p>{cabin.description}</p>
        </section>
        <section className="pt-4 flex flex-wrap gap-2">
            {cabin.amenities.map((amen,index) => <span className='p-2 font-medium text-black rounded bg-gray-600' key={index}>{amen}</span>)}
        </section>
        <p>{cabin.pricePerNight}kr per natt</p>
        <Button title="Book" href="/cabins" buttonType="primary" />

    </main>
  )
}

export default Page