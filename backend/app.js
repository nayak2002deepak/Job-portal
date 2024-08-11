const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler= require("./middleware/error");
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const jobTypeRoute = require('./routes/jobsTypeRoutes')
const jobRoute = require('./routes/jobsRoutes')

 


// database connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => {
    app.listen(process.env.PORT,'0.0.0.0',()=>{
console.log("connection sucessful")
    })
})
.catch((e) => console.log(e));



// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));
app.use(cookieParser());
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send("helo");

// })
app.use('/',authRoutes);
app.use('/',userRoutes);
app.use('/',jobTypeRoute);
app.use('/',jobRoute);


app.use(errorHandler);






