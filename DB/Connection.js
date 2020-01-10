const mongoose = require('mongoose');

const URL ="mongodb+srv://<username>:<password>@cluster0-pr5p0.mongodb.net/test?retryWrites=true&w=majority";

const connectDB=async ()=>{
   await mongoose.connect(URL,{useUnifiedToplogy:true,useNewUrlParser:true});
   Console.log('db Connected...!');
};

module.exports = connectDB;
