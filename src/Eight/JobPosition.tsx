import React, { ReactNode } from 'react'
interface Position {
  title: string
  openPosition: number
  icon: ReactNode
  gradientClass: string
}
const position: Position[] = [
  {
    title: 'Design',
    openPosition: 4,
    gradientClass: 'from-[#BBCBFB] to-[#F1D4FF]',
    icon: (
      <svg
        className='w-6 h-6 text-gray-800 dark:text-white '
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2'
        />
      </svg>
    )
  },
  {
    title: 'Operations',
    openPosition: 2,
    gradientClass: 'from-[#BBCBFB] to-[#D1D4FF]',
    icon: (
      <svg
        class='w-6 h-6 text-gray-800 dark:text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14'
        />
      </svg>
    )
  },
  {
    title: 'Engineering',
    openPosition: 8,
    gradientClass: 'from-[#BBEBFB] to-[#EFD4FF]',

    icon: (
      <svg
        class='w-6 h-6 text-gray-800 dark:text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z'
        />
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
        />
      </svg>
    )
  },
  {
    title: 'Design',
    openPosition: 4,
    gradientClass: 'from-[#BBCBFB] to-[#F1D4FF]',
    icon: (
      <svg
        className='w-6 h-6 text-gray-800 dark:text-white '
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2'
        />
      </svg>
    )
  },
  {
    title: 'Operations',
    openPosition: 2,
    gradientClass: 'from-[#BBCBFB] to-[#D1D4FF]',
    icon: (
      <svg
        class='w-6 h-6 text-gray-800 dark:text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14'
        />
      </svg>
    )
  },
  {
    title: 'Engineering',
    openPosition: 8,
    gradientClass: 'from-[#BBEBFB] to-[#EFD4FF]',

    icon: (
      <svg
        class='w-6 h-6 text-gray-800 dark:text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z'
        />
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
        />
      </svg>
    )
  }
]
export default function JobPosition() {
  return (
    <div className='w-full space-y-20 text-center'>
      <h1 className='font-meri text-3xl font-black mt-20'>Open Position</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ml-10 mr-10 '>
        {position.map((Element, index) => {
          return (
            <div className='flex flex-col bg-white py-10 px-10 space-y-5 rounded-2xl' key={index}>
              <div className='flex items-center justify-center space-x-4'>
                <div
                  className={`h-16 w-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#BBCBFB] to-[#F1D4FF] ${Element.gradientClass}`}
                >
                  {Element.icon}
                </div>
                <p className='font-popi text-2xl font-medium'>{Element.title}</p>
              </div>
              <button className='rounded-md border-[1px] px-4 py-3 text-lg hover:bg-[#1E2246] hover:text-white'>
                {`${Element.openPosition} Open Position`}
              </button>
            </div>
          )
        })}
      </div>
      <p>
        The box-shadow property enables you to cast a drop shadow from the frame of almost any element. If a
        border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners.
        The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on
        top).
      </p>
    </div>
  )
}
