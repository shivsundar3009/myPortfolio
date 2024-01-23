import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

function Projects() {
  return (
    <div className='h-max'>
      <div className='flex flex-col justify-center items-center h-1/3 gap-3'>
        <h2 className='text-5xl font-bold'>Projects</h2>
        <p className='text-center text-xl'>Here you will find different projects that I created</p>
      </div>

      <div className='flex justify-around' >
        <div className='w-1/3 flex flex-col gap-3 p-5'>

          <img src={project1} alt="" />


        </div>
        <div className='w-1/3 flex flex-col gap-3 mt-5'>
          <h2 className='text-3xl font-bold'>My Portfolio</h2>
          <p className='text-2xl'>In this I have created my pofile and I am currently working on this</p>
        </div>

      </div>
      <div className='flex justify-around' >
        <div className='w-1/3 flex flex-col gap-3 p-5'>

          <img src={project2} alt="" />


        </div>
        <div className='w-1/3 flex flex-col gap-3 mt-5'>
          <h2 className='text-3xl font-bold'>Random Password Generator</h2>
          <p className='text-2xl'>This creates a random password with numbers and speacial character we can copy password to clipboard</p>
        </div>

      </div>
      <div className='flex justify-around' >
        <div className='w-1/3 flex flex-col gap-3 p-5'>

          <img src={project3} alt="" />


        </div>
        <div className='w-1/3 flex flex-col gap-3 mt-5'>
          <h2 className='text-3xl font-bold'>Counter Application</h2>
          <p className='text-2xl'>In this project I have use useState hook we can add or remove value by clicking button</p>
        </div>

      </div>
    </div>
  )
}

export default Projects