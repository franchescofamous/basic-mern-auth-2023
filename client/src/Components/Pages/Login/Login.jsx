import { useState } from "react";
import axios from "axios";

const Login = () => {
  let [inputName, setName] = useState(null);
  let [inputPassword, setPassword] = useState(null);
  return (
    <div>
      <h1>------Login-----</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let infoLogin = { name: inputName, password: inputPassword };
          console.log(infoLogin);
          axios
            .post("http://localhost:5000/user/login", infoLogin)
            .then((res) => {
              console.log(res.data);
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

export default Login;
