const mongoose = require("mongoose");
const validator = require("validator");


const blogsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            unique: false,
            required: [true, "Title is required"],
        },
        banner: {
            required: true,
            type: String,
        },
        video: {
            required: false,
            type: String,
        },
        desc: {
            type: String,
            required: [true, "Desc is required"],
        },

    },

    {
        timestamps: true,
    }

);


const Blogs = mongoose.model("blogs", blogsSchema);

module.exports = Blogs;