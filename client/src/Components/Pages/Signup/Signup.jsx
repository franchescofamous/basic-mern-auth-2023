import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  let [inputName, setName] = useState(null);
  let [inputPassword, setPassword] = useState(null);
  let navigate = useNavigate();
  return (
    <div>
      <h1>------Signup-----</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let infoSignup = { name: inputName, password: inputPassword };
          console.log(infoSignup);
          axios
            .post("http://localhost:5000/user/signup", infoSignup)
            .then((res) => {
              console.log(res.data);
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <div>
          <label htmlFor="name">User name</label>
          <br />
          <input
            type="text"
            id="name"
            onInput={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
