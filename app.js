const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();



app.use(cors());
app.use(express.json());



// import routes
const blogsRoute = require('./v1/Routes/blogs.route');




// declare routes
app.use('/api/v1/blogs', blogsRoute);



app.get("/", (req, res) => {
    try {
        res.send("Welcome to NEW LMS Server !");
    } catch (error) {
        console.log(error.message);
    };
});


app.listen(PORT, () => {
    try {
        console.log(`server is successfully running on port ${PORT}!`.red.bold);
    } catch (error) {
        console.log(error.message);
    };
});

app.use('/static', express.static('public'))

// console.log("Path",__dirname);
console.log("Path",path.join(__dirname, 'public', 'upload_videos'));

//  This is using to make upload images folder public accessible
// app.use("/videos", express.static(path.join(__dirname, "..", "upload_videos")));
// 6. Serve static files including uploaded videos
app.use('/videos', express.static(path.join(__dirname, 'public', 'upload_videos')));
app.use('/images', express.static(path.join(__dirname, 'public', 'upload_images')));
// app.use("/images", express.static(path.join(__dirname, "..", "upload_images")));
// app.use("/images", express.static(path.join(__dirname, "upload_images")));


app.all("*", (req, res) => {
    try {
        res.send("No Routes Found");
    } catch (error) {
        console.log(error.message);
    };
});

exports = app;
