// import model
const Post = require('../model/post.model.js')
const Like = require('../model/like.model.js')

// add like controller => add like type object in array of like => push
/* post => on which post you like (show only id)
& user  => which user will like 
*/
/*
(1) get data from req.body
(2) create object of like and saved in Like 
(3) find that post._id into Post db and update like array 
*/
exports.likePost = async(req, res) => {

    try {
        //get data from req.body
        const {post, user} = req.body
    
        // create object of like and
        const like =  new like({
            post, user
        })
    
        //  saved in Like 
        const savedLike = await like.save();
    
        // find that post._id into Post db and update like array 
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : savedLike._id}},{new : true})
    
        res.status(200)
        .json({
            data : updatedPost
        })
    } 
    catch (error) {
        return res.status(500)
        .json({
            data : "Error while like a post",
            message : error.message
        })
    }
}


// dislike controller  => remove id from that array of likes => pull
/* post => on which post you dislike (show only id)
& like_id  => when you will like on some post than generate like_id give that id for dislike
*/
exports.unlikePost = async(req, res) => {

}