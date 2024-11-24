import { useState } from 'react'


function HeroCompFive() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex  justify-center items-center w-full h-[300px] border-2 bg-[#043873]'>
        <div className='flex flex-col justify-center items-center w-[70%] h-[289px] gap-5 px-5'>
           <h1 className='text-[40px] text-white'>Your work, everywhere you are</h1> 
           <p className='text-center text-white'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
           <button className='flex justify-center items-center text-white bg-blue-300 gap-3 rounded-full w-[200px] min-h-[50px]'>Try Taskey<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg></button>
        </div>
    </div>
    </>
  )
}
export default HeroCompFive