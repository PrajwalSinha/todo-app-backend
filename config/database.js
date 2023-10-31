const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
  mongoose.connect(process.env.DATABASE_URL,{
    useNewurlParser:true,
    useUnifiedTopology:true
  })
  .then(()=>console.log("connection Successful"))
  .catch( (error)=>{
    console.log("Received an error");
    console.log(error.message);
    //iska kya matlab hai?
    process.exit(1);
  });
}
module.exports=dbConnect;