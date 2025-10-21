import React from 'react'
import Image from 'next/image'
function Cabin() {
  return (
    <main>
       <h1>Cabin</h1>
       <h2>Creek</h2>
       <Image
        src={"/08-night.jpg"}
        alt="creek cabin"
        width="200"
        height="300"/>
        
        <p>read more</p>      
    </main>
  )
}

export default Cabin