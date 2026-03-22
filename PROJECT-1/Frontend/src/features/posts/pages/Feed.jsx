import React from 'react'
import "../style/feed.scss";

const Feed = () => {
  return (
    <main>
      <div className="feed-box">
        <div className="users">
          <div className="color1">
               <img src="img.jpg" alt="" />
          </div>
         
          <h2>User Name</h2>
        </div>
        <div className="posts-img">
          <img src="img1.jpg" alt="" />
        </div>
        <div className="icons">
          <div className="left">
            icons
            icons
            icons
          </div>

          <div className="right">
            book mark icons
          </div>
        </div>
      </div>
    </main>
  )
}

export default Feed