const express = require('express');
const router = express.Router();

// import controller

const {dummy} = require('../controller/post.controller.js')




// mapping with controller
router.get('/dummyRoute', dummy)



// export
module.exports = router