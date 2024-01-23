import React from 'react'

function Contact() {
  return (
    <div className='h-screen bg-[#f0f0f0]'>

      <div className='flex flex-col justify-center items-center h-max gap-5'>
        <h2 className='text-5xl font-bold'>Contact Me</h2>
        <p className='text-center text-xl'>Feel free to Contact me by submitting the form below and I will get back to you <br /> as soon as possible</p>
      </div>

        <div className='flex flex-col justify-center items-center bg-white w-1/2 m-auto'>

          <div className='flex flex-col w-full p-5 pb-0 gap-2'>
          <label htmlFor="">Name</label>
        <input type="text"  placeholder='Enter Your Name' className='bg-[#f0f0f0] w-full p-5'/>
          </div>
       
        <div className='flex flex-col w-full p-5 pb-0 gap-2'>

        <label htmlFor="">Email</label>
        <input type="text"  placeholder='Enter Your Email' className='bg-[#f0f0f0] p-5'/>
        </div>
        
        <div className='flex flex-col w-full p-5 pb-0 gap-2'>

        <label htmlFor="">Message</label>
        <textarea placeholder='Enter Your Message' name="" id="" cols="2" rows="5" className='bg-[#f0f0f0] p-5 pb-0 mb-5'></textarea>
        </div>

        <button className='mb-3 bg-blue-500 p-2 pt-1 rounded-xl text-white border-4 hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-white'>Submit</button>
    
        </div>
       
    </div>
  )
}

export default Contact