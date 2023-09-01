const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./Routes/userRoute");

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

app.listen(5000);
