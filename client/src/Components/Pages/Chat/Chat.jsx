import React, { useEffect } from "react";
import axios from "axios";

const Chat = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/chat/select", {
        headers: { authorization: `BEARER ${localStorage.getItem("token")}` },
      })
      .then((reponse) => console.log(reponse.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
