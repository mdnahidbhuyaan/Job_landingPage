"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Responsive = () => {

  const [showNav , setShowNav] = useState(false)
  const  openNavHandlar=()=>setShowNav(true)
  const closeNavHandlar=()=>setShowNav(false)


  return (
    <div>
      <Nav openNav= {openNavHandlar}/>
      <MobileNav shwoNav= {showNav} closeNav={closeNavHandlar}/>
    </div>
  )
}

export default Responsive
