const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();

app.use(bodyParser.json()) // for parsing application/json

app.use("/users", router)

const url = process.env.URL;

mongoose.set("strictQuery", false);

mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => {
        app.listen(5000, () => {
            console.log("MongoDB Connected Successfully!");
            console.log("Server running a port 5000");
        });
    })
    .catch((err)=> console.log(err));