const Todos = require('../models/todoModel');

const catchAsync = fn =>{
    return(req,res,next) =>{
        fn(req,res,next).catch(next);
    }
}
exports.globalErrorHandler = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'Fail';
    res.status(err.statusCode).json({
        status:err.status,
        message: err.message
    })
    next();
}

exports.createTodo = catchAsync(async(req,res,next)=>{
    const todo = await Todos.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            todos:todo
        }
    })
    next();
});

exports.getAllTodos = catchAsync(async(req,res,next)=>{
    const todos = await Todos.find();
    res.status(200).json({
        status:'success',
        data:{
            todos
        }
    })
    next();
})

exports.getTodo = catchAsync(async(req,res,next)=>{
    const todo = await Todos.findById(req.params.id);
    res.status(200).json({
        status:'success',
        data:{
            todos:todo
        }
    })
    next();
})

exports.updateTodo = catchAsync(async(req,res,next)=>{
    const todo = await Todos.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        ststus:'success',
        data:{
            todos:todo
        }
    })
    next();
})

exports.deleteTodo = catchAsync(async(req,res,next)=>{
    const todo = await Todos.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status:'success',
        data:{
            todos:todo
        }
    })
    next();
});

