const { BlogModel } = require("../model");

const getAllPost =async (req,res) => {

    const blogs =await BlogModel.find().populate("userId","userName email");
    console.log(blogs);
    res.status(200).json({
        message : "All data fetched successfully",
        data : blogs
    })
};

const createPost =async (req,res) => {

    const {title, body, tags} = req.body;

    const newBlog = new BlogModel({
        userId : req.user._id,
        title,
        body,
        tags,
        comment : []
    });

    const blog = (await newBlog.save());

    res.status(200).json({
        message : "Post create succesfully",
        blogId : blog._id
    })
};

const getPost = (req,res) => {
    res.status(200).json({
        message : "Dummy response from getPost"
    })
};

const updatePost = (req,res) => {
    res.status(200).json({
        message : "Dummy response from updatePost"
    })
};

const deletePost = (req,res) => {
    res.status(200).json({
        message : "Dummy response from deletePost"
    })
};

const createComment = (req,res) => {
    res.status(200).json({
        message : "Dummy response from createComment"
    })
};

const updateComment = (req,res) => {
    res.status(200).json({
        message : "Dummy response from updateComment"
    })
};

const deleteComment = (req,res) => {
    res.status(200).json({
        message : "Dummy response from deleteComment"
    })
};

module.exports = {
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment
}