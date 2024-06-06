// import model
const Post = require('../model/post.model.js')


exports.createPost = async(req, res) => {
    try {
    
        const {title, body} = req.body
        const post = new Post({
            title, body
        })
        const savedPost = await post.save();

        res.status(200)
        .json({
            data : savedPost
        })
        
    } 
    catch (error) {
        console.log("Error is :" ,error.message)
        res.status(500)
        .json({
            error : "Error while creating post"
        })
    }
}

exports.fetchAllPost = async(req, res) => {
    try {
        // here we get like's whole object not just single i'd
        const post = Post.find({}).populate("likes").populate("comments").exec();

        res.status(200)
        .json({
            data : post
        })
    } catch (error) {
        console.log("Error is :" ,error.message)
        res.status(200)
        .json({
            data : "Error while fetching all post"
        })
    }
}