import axios from 'axios';
import React, { useState } from 'react'

function UserInsert() {

    const[users, setUsers]=useState({firstname:"", lastname:"", email:""})
    const insertData= (e)=>{
     e.preventDefault();
     axios.post("http://localhost:4000/user", users)
     console.log("insert");
    }

  return (
    <div className='form'>
   <h1>User Insert Data</h1> 

   <input
   type='text'
   className='txt'
   placeholder='Enter Your First Name'
   onChange={e=> setUsers({ ...users, firstname:e.target.value})}
   />
    <input
   type='text'
   className='txt'
   placeholder='Enter Your Last Name'
   onChange={e=> setUsers({ ...users, lastname:e.target.value})}
   />
    <input
   type='text'
   className='txt'
   placeholder='Enter Your Email'
   onChange={e=> setUsers({ ...users, email:e.target.value})}
   />
   <button onClick={insertData}>Insert Data</button>

   {/* <h2>{JSON.stringify(users)}</h2> */}




    </div>
  )
}

export default UserInsert