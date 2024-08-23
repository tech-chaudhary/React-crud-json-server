import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserView() {

    
    const[datas, setDatas]=useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/user')
            .then(res => {
                console.log(res)
                setDatas(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[])
  return (

    <div className='form'>
         <h1>View User Data</h1>
         <table border= "1" width= "100%">
            {
                datas.map(data=><tr><td>{data.firstname}</td><td>{data.lastname}</td><td>{data.email}</td></tr>)
            }
         </table>
        </div>
  )
}

export default UserView