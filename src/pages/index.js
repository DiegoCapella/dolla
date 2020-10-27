import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/data'


const Home = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
    </>
  )
}

export default Home
