import React from 'react'
import Input from '../component/Input'
import Review from './Review'

export default function ProductReview() {
  return (
    <div className='w-[42rem] bg-white p-16 space-y-6 rounded-3xl mb-20'>
      <h1 className='font-meri text-2xl font-black'>Overall rating </h1>
      <div className=''>
       <Review/>
        <p className='text-sm font-normal'>Click to rate</p>
      </div>
      <Input title='Review Title' placeholder='Example Easy to use' type='text' />

      <p>Would you recommend this product to a friend</p>
      <div className='flex'>
        <div className='flex items-center gap-x-2 '>
          <input type='radio' name='answer' id='yes' value='yes' className='scale-150 accent-black' />
          <label htmlFor='yes' className='mr-10 mb-1'>
            Yes
          </label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type='radio' name='answer' id='no' value='no' className='scale-150 accent-black' />
          <label htmlFor='no' className='mb-1'>
            No
          </label>
        </div>
      </div>
      <Input
        title='Product Review'
        placeholder='Example Since I bought this a month , itt has been used a,I bought this a month , itt has been used a .....'
        type='textarea'
      />
      <div className='flex gap-x-2 '>
        <div className='grow'>
          <Input title='Nickname' placeholder='Example Bob27 ' type='text' />
        </div>
        <div className='grow'>
          <Input title='Email address (will not be published)' placeholder='Example your @email.com ' type='text' />
        </div>
      </div>
      <div className='flex items-center gap-x-2 '>
        <input type='radio' name='answer' id='yes' value='yes' className='scale-150 accent-black' />
        <label htmlFor='yes' className='mr-10 mb-1'>
          I accepts the terms and condition
        </label>
      </div>
      <p>
        You will be able to receive emails in connection with this review (eg if others comment on your review). All
        emails contain the option to unsubscribe. We can use the text and star rating from your review in other
        marketing.
      </p>
      <button className='p-3 bg-black text-white rounded-sm'>Submit product review </button>
    </div>
  )
}
