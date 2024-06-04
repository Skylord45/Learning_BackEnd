// Import Mongoose 
const mongoose = require('mongoose')

// define Schema
const commentSchema = new mongoose.Schema({

    post : {
        type : mongoose.Schema.Types.ObjectId,  // on which post you are comment
        ref : "Post" //reference to the post model
    },
    body : {
        type : String,
        required : true,
    },
    user : {
        type : String,
        required : true,
    }
}) 

// export
module.exports = mongoose.model("Comment", commentSchema)
