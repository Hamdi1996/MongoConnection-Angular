const express = require('express');
const connectDb = require('./DB/Connection');
const app =express();


connectDb();
const Port = process.env.Port || 3000;
app.listen(Port,()=>console.log("Server Started..."));
