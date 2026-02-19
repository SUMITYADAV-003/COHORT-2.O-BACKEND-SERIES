import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const App = () => {
  const [Users, setUsers] = useState([])
  const formRef = useRef(null) // 👈 to reset form after submit

  function FatchUsers() {
    axios.get("http://localhost:3001/api/users/getusers")
      .then((res) => {
        console.log(res.data)
        setUsers(res.data.user)
      }).catch((err) => {
        console.log(err);
      })
    // ❌ Don't put setUsers("") here — it breaks the users list
  }

  useEffect(() => {
    FatchUsers();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    const { username, email } = e.target.elements;
    console.log(username.value, email.value);

    axios.post("http://localhost:3001/api/users/crete", {
      email: email.value,
      username: username.value
    })
      .then((res) => {
        console.log(res.data);
        FatchUsers();
        formRef.current.reset() // ✅ clears the input fields after submit
      })
  }

  function handleDeleteNote(userId) {
    console.log(userId);
    axios.delete("http://localhost:3001/api/delete/users/" + userId)
      .then((res) => {
        console.log(res.data);
        FatchUsers();
      })
  }
  function handleUpdate(userId){
    console.log("user id ", userId)
  }

  return (
    <>
      <form className='user-froms' onSubmit={handleSubmit} ref={formRef}>
        <input type="text" placeholder="Enter your username" name="username" />
        <input type="email" placeholder="Enter your email" name="email" /> <br />
        <button>Submit</button>
      </form>
      <div className='users'>
        {Users.map((user) => {
          return (
            <div className='user' key={user._id}>
              <h2>{user.username}</h2>
              <h5>{user.email}</h5>
              <div className='Button-handler'>
                <button className='red' onClick={() => handleDeleteNote(user._id)}>Delete</button>
                <button className='blue' onClick={()}>Update</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App