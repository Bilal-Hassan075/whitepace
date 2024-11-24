import { useState } from 'react'


function HeroCompFour() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex w-full h-[600px] justify-center items-center gap-10 bg-[white]'>
      <div className='border-2 border-pink-400 bg-blue-300 w-[25%] h-[35vh]'></div>
      <div className='flex justify-end flex-col gap-6 w-[30%] h-[30vh]'>
        <h1 className='text-[40px] '>Use as Extension</h1>
        <p className=''>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
          <button className='flex justify-center items-center gap-3 text-white bg-blue-300 rounded-full w-[200px] min-h-[50px]'>Let's Go <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
       
      </div>
    </>
  )
}
export default HeroCompFour