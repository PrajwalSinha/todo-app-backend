//Instantiate the server
const express=require('express');
const app=express();

//Although neeche wala line yaha likhna bad practice hai par abhi ke liye hum yaha likh rhe hai.

//activating the server
// app.listen(3000,()=>{
//   console.log("App is running successfully");
// });

//best practice
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo ASPI routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
  console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
  res.send(`<h1>This is Homepage baby</h1>`);
})