import React from 'react'
import "../style/feed.scss";

const Feed = () => {
  return (
    <main className='feed-page'>
      <div className="feed">
        <div className="posts">
          <div className="post">

         
          <div className="user">
            <div className="img-wrapper">
               <img src="https://i.pinimg.com/736x/a6/9a/ab/a69aabcf4a12e6e8bae84a52b8f9f295.jpg" alt="" />
            </div>
           
            <p>username</p>
          </div>
          <img src="https://i.pinimg.com/736x/69/71/45/6971456f0c818bf1d7859e55ff9fe1cc.jpg" alt="" />
          <div className="bottom">
            <p className='caption'> caption </p>
          </div>
         </div>
        </div>
      </div>
    </main>
  )
}

export default Feed