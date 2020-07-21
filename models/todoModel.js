const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A todo must need an name...']
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        default:'created',
        enum:{
            values:['created','progress','done'],
            message:'status must be created,progress or done'
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Todos = mongoose.model('Todos',todoSchema);

module.exports = Todos;