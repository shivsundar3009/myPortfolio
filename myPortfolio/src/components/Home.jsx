import React from 'react'
import resume from '../assets/shivsundar_resume.pdf'

function Home() {
  return (
    <>
    <div className='bg-[#bde0fe] h-screen flex flex-col justify-center items-center'>
     <h2 className='text-7xl font-bold mb-11 '>
     HEY, I'M SHIVSUNDAR WAKLE
     </h2>
     <p className='mt-11 text-2xl text-center'>
     A Frontend focused Web Developer building the Frontend of Websites and <br />Web Applications that leads to the success of the overall product   
     </p>

     <button className='mt-11 bg-blue-500 p-2 rounded-xl text-white border-4 hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-white'>
        <a href="" download={resume}>RESUME</a></button>



    </div>
    </>
  )
}

export default Home