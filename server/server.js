const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/chat", chatRoute);

app.listen(5000);
