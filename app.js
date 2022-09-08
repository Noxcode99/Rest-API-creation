const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes 
const postsRoute = require('./routes/posts');


app.use('/posts', postsRoute);

//ROUTES - The ability to create routes simply 
app.get('/', (req,res) => {
    res.send('We are on home');
});

// Connect to db
mongoose
.connect(process.env.MONGO_URI, { 
    useNewURLParser: true})
.then(() => console.log('DB Connected!'))
.catch(err => console.error(err));

//How do we start listening to the server 
app.listen(3000);