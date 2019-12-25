const express = require("express");
const routes = require("./routes/api");
// const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.port || 4000, () => {
  console.log("Now listening to request");
});
