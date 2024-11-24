import { useState } from 'react'


function HeroCompThree() {
  const [count, setCount] = useState(0)

  return (
    <>
    { <div className='flex w-full h-[600px] justify-center items-center gap-5 bg-[#043873]'>
      <div className='flex justify-end flex-col gap-6 w-[30%] h-[30vh]'>
        <h1 className='text-[40px] text-white'>Customise it
to your needs</h1>
        <p className='text-white'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
        </p>
          <button className='flex justify-center items-center text-white bg-blue-300 gap-3 rounded-full w-[200px] min-h-[50px]'>Let's Go <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
       <div className='border-2 border-pink-400 bg-blue-300 w-[30%] h-[40vh]'></div>
      </div> }
    </>
    )
}

export default HeroCompThree