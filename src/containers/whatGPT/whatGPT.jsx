import React from 'react'

const WhatGPT = () => {
  return (
    <div className='flex justify-center mt-36'>
      <div className='bg-[#042c54] w-[80%] h-[500px] rounded-lg'>
        <div className=' flex justify-between'>
          <div className='ml-10'>
            <p className='font-extrabold text-lg text-zinc-400'>______</p>
            <p className='font-bold text-white'>What is GPT-3 ?</p>
            <p className='mt-32 text-transparent bg-gradient-to-r bg-clip-text from-purple-600 to-yellow-400 text-[30px] font-semibold'>The possibilities are beyond<br></br>your imagination</p>
          </div>
          <div className='mt-5 mr-10 text-zinc-400'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing<br></br>elit.Ullam mollitia deserunt, explicabo,laborum<br></br>nequevoluptate provident quae  officia quasi .</p>
            <p className='bg-gradient-to-r bg-clip-text from-purple-600 to-yellow-400 text-transparent flex justify-end mt-32 cursor-pointer'>
              Explore the library
            </p>
          </div>
        </div>
        <div className='flex justify-around mt-32 text-white font-semibold'>
          <div>
          <p className='font-extrabold text-lg text-zinc-400'>______</p>
          <p>Chatbots</p>
          </div>
          <div>
          <p className='font-extrabold text-lg text-zinc-400'>______</p>
          <p>Knowledgebase</p>
          </div>
          <div>
          <p className='font-extrabold text-lg text-zinc-400'>______</p>
          <p>Education</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT