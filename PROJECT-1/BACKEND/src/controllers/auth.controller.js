const userModel = require("../models/userModels.js");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");





async function loginController (req, res) {
  const { email, password, username } = req.body;

  const user = await userModel.findOne({
    $or: [
      { username: username },
      { email: email }
    ]
  })
  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    })
  }

  

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Password inValid",
    })
  }
  const token = jwt.sign({
    id: user._id,
  }, process.env.JWT_SECRETS, { expiresIn: "1d" });

  res.cookie("Login-token", token);
  res.status(200).json({
    message: " User login Successfully : ",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage
    }
  })


}

async function registerController(req, res)  {
  
    const { username, email, password, bio, profileImage } = req.body;
  
  
  
   const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
  if(isUserAlreadyExists){
    return res.status(409).json({
      message: "User already exists " + (isUserAlreadyExists.email == email ? "Email already exists" : "Username already exists")
    })
  }
  const hash = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    username, password: hash,email,bio, profileImage
  });

  const token = jwt.sign({
    id: user._id,
  }, process.env.JWT_SECRETS, {expiresIn: "1d"});

  res.cookie("token", token);
  res.status(201).json({
    message: "User Registered successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    }
  })


}


module.exports = {
  loginController,
  registerController
}