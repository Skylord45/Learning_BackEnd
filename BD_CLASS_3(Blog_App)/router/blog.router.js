const express = require('express');
const router = express.Router();

// import controller
const { createComment } = require("../controller/comment.controller.js")
const { createPost, fetchAllPost } = require("../controller/post.controller.js")




router.post('/create/comment', createComment)
router.post('/create/post', createPost)
router.get('/fetch/post', fetchAllPost)





// Export Controller
module.exports = router;