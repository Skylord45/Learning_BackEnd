const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema(
  {
   title : {
        type : String,
        required : true,
        maxLength : 50
    },
    description : {
        type : String,
        required : true,
        maxLength : 50
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now()
    },
    updatedAt : {
        type : Date,
        required : true,
        default : Date.now()
    }    
},{timestamps : true}
)

// module.exports = mongoose.model("Todo",todoSchema);

const Todo = mongoose.model("todos", todoSchema)
module.exports = Todo