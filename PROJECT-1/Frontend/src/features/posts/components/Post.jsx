import React from "react";

const Post = ({ user, post, loading, handleLike, handleUnLike }) => {
  return (
    <div className="post">

      {/* User info */}
      <div className="user">
        <div className="img-wrapper">
          <img
            src={user?.profileImage || "/default-avatar.png"} // ← crash prevent
            alt="profileImage"
          />
        </div>
        <p>{user?.username}</p>
      </div>

      {/* Post image */}
      <img className="secons-image" src={post.imgUrl} alt="post" />

      {/* Icons */}
      <div className="icons">
        <div className="left">

          {/* Like button */}
          <button
            onClick={() => {
              post.isLiked ? handleUnLike(post) : handleLike(post); // ← pura post bhejo
            }}
          >
            <svg
              className={post.isLiked ? "like" : ""}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              width="60"
              height="60"
            >
              <rect width="60" height="60" fill="#1a1a1a" rx="8" />
              <path
                d="M30 43 C30 43, 13 32, 13 21.5 C13 16.5, 17 13, 21.5 13 C24.5 13, 27.5 14.8, 30 17.5 C32.5 14.8, 35.5 13, 38.5 13 C43 13, 47 16.5, 47 21.5 C47 32, 30 43, 30 43 Z"
                fill="none"
                stroke="white"
                strokeWidth="2.5"        // ✅ camelCase
                strokeLinejoin="round"   // ✅ camelCase
                strokeLinecap="round"    // ✅ camelCase
              />
            </svg>
          </button>

          {/* Comment button */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              width="60"
              height="60"
            >
              <rect width="60" height="60" fill="#1a1a1a" rx="8" />
              <path
                d="M30 13 C19.5 13, 12 19.5, 12 28 C12 33.5, 15 38.5, 20 41.5 L19 49 L27 44.5 C28 44.8, 29 45, 30 45 C40.5 45, 48 38.5, 48 28 C48 19.5, 40.5 13, 30 13 Z"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Share button */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              width="60"
              height="60"
            >
              <rect width="60" height="60" fill="#1a1a1a" rx="8" />
              <path
                d="M12 18 L46 28 C48 28.8, 48 31.2, 46 32 L12 42 C10 43, 8.5 41, 9.5 39 L14 31 C14.4 30.2, 14.4 29.8, 14 29 L9.5 21 C8.5 19, 10 17, 12 18 Z"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <line
                x1="14"
                y1="30"
                x2="28"
                y2="30"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>

        </div>

        <div className="right">
          {/* Save button */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              width="60"
              height="60"
            >
              <rect width="60" height="60" fill="#1a1a1a" rx="8" />
              <path
                d="M20 12 L40 12 L40 50 L30 42 L20 50 Z"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Caption + Likes count */}
      <div className="bottom">
        <p className="likes">{post.likes?.length || 0} likes</p>
        <p className="caption">
          <span>{user?.username} </span>
          {post.caption}         {/* ← hardcoded 1 remove kiya */}
        </p>
      </div>

    </div>
  );
};

export default Post;