import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import HeroComp from './components/HeroComp'
import HeroCompTwo from './components/HeroCompTwo'
import HeroCompThree from './components/HeroCompThree'
import HeroCompFour from './components/HeroCompFour'
import HeroCompFive from './components/HeroCompfive'
import HeroCompSix from './components/HeroCompSix'
import HeroCompLast from './components/HeroCompLast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className=' w-full h-auto'>
 <div className='h-[80px] w-[100%]'>
   <Navbar />
 </div>
 <div className='w-full h-[600px]'>
  <HeroComp />
 </div>
 <div className='w-full h-{600px}'>
  <HeroCompTwo />
 </div>
 
 <div className='w-full h-{600px} '>
  <HeroCompThree />
 </div>
 <div className='w-full h-[600px]'>
  <HeroCompFour />
 </div>
 <div className='w-full h-[300px]'>
  <HeroCompFive />
 </div>
 <div className='w-full h-[300px]'>
  <HeroCompSix />
 </div>
 <div className='w-full h-[270px]'>
 <HeroCompLast />
 </div>
 </div>
    </>
  )
}

export default App
