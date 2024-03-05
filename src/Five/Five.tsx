import React, { useState } from 'react'
const user = ['Reputation', 'New users', 'Votes', 'Editors', 'Moderators']
interface User {
  name: string
  job: string
  avatar: string
  tags: string[]
}

const userList: User[] = [
  {
    name: 'John Doe',
    job: 'Software Developer',
    avatar: 'https://studiochupanhdep.com/Upload/Images/Album/anh-the-2024.jpg',
    tags: ['JavaScript', 'React', 'Node.js']
  },
  {
    name: 'Jane Smith',
    job: 'Graphic Designer',
    avatar: 'https://studiochupanhdep.com/Upload/Images/Album/anh-the-2024.jpg',
    tags: ['UI/UX', 'Adobe Creative Suite']
  },
  {
    name: 'Jane Smith',
    job: 'Graphic Designer',
    avatar: 'https://studiochupanhdep.com/Upload/Images/Album/anh-the-2024.jpg',
    tags: ['UI/UX', 'Adobe Creative Suite']
  }
]
export default function Five() {
  const [query, setQuery] = useState<string>("")
  // tìm user trùng tên này
  const filterUser: User[] =
    query.length > 0
      ? userList.filter((user) => {
          return user.name.toLowerCase().includes(query.toLowerCase())
        })
      : userList
  return (
    <div className='min-w-[25rem] p-20 shadow-sm bg-white rounded-sm'>
      <p className='font-meri text-3xl font-black'>Users</p>
      <div className='mt-5 flex flex-col gap-2 md:flex-row lg:flex-row  justify-between'>
        <div className=''>
          <div className='relative grow '>
            <input
              type='text'
              className='w-full px-3 py-2 pl-10  mr-2 rounded-md border-2 border-gray-300'
              placeholder='Search users'
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
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
        </div>
        <div className='space-x-5 '>
          {user.map((Element, index) => {
            return (
              <a
                href='/'
                key={index}
                className='p-2 inline-block  rounded-sm bg-white mb-2 hover:bg-blue-500 hover:text-white '
              >
                {Element}
              </a>
            )
          })}
        </div>
      </div>
      <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {filterUser.map((Element, index) => {
          return (
            <div
              className='flex bg-[#FBFCFF] mt-5 p-6  hover:shadow-lg hover:border-[1px] hover:border-[#BFC8ES] hover:shadow-lg  gap-x-5 pb-20 '
              key={Element.name}
            >
              <img className='w-24 h-24 rounded-full ' src={Element.avatar} alt='' />
              <div className=''>
                <h3 className='font-meri font-black'>{Element.name}</h3>
                <p className='font-popi text-sm'>{Element.job}</p>
                <div className='mt-5 flex items-center justify-center gap-2'>
                  {Element.tags.map((Element, index) => {
                    return (
                      <a key={index} href='/' className='p-1 rounded-3xl border-1 text-blue-500 inline-block text-xs'>
                        {Element}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
