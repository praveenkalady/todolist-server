const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const mongoose = require('mongoose');
const app = require('./app');


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        });
        console.log('Database Connected Successfully...');

    } catch(err){
        console.log(err.messgage);
    }
}
connectDB();

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Listening ${port}`);
})