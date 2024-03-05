import React from 'react'
interface Inputs {
  titlle: string
  placeholder: string
  type: 'text' | 'textarea'
}
export default function Input({ title, placeholder, type }: Inputs) {
  return (
    <div className=''>
      <label className='font-popi block text-sm font-semibold' htmlFor={title}>
        {title}
      </label>
      {type === 'text' ? (
        <input
          type={type}
          className=' w-full rounded-md border-2 p-4 py-3 mt-2  '
          placeholder={placeholder}
          id={title}
        />
      ) : (
        <textarea id={title} placeholder={placeholder} className='w-full rounded-md border-2 p-4 py-3 mt-2 '></textarea>
      )}
    </div>
  )
}
