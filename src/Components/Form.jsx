import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormData}) {
    const{register , handleSubmit , reset} = useForm()
    const handleFormClick = (data) => {
      handleFormData(data)
      reset();
    }
  return (
    <div className='flex justify-center mt-15'>
      <form action="" className='flex gap-3' onSubmit={handleSubmit(handleFormClick)}>
        <input {...register('name')} className='outline-0 text-md font-semibold border-1 rounded-md text-center' type="text" placeholder='Name' />
        <input {...register('email')} className='outline-0 text-md font-semibold border-1 rounded-md text-center' type="text" placeholder='Email'/>
        <input {...register('image')} className='outline-0 text-md font-semibold border-1 rounded-md text-center' type="text" placeholder='Image url'/>
        <input className='px-4 py-1 rounded-md bg-blue-400' type="submit"/>
      </form>
    </div>
  )
}

export default Form
