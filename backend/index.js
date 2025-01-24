const express=require('express');
const dbConnect= require('./config/database')
require('dotenv').config();
const user = require('./routes/userRoutes');
const response = require('./routes/responseRoutes');
const report = require('./routes/reportRoutes');
const cookieParser = require('cookie-parser');

const PORT=process.env.PORT || 5000;

const app=express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');  // Allow only this origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1',user);
app.use('/api/v1',response);
app.use('/api/v1',report);

app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`);
})

dbConnect();

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`);
})