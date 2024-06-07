const express = require('express');
const router = express.Router();

// import controller
const { createComment } = require("../controller/comment.controller.js")
const { createPost, fetchAllPost } = require("../controller/post.controller.js")
const { likePost, unlikePost } = require("../controller/like.controller.js")



router.post('/create/comment', createComment)
router.post('/create/post', createPost)
router.get('/fetch/post', fetchAllPost)
router.post('/like/post', likePost)
router.post('/unlike/post', unlikePost)





// Export Controller
module.exports = router;