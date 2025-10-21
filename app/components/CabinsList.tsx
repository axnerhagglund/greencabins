"use client"

import React from 'react'
import Cabin from './Cabin'
import { useContext } from 'react'
import { Cabinscontext } from './DataProvider'
function CabinsList() {

    const cabins = useContext(Cabinscontext)
     if (!cabins) return <p>Inga stugor hittades.</p>;
     console.log(cabins)
  return (
    <div className=" mt-10 flex flex-col items-center justify-center md:grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 w-full max-w-full">
        {cabins.map((cabin,index) => (<Cabin cabin={cabin} key={index}/>))}
    </div>
    
  )
}

export default CabinsList