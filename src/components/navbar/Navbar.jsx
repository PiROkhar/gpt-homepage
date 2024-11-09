import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-around '>
      <ul className='flex space-x-10 mt-10 text-zinc-200'>
        <li className='mr-[30px] font-bold text-white'>GPT-3</li>
        <li>Home</li>
        <li>What is GPT?</li>
        <li>Open AI</li>
        <li>Case Studies</li>
        <li>Library</li>
      </ul>
      <div>
      <ul className='flex mt-10 space-x-10'>
        <li>Sign-in</li>
        <li className='rounded-lg p-2 pl-4 pr-4 mt-[-9px] bg-blue-600 cursor-pointer'>Sign-up</li> 
      </ul>
      </div>
    </div>
  )
}

export default Navbar