import React from 'react'
import "./All-user-css-file/Create-users.scss"

const CreteUser = () => {
  return (
    <div className='Create-users'>
      <form >
         <input type="text" placeholder='Enter your Name' name='name' /> <br />
         <input type="email" placeholder='Enter your email' name='email' /> <br />
         <input type="password" placeholder='Enter your paswword' name='password' /> <br />
         <input type="text" placeholder='Enter your role' name='role' /> <br />
         <button>Create User</button>
      </form>
      
    </div>
  )
}

export default CreteUser