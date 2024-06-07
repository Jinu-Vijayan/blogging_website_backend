const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    tags : {
        type : Array,
        required : true
    },
    comment : [
        {
            comment : {
                type : String,
                required : true
            },
            userId : {
                type : mongoose.Types.ObjectId,
                required : true
            },
            createAt : {
                type : Date,
                default : new Date()
            }
        }
    ]
},
{
    timestamps : true
});

const BlogModel = mongoose.model("blogs",blogSchema);

module.exports = BlogModel;