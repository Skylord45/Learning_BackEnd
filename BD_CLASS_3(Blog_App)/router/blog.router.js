const express = require('express');
const router = express.Router();

// import controller
const { createComment } = require("../controller/comment.controller.js")
router.post('/create/comment', createComment)




// Export Controller
module.exports = router;