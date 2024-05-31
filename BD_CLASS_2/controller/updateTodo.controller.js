const Todo = require('../models/todo.model')

exports.updateTodo = async(req, res) => {
    try {
        const {id} = req.params;

        // new title, description which is updated
        const {title, description, updatedAt} = req.body

        const todo = await Todo.findByIdAndUpdate( 
            {_id : id},
            {title, description, updatedAt : Date.now()}
        )

        res.status(200)
        .json({
            success : true,
            data : todo,
            message : "Data updated successfully"
        })
        
    } catch (error) {
        res.status(500)
        .json({
            success : false,
            data : "Data not update",
            message : error.message
        })
        
    }
}