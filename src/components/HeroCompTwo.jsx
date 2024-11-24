import { useState } from 'react'
import react from '../assets/react.svg'


function HeroCompTwo() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-[600px] border-2 border-pink-500 border-4'>
    <div className='flex w-full h-full justify-center items-center '>
      <div className='flex justify-end flex-col gap-6 w-[30%] h-[30vh]'>
        <h1 className='text-[40px] '>Project Management</h1>
        <p className=''>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <button className='flex justify-center items-center text-white bg-blue-300 rounded-full w-[200px] min-h-[50px] gap-3'>Try It Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
       <div className='border-2 border-pink-400 bg-blue-300 w-[30%] h-[50vh] '></div>
      </div>
      </div>
      {/* HeroCompTwo//2nd //section/start */}
      
      <div className='flex w-full h-[600px] justify-center gap-12 items-center border-4  '>
      <div className='border-2 border-pink-400 w-[30%] h-[80%] '>
        <img src={react} alt="" />
      </div>
      
      <div className='flex justify-end flex-col gap-6 w-[30%] h-[30vh]'>
        <h1 className='text-[40px] '>Work together</h1>
        <p className=''>With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</p>
          <button className='flex justify-center items-center text-white gap-3 bg-blue-300 rounded-full w-[200px] min-h-[50px]'>Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
       </div>
    
    
    </>
    )
}

export default HeroCompTwo