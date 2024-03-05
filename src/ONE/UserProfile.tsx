import React from 'react'

export default function UserProfile() {
  return (
    <div className='w-[36rem] p-12 bg-white flex text-[#1C2862] rounded-md '>
      <div className=''>
        <img
          src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-cute-001-1-1.jpg'
          alt=''
          // rounded-full
          className='w-[30rem] rounded-lg border-[5px] border-[#E6EFFA] '
        />
      </div>
      <div className='flex-col ml-[2rem] space-y-4'>
        <div className=''>
          <h1 className='capitalize mt-2 text-3xl font-bold text-[#1C2862] font-popi'>Ngô Đình Phước</h1>
          <h2 className='capitalize mt-1'>3D artist</h2>
        </div>
        <div className='space-y-4'>
          <p className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6 inline mr-4 '
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
              />
            </svg>
            4.7 Rating{' '}
          </p>
          <p className='flex items-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6 mr-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
              />
            </svg>
            4,477 Reviews{' '}
          </p>
          <p className=' flex items-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6  mr-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
              />
            </svg>
            478 Student
          </p>
        </div>

        <p className='text-lg font-popi'>
          David Grant has been making video games for a living for more than 14 years as a Designer, Producer, Creative
          Director, and Executive Producer, creating games for console, mobile, PC and Facebook.
        </p>
        <button className='p-1 border-2 border-[#C4CADF] rounded-sm'>Show More </button>
      </div>
    </div>
  )
}
