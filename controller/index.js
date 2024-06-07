const { getAllPost, getPost, createPost, updatePost, deletePost, createComment, updateComment, deleteComment } = require("./Blog.Controller");
const { signUp, logIn, logOut } = require("./User.Controller");


module.exports = {
    signUp,
    logIn,
    logOut,
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment
};