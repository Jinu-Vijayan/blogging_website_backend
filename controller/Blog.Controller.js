const { BlogModel, UserModel } = require("../model");

const getAllPost =async (req,res) => {

    try{

        const blogs =await BlogModel.find().populate("userId","userName email");

        return res.status(200).json({
            message : "All data fetched successfully",
            data : blogs
        })

    }catch(err){

        console.log(err);
        return res.status(500).json({
            message : "Internal server error occured"
        });

    }
};

const createPost =async (req,res) => {

    try{

        const {title, body, tags} = req.body;
    
        const newBlog = new BlogModel({
            userId : req.user._id,
            title,
            body,
            tags,
            comment : []
        });
    
        const blog = await newBlog.save();
    
        return res.status(200).json({
            message : "Post create succesfully",
            blogId : blog._id
        })

    }catch(err){

        console.log(err);
        return res.status(500).json({
            message : "Internal server error occured"
        });

    }
};

const getPost =async (req,res) => {

    try{
        const {id} = req.params;
        const blog = await BlogModel.findById(id).populate("userId","userName email");
    
        if(!blog){
            return res.status(404).json({
                message : "No data available"
            })
        }
        return res.status(200).json({
            message : "Data fetched succesfuly",
            data : blog
        })

    }catch(err){

        console.log(err);
        return res.status(500).json({
            message : "Internal server error occured"
        })

    }
};

const updatePost =async (req,res) => {

    try{

        const {id} = req.params;
        const blog = await BlogModel.findById(id).populate("userId");
    
        if(String(req.user._id) !== String(blog.userId._id)){
            return res.status(404).json({
                message : "Action is forbidden"
            })
        }

        await BlogModel.findByIdAndUpdate(id,req.body);
        const updateBlog = await BlogModel.findById(id);
        
        return res.status(200).json({
            message : "post update succesful",
            data : updateBlog
        })

    }catch(err){

        console.log(err);
        return res.status(500).json({
            message : "Internal server error occured"
        })

    }

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