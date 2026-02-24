import React from 'react'
import CreteUser from './Users/CreteUser'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <main>
      <Routes>
        
        <Route path="/" element={<CreteUser />} />
         
        
      </Routes>

    </main>
    </>
  )
}

export default App