

const jwt = require("jsonwebtoken");
async function identifyUsers(req,res, next){
  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({
       message: "UnAuthorized Access"
    })
  }

  let decoded = null;

  try{
    decoded = jwt.verify(token, process.env.JWT_SECRETS);
  } catch(err){
    return res.status(401).json({
      message: "Token invalid",
    })
  }

  req.user = decoded;
  next();


}

module.exports = identifyUsers;