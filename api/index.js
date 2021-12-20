const express = require('express');

// helper libraries
//  MongoDB object modeling tool designed to work in an asynchronous environment
const mongoose = require('mongoose');
//  is a zero-dependency module that loads environment variables from a .env file into process.env
const dotenv = require('dotenv');
// secure Express apps by setting various HTTP headers
const helmet = require('helmet');
// HTTP request middleware logger for Node.js and basically used as a logger.
const morgan = require('morgan');

//routes 
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

const app = express();

// to use .env file
dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to Mongo")
);

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'))

//define application routes
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

app.listen(8800, () => {
    console.log('backend is running')
})