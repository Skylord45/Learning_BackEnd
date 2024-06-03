// import model
const Todo = require('../models/todo.model.js')


// direct export (new syntext)
exports.createTodo = async(req, res) => {

    try {

        // extract title and description from req.body
        const {title, description} = req.body
    
        // validation
        if(! title || ! description){
            console.error("Please enter title or description !!")
        }

        // create object of title and description and create a new entry in database
        const response = await Todo.create({title, description})
        
        // send respone
        res
        .status(200)
        .json({
            success : true,
            data : response,
            message : "Data Created Successfully"
        })

    } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({
            success : false,
            data : "Internal error",
            message : error.message
        })   
    }
}
