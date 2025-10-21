"use client"

import React, { Children, ReactNode } from 'react'
import { createContext, useMemo } from 'react'
import { cabins } from '../data/mockupdata/cabins'
import { CabinType } from '../data/mockupdata/cabins'

type contextProps = {
    children: ReactNode
}
export const Cabinscontext = createContext<CabinType[] | null>(null)
function DataProvider({children}:contextProps) {
    
   

    const value = useMemo(() => cabins as CabinType[], []);
  return (
    <Cabinscontext.Provider value={value}>

        {children}

    </Cabinscontext.Provider>
    
  )
}

export default DataProvider