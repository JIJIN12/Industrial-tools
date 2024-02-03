import React from 'react'

export default function LoginSignup() {
  return (
    <div className='w-[100%] h-[100%] bg-[#fce3fe] pt-[100px] pb-[100px]'>
      <div className='w-[590px] h-auto bg-white m-auto mb-20 px-[60px] py-[40px] '>
        <h1 className='my-[20px] flex justify-center'>Sign Up</h1>
        <div className='flex flex-col gap-[30px] mt-[30px] '>
          <input type='text' placeholder='Your Name' className='h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'/>
          <input type='text' placeholder=' Email Address' className='h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'/>
          <input type='password' placeholder=' Password' className='h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'/>
        </div>
        <button className='w-[100%] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none font-medium cursor-pointer'>Continue</button>
        <p className='mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Already have an account?<span className='text-[#ff4141] font-semibold'>Login Here</span></p>
        <div className=' flex items-center  mt-[25px] gap-[25px] text-[#5c5c5c] text-[18px] font-medium '>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policies </p>
        </div>
      </div>
    </div>
  )
}
