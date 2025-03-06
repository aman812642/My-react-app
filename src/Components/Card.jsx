import React from 'react'

function Card({user , id , handleRemove}) {
  return (
    <>
       <div className='w-52 h-fit py-3 bg-zinc-500 rounded-md flex flex-col items-center gap-2'>
        <div className='w-14 h-14 rounded-full bg-red-300 overflow-hidden'>
            <img className='w-full h-full object-cover' src={user.image} alt="" />
        </div>
        <div className='w-full text-center'>
          <h1 className='text-lg font-bold mt-1'>{user.name}</h1>
          <h1 className='text-red-400 mt-1'>{user.email}</h1>
          <p className='text-sm font-semibold mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum, architecto facere neque sedsto magni accusamus.</p>
        </div>
        <button onClick={() => handleRemove(id)} className='px-2 py-1 bg-red-500 rounded-md text-white mt-1'>Remove it</button>
      </div>

    </>
  )
}

export default Card
