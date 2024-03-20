import React from 'react'
import './Description.css'
export default function Descriptionbox() {
  return (
    <div className='description-box lg:mx-[170px] md:mx-[170px] md:my-[120px] lg:my-[120px]'>
      <div className='flex '>
        <div className='flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-1 border-[#d0d0d0] '>Description</div>
        <div className='flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-1 border-[#d0d0d0] bg-[#fbfbfb] text-[#555]'>Reviews {122}</div>
      </div>
      <div className='description-box-description flex flex-col gap-[25px] border-1 border-[#d0d0d0] p-[48px] pb-[70px]'>
        <p>Introducing ChatGPT, a cutting-edge language model crafted by OpenAI. Operating as a third-party entity, ChatGPT is a sophisticated virtual assistant designed to facilitate information exchange and assistance across diverse domains. With a robust foundation built on an extensive array of sources up until January 2022, ChatGPT is equipped to engage in meaningful conversations, providing insightful explanations and responses to queries.</p>
      </div>
    </div>
  )
}
