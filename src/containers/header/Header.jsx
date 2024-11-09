import React from 'react'
import AI from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className='text-white flex justify-around '>
      <div>
      <p className='mt-[100px] text-transparent bg-gradient-to-r bg-clip-text from-purple-600 to-yellow-400 text-5xl font-semibold  ml-[80px]'>Let's built something<br></br>amazing with GPT-3<br></br>OpenAI</p>
      <p className='ml-[80px] mt-8 text-blue-400 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Doloribus culpa optio
        ipsa tenetur nam veniam nulla,<br></br>at ipsum, aut non dolores ipsam placeat laborum<br></br>vero incidunt
        quibusdam dolorem sed fugit.</p>
        <div className='ml-[80px] flex mt-8'>
          <p className='rounded-l-lg p-3 pr-[120px] bg-blue-900 bg-opacity-60 text-gray-400'>Enter email address</p>
          <p className='rounded-r-lg p-3 bg-blue-600 cursor-pointer'>Get Started</p>
        </div>
        <div className='flex space-x-2  '>
        <img src={people} className='h-[30px] mt-[20px] ml-[80px] '></img>
        <p className='opacity-40 text-sm mt-[25px]'>1000+ people requested to access within 24 hrs.</p>
        </div>
      </div>
      <div>
        <img src={AI} className='h-[600px] mt-[20px]'></img>
      </div>
    </div>
  )
}

export default Header