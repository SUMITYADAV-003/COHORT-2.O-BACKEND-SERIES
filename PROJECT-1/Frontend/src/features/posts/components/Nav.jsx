import React from 'react'
import { useNavigate } from "react-router"
import "./nav.scss"


const Nav = () => {

  const navigate = useNavigate();


  return (
    <nav className='nav-bar'>
      <div className="icons">
        <div className="img-wrapper">
       <img src="/instaIcon.webp" alt="" />
       </div>
          <p>Insta</p>
      </div>
      
      <button onClick={() => {navigate("/create-post")}}
        className='button primary-button'
        >
        
        new Post

      </button>
    </nav>
  )
}

export default Nav