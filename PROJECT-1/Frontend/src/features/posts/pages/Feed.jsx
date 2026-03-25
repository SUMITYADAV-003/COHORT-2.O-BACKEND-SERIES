import React from 'react'
import "../style/feed.scss"

const Feed = () => {
  return (
    <main className='feed-controller'>
      <div className="feed">
        <div className="users">
        <div className="user">
          <img src="img.jpg" alt="" />
          <h1>username</h1>
        </div>
        </div>

         <div className="posts">
          <div className="post">
            <img src="img1.jpg" alt="" />
          </div>
        </div>
       
      </div>
    </main>
  )
}

export default Feed