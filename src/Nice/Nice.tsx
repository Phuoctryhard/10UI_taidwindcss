import React from 'react'
interface Account {
  logo: string
  name: string
  subtitle: string
  account: number
}
const accounts: Account[] = [
  {
    name: 'Dropbox',
    subtitle: 'dropbox.com',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ufD1Xwj71Hs9KthGWDKcrs_BR13ZeV-8EpKqPO9RPA&s',
    account: 24
  },
  {
    name: 'Dropbox',
    subtitle: 'dropbox.com',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ufD1Xwj71Hs9KthGWDKcrs_BR13ZeV-8EpKqPO9RPA&s',
    account: 24
  },
  {
    name: 'Dropbox',
    subtitle: 'dropbox.com',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ufD1Xwj71Hs9KthGWDKcrs_BR13ZeV-8EpKqPO9RPA&s',
    account: 20
  }
]
export default function Nice() {
  return (
    <div className='w-[60rem] p-28 bg-white rounded-3xl'>
      <div className='flex  items-center'>
        <div className='relative '>
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
        {/* ml : auto tự động cách ra trái  */}
        <div className='flex ml-auto'>
          <button className=' text-[#0E0D46] rounded-full p-3'>
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

          <button className='bg-[#8598FC] text-white rounded-full px-5 py-3 font-meri'>IG</button>
        </div>
      </div>
      <h1 className='font-meri text-2xl font-bold mt-10'>Accounts </h1>
      <div className='mt-7 w-full mt-7'>
        {accounts.map((Element) => {
          return (
            <div className='flex p-5 hover:bg-[#FAF2FE] justify-between rounded-xl items-center'>
              <div className='flex items-center gap-x-5'>
                <img className='w-20 h-15 rounded-full' src={Element.logo} alt='' />
                <div className=''>
                  <h1 className='font-meri font-bold text-2xl'>{Element.name}</h1>
                  <p>{Element.subtitle}</p>
                </div>
              </div>

              <div className=''>
                <p>{Element.account} accounts</p>
              </div>
              <div className='h-10 w-10 rounded-full bg-white text-center flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-gray-800 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path stroke='currentColor' stroke-linecap='round' stroke-width='2' d='M6 12h0m6 0h0m6 0h0' />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
