// import { useState } from 'react'
import Banner from './sections/Banner'
import Hero from './sections/Hero'
import Specs from './sections/Specs'
import Users from './sections/Users'
import Differentiators from './sections/Differentiators'
import Modes from './sections/Modes'
import Vision from './sections/Vision'
import CTA from './sections/CTA'
import Footer from './sections/Footer'


import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='page'>
        <Banner></Banner>
        <Hero></Hero>
        <Specs></Specs>
        <Users></Users>
        <Differentiators></Differentiators>
        <Modes></Modes>
        <Vision></Vision>
        <CTA></CTA>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
