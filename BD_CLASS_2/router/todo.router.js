const express = require('express');
const router = express.Router();

// import controller 
const {createTodo} = require('../controller/createTodo.controller.js')
const {getTodo, getTodoById} = require('../controller/getTodo.controller.js')
const {updateTodo} = require('../controller/updateTodo.controller.js')
const {deleteTodo} = require('../controller/deleteTodo.controller.js')


router.post('/createTodo', createTodo)
router.get('/getTodo', getTodo)
router.get('/getTodo/:id', getTodoById)  // => :id for id fetch which is given in req.body
router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router