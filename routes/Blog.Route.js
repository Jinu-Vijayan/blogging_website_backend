const express = require("express");
const { getAllPost, getPost, createPost, updatePost, deletePost, createComment, updateComment, deleteComment } = require("../controller");
const {passport} = require("../middleware");

const BlogRouter = express.Router();

// Post Routes

BlogRouter.get("/posts/all",getAllPost);

BlogRouter.post("/posts/",passport.authenticate('jwt', { session: false }),createPost);

BlogRouter.get("/posts/:id",getPost);

BlogRouter.put("/posts/:id",passport.authenticate('jwt', { session: false }),updatePost);

BlogRouter.delete("/posts/:id",passport.authenticate('jwt', { session: false }),deletePost);

// Comment routes

BlogRouter.post("/comments/:postId",createComment);

BlogRouter.put("/comments/",updateComment);

BlogRouter.delete("/comments/",deleteComment);

module.exports = BlogRouter;