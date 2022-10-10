require("events").EventEmitter.defaultMaxListeners = 15;

const express=require('express')
const cors = require("cors");
const server=express();
const cookieParser = require("cookie-parser");
const userAuth=require('./router/userAuth');


server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use('/auth',userAuth);

server.set('trust proxy', true);

server.get("/",(req,res)=>{
    res.send("Welcome to the Real state app")
})


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });

  });

module.exports=server;