// import model
const Post = require('../model/post.model.js')
const Comment = require('../model/comment.model.js')



// function or logic & export

exports.createComment = async (req, res) => {
    try {

        // fetch data from req.body
        const {post, body, user} = req.body

        // first we create a object which is insert into a database
        const comment = new Comment({
            post, body, user
        })

        /*
        when we use .save method than we must first create object which is saved to DB.  
        */
        // save new upper comment into a database
        const savedComment = await comment.save();

        // now we need to update in comments array of post and add new id
        // find by Id and than update that array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {
            comments : savedComment._id
        }},{new : true})
        .populate("comments")
        .exec();
        // new : true => after all that work we get updated document return   
        // .populate("comments") => give whole document of that id
        // => we can fetch actual object of that id by => .populate("comments")

        res.status(200).json({
            post : updatedPost,
            data : updatedPost
        })
    } 
    catch (error) {
        console.log("Error is", error.message);
        res.status(500).json({
            error : "Error while creating comment "
        })
    }
}