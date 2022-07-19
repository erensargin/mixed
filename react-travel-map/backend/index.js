const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");
const usersRoute = require("./routes/users");

dotenv.config();

app.use(express.json);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB connected")
}).catch((err) => { console.log(err) });


const router = require('express').Router();

router.post('/', (req, res) => {
    console.log("Got here");
    res.send("ciao");
});

app.use('/', router);

// app.use("/api/pins", pinRoute);
// app.use("/api/users", usersRoute);


app.listen(8800, () => {
    console.log("Backend server is running!")
})