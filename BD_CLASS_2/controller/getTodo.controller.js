const Todo = require('../models/todo.model.js')

// get whole database item
exports.getTodo = async(req, res) => {
    try {
        
        // getting all todos
        const todos = await Todo.find({});

        res.status(200)
        .json({
            success : true,
            data : todos,
            message : "Getting all Todos"
        })

    } catch (error) {
        console.error(error);
        res.status(400)
        .json({
            success : false,
            data : "Internal error",
            message : error.message
        })
    }
}


// get single item 
exports.getTodoById = async(req, res) => {
    try {
        
        // getting all todos
        const id = req.params.id

        const todo = await Todo.findById({_id : id});

        if(!todo){
            console.log("please enter valid id");
            res.status(404)
            .json({
                success : false,
                message : "please enter valid id"
            })
        }

        res.status(200)
        .json({
            success : true,
            data : todo,
            message : `Todo ${id} data successfully fetched !!`
        })

    } catch (error) {
        console.error(error);
        res.status(400)
        .json({
            success : false,
            data : "Internal error",
            message : error.message
        })
    }
}