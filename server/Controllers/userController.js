const dataBase = require("../Config/mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  let insertUserQuery =
    "INSERT INTO `user` (name_user, password_user) VALUES(?,?)";

  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      dataBase.query(
        insertUserQuery,
        [req.body.name, hash],
        (error, result) => {
          if (error) {
            res.status(401).json(error);
          }
          res.status(201).json({ hash, id: result.insertId });
        }
      );
    })
    .catch((error) => {
      /* res.status(500).json(error); */
      throw error;
    });
  console.log(req.body);
};

exports.login = (req, res) => {
  console.log(req.body);
  let selectUserQuery = "SELECT * from `user` WHERE name_user=?";
  dataBase.query(selectUserQuery, [req.body.name], (error, result) => {
    //error ? res.json(error) : res.status(200).json(result);
    if (error) {
      //query not executed due to server error
      res.status(500).json(error);
    }
    if (result.length > 0) {
      //uuser found
      bcrypt
        .compare(req.body.password, result[0].password_user)
        .then((valid) => {
          if (valid) {
            //valid password
            let accessToken = jwt.sign(
              { user_id: result[0].id_user },
              process.env.ACCESSTOKEN_KEY,
              { expiresIn: "15h" }
            );
            res.status(200).json({ accessToken });
          } else {
            //invalid password
            res.status(401).json({ error: "incorect password" });
          }
        })
        .catch((error) => res.status(500).json(error));
    } else {
      //user not found
      res.status(401).json({ error: "user not found" });
    }
  });
};
