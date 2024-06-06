const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({

    // user :{
    //     type : String,
    //     required : true
    // },
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,   // who is like your post 
        ref : "Like" ////reference to the like model
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,  // who is comment your post 
        ref : "Comment" // //reference to the comment model
    }]
})

module.exports = mongoose.model("Post", postSchema)