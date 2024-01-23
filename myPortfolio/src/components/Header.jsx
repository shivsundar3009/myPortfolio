import React from 'react'
import profile from '../assets/profile.png'

function Header() {
  return (
    <>
    <div className='flex justify-between bg-[#0f1829] text-white h-[80px]'> 

      <div className=' ml-5 flex justify-center place-items-center'>
        <img className='h-12' src={profile} alt="" />
        <h1 className='ml-4 text-3xl'>Shivsundar Wakle</h1>
      </div>


    
    <div className='flex p-3 gap-6 mr-3 justify-center place-items-center'>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Projects</a>
      <a href="">Contact</a>

    </div>
    </div>
    </>
  )
}

export default Header