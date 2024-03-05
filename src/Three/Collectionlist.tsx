import React from 'react'

export default function Collectionlist() {
  const Tag: string[] = ['Profile', 'New York', 'Relax', 'Person', 'Fashion', 'Fashion']
  return (
    <div className='w-full rounded-sm bg-[#EFF0F1] p-16 font-[#0E0E38] shadow-lg'>
      <h1 className='font-meri font-bold text-3xl'>Popular Collect</h1>
      <div className='space-x-2 mt-5'>
        {Tag.map((Element) => (
          <a
            key={Element}
            href='/'
            className='inline-block  p-2 lg:p-2 inline-block border border-1 rounded-md bg-white hover:text-blue-500 mb-2'
          >
            {Element}
          </a>
        ))}
      </div>
      <div className='grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3'>
        <div className='bg-white rounded-2xl p-3'>
          <div className=''>
            <img
              className='w-full rounded-2xl aspect-video'
              src='https://9mobi.vn/cf/Images/np/2022/11/16/anh-cute-de-thuong-dang-yeu-nhat.jpg'
              alt=''
            />
          </div>

          <div className='grid grid-cols-3 gap-5 mt-4'>
            <img
              className='aspect-video w-full border-1 border-indigo-600 rounded-2xl'
              src='https://taimienphi.vn/tmp/cf/aut/hinh-anh-cute-dep-de-thuong-nhat-1.jpg'
              alt=''
            />
            <img
              className='aspect-video border-1 border-indigo-600 rounded-2xl'
              src='https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-cute.jpg'
              alt=''
            />
            <img
              className='aspect-video border-1 border-indigo-600 rounded-2xl'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-cute-001-1-1.jpg'
              alt=''
            />
          </div>
          <div className='flex justify-between pt-6'>
            <p className='font-popi font-medium text-2xl'>People</p>
            <p className='font-popi font-medium flex items-center'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6 inline'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className='bg-white rounded-2xl p-3'>
          <div className=''>
            <img
              className='w-full rounded-2xl aspect-video'
              src='https://9mobi.vn/cf/Images/np/2022/11/16/anh-cute-de-thuong-dang-yeu-nhat.jpg'
              alt=''
            />
          </div>

          <div className='grid grid-cols-3 gap-5 mt-4'>
            <img
              className='aspect-video w-full border-1 border-indigo-600 rounded-2xl'
              src='https://taimienphi.vn/tmp/cf/aut/hinh-anh-cute-dep-de-thuong-nhat-1.jpg'
              alt=''
            />
            <img
              className='aspect-video border-1 border-indigo-600 rounded-2xl'
              src='https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-cute.jpg'
              alt=''
            />
            <img
              className='aspect-video border-1 border-indigo-600 rounded-2xl'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-cute-001-1-1.jpg'
              alt=''
            />
          </div>
          <div className='flex justify-between pt-6'>
            <p className='font-popi font-medium text-2xl font-bold'>People</p>
            <p className='font-popi font-medium flex items-center'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6 inline'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className='bg-white rounded-2xl p-3'>
          <div className=''>
            <img
              className='w-full rounded-2xl aspect-video'
              src='https://9mobi.vn/cf/Images/np/2022/11/16/anh-cute-de-thuong-dang-yeu-nhat.jpg'
              alt=''
            />
          </div>

          <div className='grid grid-cols-3 gap-5 mt-4'>
            <img
              className='aspect-video w-full border-1 border-indigo-600 rounded-2xl'
              src='https://taimienphi.vn/tmp/cf/aut/hinh-anh-cute-dep-de-thuong-nhat-1.jpg'
              alt=''
            />
            <img
              className='aspect-video border-1 border-indigo-600 rounded-2xl'
              src='https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-cute.jpg'
              alt=''
            />
            <img
              className='aspect-video border-1 border-indigo-600 rounded-2xl'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-cute-001-1-1.jpg'
              alt=''
            />
          </div>
          <div className='flex justify-between pt-6'>
            <p className='font-popi font-medium text-2xl'>People</p>
            <p className='font-popi font-medium flex items-center'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6 inline'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
