import React, { useState } from 'react'

export default function Notification() {
  // làm ẩn hiện
  const [show, setShow] = useState(false)

  return (
    <div className='w-[35rem] '>
      <div className='text-right'>
        <button className='bg-[#0C0E41] text-white rounded-full p-3' 
        onClick={()=>setShow(!show)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.2'
            stroke='currentColor'
            class='w-8 h-8'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
            />
          </svg>
        </button>
      </div>
      {/* Làm chế độ ẩn hiện  */}
      <div className={`bg-white w-full mt-5 p-5 rounded-2xl shadow-sm transition-all duration-500  ${show ? 'opacity-0' : 'opacity-1' }`}>
        <h2 className='text-xl font-popi font-black'>You have 1 new message</h2>
        <div className='flex gap-4 mt-5'>
          <div className='p-4 bg-red-200 rounded-sm self-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
              />
            </svg>
          </div>
          <div className=''>
            <h1 className='font-semibold'>Feb22</h1>
            <p className='font-normal'>if you like what we do, please tell your friends and share </p>
            <div className='flex justify-start gap-5 mt-5 items-center text-[#205195]'>
              <a className=' inline-block px-3 py-1 border border-1 border-indigo-600  text-blue rounded-full' href='/'>
                <svg
                  className='w-6 h-6  inline-block mr-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill-rule='evenodd'
                    d='M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z'
                    clip-rule='evenodd'
                  />
                </svg>
                Twitter
              </a>
              <a
                className='inline-block px-3 py-1 border border-1  border-indigo-600 text-blue  rounded-full flex items-center'
                href='/'
              >
                <svg
                  className='w-6 h-6 inline-block '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill-rule='evenodd'
                    d='M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z'
                    clip-rule='evenodd'
                  />
                </svg>
                FaceBook{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
