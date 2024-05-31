const Todo = require('../models/todo.model')

exports.deleteTodo = async (req, res) => {

    try {
        const {id} = req.params
    
        const todo = await Todo.findByIdAndDelete({_id : id})
    
        if( !todo) {
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
            message : "Data Deleted Successfully"
        })
    } catch (error) {

        res.status(500)
        .json({
            success : true,
            data : "Data Not Delete",
            message : error.message
        })
    }
    
}