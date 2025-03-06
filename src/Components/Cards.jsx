import React from 'react'
import Card from './Card'


function Cards({users , handleRemove}) {
  return (
    <div className='w-full h-100 max-h-100 py-2 overflow-auto items-center justify-center mt-20 border-1 flex gap-5 flex-wrap'>
      {users.map((item , index) => {
        return <Card handleRemove={handleRemove} key={index } id={index} user={item}/>
      })}
    </div>
  )
}

export default Cards
