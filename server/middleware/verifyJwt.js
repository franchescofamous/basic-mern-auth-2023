const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  try {
    console.log(req.headers);
    let token = req.headers["authorization"].split(" ")[1];
    let verifiedToken = jwt.verify(token, process.env.ACCESSTOKEN_KEY);
    req.id_user = verifiedToken.user_id;
    next();
  } catch (error) {
    res.status(403).json(error);
  }
};

/* 
"yann|jean|".split(" ") ["yann","jean"]
let a = {Authorization: "BEARER tyuilkjhgfghjklmlkjnbvcvbn,;:mlkjhgfghjklmlkjhgfghj"}
a["Authorization"]
a.Authorization

*/
