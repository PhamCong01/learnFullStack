const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routerAuth = require("./routers/auth");
const userAll = require("./routers/user");
const dotenv = require("dotenv");
dotenv.config();
const port = 3000;
const app = express();
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("server is connect to database successfully");
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// router
app.use("/auth", routerAuth);
app.use("/user", userAll);
app.listen(port, () => {
  console.log(`server is runing port ${port}`);
});
