const express = require("express");
const routes = require("./routes/api");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

const app = express();

//mongodb

mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;
//middlewares
app.use(express.json());
app.use("/api", routes);
app.use((err, req, res, next) => {
  //   console.log(err);
  res.status(422).send({
    error: err.message
  });
});

app.listen(process.env.port || 4000, () => {
  console.log("Now listening to request");
});
