import React from 'react'
import { useState, useEffect } from 'react'

function useScreenSize() {

    const [windowSize, setWindowSize] = useState<{
        width: number
        height: number
    } | null>(null)
    
    useEffect(() => {
        if(typeof window !== "undefined") {
            function handleResize(){
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
                
            }
         window.addEventListener("resize", handleResize)
         handleResize()
         return () => window.removeEventListener("resize", handleResize)
        }
    }, [])
    
  return windowSize
}

export default useScreenSize