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

  function handleSubmit(e){
    e.preventDefault();
    const {username, email} = e.target.elements;
    console.log(username.value, email.value)
  }
  return (

    <>

     <form className='user-froms' onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your usernaem" name="usernaem" />
        <input type="emal" placeholder="Enter your email" name="email" /> <br />

        <button>Submit</button>
      </form>



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
    </>
   
  )
}

export default App