import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Cards from './Components/Cards';
import Form from './Components/Form';

function App() {

const [users , setUsers] = useState([])

const handleFormData = (data) => {
  return setUsers([...users , data])
}

const handleRemove = (id) =>{
   setUsers(() => users.filter((item , index) => index != id))
}
 
  return(
    <>
    <div className='w-full h-screen px-3 '>
      <Cards handleRemove={handleRemove} users={users}/>
      <Form handleFormData={handleFormData}/>
    </div>
    </>
  )
}
export default App
