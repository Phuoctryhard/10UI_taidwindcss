import React from 'react'
import Job from '../component/Job'
import { Joblist } from '../component/Job'
export default function JobList() {
  return (
    <div className='w-[40rem] rounded-md bg-white p-16'>
      <div className='flex gap-4 '>
        <div className='relative grow'>
          <input
            type='text'
            className='w-full px-3 py-2 pl-10  mr-2 rounded-md border-2 border-gray-300'
            placeholder='Search for a part-time job'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 absolute text-gray-400 left-3 top-2.5'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </div>

        <div className=''>
          <button className='p-2 border-1 bg-[#281a51] text-white rounded-md flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.4'
              stroke='currentColor'
              class='w-6 h-6 mr-2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z'
              />
            </svg>
            Use Map
          </button>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-8'>
        {/* <Job
          title='Furniture'
          className='bg-[#FFECEC]'
          icon={
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
                d='M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3'
              />
            </svg>
          }
        />
         */}
        {Joblist.map((element, index) => {
          return (
            <>
              <div className={`${element.className} p-4 flex flex-col items-center justify-center rounded-sm`}>
                {element.icon}
                <p className='mt-3'>{element.title}</p>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
