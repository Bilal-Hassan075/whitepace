import { useState } from 'react'


function HeroComp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex w-full h-full justify-center items-center bg-[#043873]'>
      <div className='flex justify-end flex-col gap-6 w-[30%] h-[30vh]'>
        <h1 className='text-[40px] text-white'>Get More Done With Whitepace</h1>
        <p className='text-white'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <button className='flex justify-center gap-3 items-center text-white bg-blue-300 rounded-full w-[200px] min-h-[50px]'>Try Whitepace free <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
       <div className='border-2 border-pink-400 bg-blue-300 w-[35%] h-[50vh]'></div>
      </div>
    </>
    )
}

export default HeroComp
