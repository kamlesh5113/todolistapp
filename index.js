const express  = require('express');

const router = require('./Routes/product.js');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const connectdb = require('./db');
connectdb();

app.use('/api/tasks' ,router);


app.listen('5000',(req,res) =>{
    console.log("Server Started");
})

