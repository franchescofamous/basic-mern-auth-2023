const dataBase = require("../Config/mysql");
const bcrypt = require("bcrypt");

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
  res.status(201).json({ message: "login" });
};
