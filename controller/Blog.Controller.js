const getAllPost = (req,res) => {
    res.status(200).json({
        message : "Dummy response from getAllPost"
    })
};

const createPost = (req,res) => {
    res.status(200).json({
        message : "Dummy response from createPost"
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