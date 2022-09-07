require('dotenv').config()
const express = require("express")
const app = express()
const MongoClient = require('mongoDb').MongoClient;
var cors = require('cors')
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
let userRoute = require("./routes/userRoutes");

//project model
//let projectModel = require("../models/project")

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//routes
app.use('/api/projects',projectRoutes)

app.use('/api/user',userRoute)


var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
   // createColllection('Books')
   // createUserColllection('Users')
})

