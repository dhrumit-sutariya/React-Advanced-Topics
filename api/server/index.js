const express = require("express");

const app = express();
const port = 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./api/routes/userRoute");

const corsOptions = {
  origin: "http://localhost:3000",
};
mongoose
  .connect("mongodb://localhost:27017/Demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", userRoute);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Port is running on port : ${port}`);
});
