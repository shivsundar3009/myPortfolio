import React from 'react'

function About() {
  return (
    <div className='bg-[#f7f7f7] h-screen'>
    <div className='flex flex-col justify-center items-center h-1/3 gap-3'>
      <h2 className='text-5xl font-bold'>ABOUT ME</h2>
      <p className='text-center text-xl'>Here you will find more information about me, what I do, and my current skills mostly in terms <br/> of programming and technology</p>
    </div>
    <div className='flex justify-around' >
      <div className='w-1/3 flex flex-col gap-3 p-5'>
        <h2 >Get to know me!</h2>
        <p>I'm a <span className='font-bold'>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className='font-bold'>Projects</span> section. </p>
         
         <p>
          I also like sharing content related to the stuff that I have learned in <span className='font-bold'>Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>

      </div>
      <div className='w-1/3 flex flex-col gap-3 mt-5'>
        <h2 >My Skills</h2>
        <div className='flex gap-2'>
          <div className='bg-[#e7e7e7] w-max p-1.5 rounded-md'>
            HTML
          </div>
          <div className='bg-[#e7e7e7] w-max p-1.5 rounded-md'>
            CSS
          </div>
          <div className='bg-[#e7e7e7] w-max p-1.5 rounded-md'>
            JAVASCRIPT
          </div>
          <div className='bg-[#e7e7e7] w-max p-1.5 rounded-md'>
            REACT JS
          </div>
          <div className='bg-[#e7e7e7] w-max p-1.5 rounded-md'>
            TAILWIND CSS
          </div>
          <div className='bg-[#e7e7e7] w-max p-1.5 rounded-md'>
            GITHUB
          </div>
        </div>
      </div>


    </div>
    </div>
  )
}

export default About