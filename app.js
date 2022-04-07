require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();


app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch(() => {
    console.log("error connecting");
  });
try {
  app.use(routes);
} catch (error) {
  console.log(error.message);
}


app.listen(process.env.PORT, () => { console.log('listening') })