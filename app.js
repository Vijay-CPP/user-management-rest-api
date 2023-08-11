const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require("cors");
const path = require("path")
const app = express(); 

app.use(cors());

app.use(bodyParser.json()) // for parsing application/json

app.use("/users", router)

const url = process.env.URL;

mongoose.set("strictQuery", false);
 
mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => {
        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log("MongoDB Connected Successfully!");
            console.log(`Server running a port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
