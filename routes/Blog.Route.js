const express = require("express");
const { getAllPost, getPost, createPost, updatePost, deletePost, createComment, updateComment, deleteComment } = require("../controller");

const BlogRouter = express.Router();

// Post Routes

BlogRouter.get("/posts/all",getAllPost);

BlogRouter.post("/posts/",createPost);

BlogRouter.get("/posts/:id",getPost);

BlogRouter.put("/posts/:id",updatePost);

BlogRouter.delete("/posts/:id",deletePost);

// Comment routes

BlogRouter.post("/comments/:postId",createComment);

BlogRouter.put("/comments/",updateComment);

BlogRouter.delete("/comments/",deleteComment);

module.exports = BlogRouter;