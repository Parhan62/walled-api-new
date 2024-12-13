require('dotenv').config()
const cors = require("cors")
const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routers/users.router");

const app = express();
app.use(cors());
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
