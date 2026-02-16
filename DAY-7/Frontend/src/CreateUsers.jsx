import React from "react";

const CreateUsers = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your usernaem" name="usernaem" />
        <input type="emal" placeholder="Enter your email" name="email" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateUsers;
