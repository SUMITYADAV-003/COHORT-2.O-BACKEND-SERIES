import React, { useEffect, useState } from 'react'
import axios from 'axios'



const App = () => {
  const [Users, setUsers] = useState([])
  function FatchUsers() {
    axios.get("http://localhost:3001/api/users/getusers")
    .then((res) => {
      console.log(res.data)
      setUsers(res.data.user)
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
      FatchUsers();
  }, [])
  return (
    <div className='users'>
      {
        Users.map((user) => {
          return <div className='user'>
             <h2>{user.username}</h2>
          <h5>{user.email}</h5>
          </div>
         
        })
        
        
      }
      
    </div>
  )
}

export default App