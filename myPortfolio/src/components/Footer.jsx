import React from 'react'

function Footer() {
  return (
    <div className='bg-black h-max text-white'>
    <div className=' p-16 pb-10'>
      <div className='flex justify-around border-b-4 border-red-300 p' >
      <div className='w-1/3 flex flex-col gap-3 p-5'>
        <h2 className='text-3xl font-bold'>SHIVSUNDAR WAKLE</h2>
        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product </p>
         

      </div>
      <div className='w-1/3 flex flex-col gap-3 mt-5'>
       
        <h2 className='text-3xl font-bold '>SOCIAL</h2>
      </div>
  

    </div>
      </div >
        
        <div className='text-center pb-5'>
        &#169; copyright 2024. Made by <u>Shivsundar Wakle</u>
        </div>
      </div>
    
  )
}

export default Footer