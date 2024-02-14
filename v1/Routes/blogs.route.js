const express = require('express');
const blogsController = require("../Controllers/blogs.controller");
const uploader = require('../Middleware/uploader');
const videouploader = require('../Middleware/uploadVideo');
const router = express.Router();


// add a blog
// router.post("/", uploader.single("banner"), blogsController.addABlog);
router.post("/", videouploader.single("video"), blogsController.addABlog);

// update a blog
router.patch("/:id", blogsController.updateABlog);

// add a comment
router.put("/:id/comments", blogsController.addAComment);

// delete a comment
router.delete("/:blogId/comments/:commentId", blogsController.deleteAComment);

// get all blogs
router.get("/", blogsController.getAllBlogs);

// get single blog
router.get("/:id", blogsController.getSingleBlog);

// delete a blog
router.delete("/:id", blogsController.deleteABlog);



module.exports = router;