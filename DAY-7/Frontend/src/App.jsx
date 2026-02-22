import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:3001"

const App = () => {

  // ─── State ───────────────────────────────────────────────────────────────────
  const [users, setUsers]               = useState([])
  const [updateUserId, setUpdateUserId] = useState(null)   // which user is being updated
  const [updateEmail, setUpdateEmail]   = useState("")     // new email value

  const createFormRef = useRef(null)

  // ─── Fetch all users ─────────────────────────────────────────────────────────
  function fetchUsers() {
    axios
      .get(`${BASE_URL}/api/users/getusers`)
      .then((res) => setUsers(res.data.user))
      .catch((err) => console.error("Fetch error:", err))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // ─── Create user ─────────────────────────────────────────────────────────────
  function handleCreate(e) {
    e.preventDefault()

    const { username, email } = e.target.elements

    axios
      .post(`${BASE_URL}/api/users/crete`, {
        username: username.value,
        email: email.value,
      })
      .then(() => {
        fetchUsers()
        createFormRef.current.reset()
      })
      .catch((err) => console.error("Create error:", err))
  }

  // ─── Delete user ─────────────────────────────────────────────────────────────
  function handleDelete(userId) {
    axios
      .delete(`${BASE_URL}/api/delete/users/${userId}`)
      .then(() => fetchUsers())
      .catch((err) => console.error("Delete error:", err))
  }

  // ─── Open update form for a specific user ────────────────────────────────────
  function handleOpenUpdate(user) {
    setUpdateUserId(user._id)   // mark which user we are editing
    setUpdateEmail(user.email)  // pre-fill with current email
  }

  // ─── Cancel update ───────────────────────────────────────────────────────────
  function handleCancelUpdate() {
    setUpdateUserId(null)
    setUpdateEmail("")
  }

  // ─── Submit update ───────────────────────────────────────────────────────────
  function handleUpdate(e) {
    e.preventDefault()

    axios
      .patch(`${BASE_URL}/api/update/users/${updateUserId}`, {
        email: updateEmail,
      })
      .then(() => {
        fetchUsers()
        handleCancelUpdate() // close the update form
      })
      .catch((err) => console.error("Update error:", err))
  }

  // ─── UI ──────────────────────────────────────────────────────────────────────
  return (
    <div>

      {/* ── Create User Form ───────────────────────────────────── */}
      <form onSubmit={handleCreate} ref={createFormRef} className="user-forms">
        <input type="text"  name="username" placeholder="Enter username" required />
        <input type="email" name="email"    placeholder="Enter email"    required />
        <button type="submit">Add User</button>
      </form>

      {/* ── User List ──────────────────────────────────────────── */}
      <div className="users">
        {users.map((user) => (
          <div className="user" key={user._id}>

            <h2>{user.username}</h2>
            <h5>{user.email}</h5>

            {/* ── Update Form (shown only for the selected user) ── */}
            {updateUserId === user._id ? (
              <form onSubmit={handleUpdate} className="update-form">
                <input
                  type="email"
                  value={updateEmail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                  placeholder="Enter new email"
                  required
                />
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelUpdate}>Cancel</button>
              </form>
            ) : (
              <div className="Button-handler">
                <button className="red"  onClick={() => handleDelete(user._id)}>Delete</button>
                <button className="blue" onClick={() => handleOpenUpdate(user)}>Update</button>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}

export default App