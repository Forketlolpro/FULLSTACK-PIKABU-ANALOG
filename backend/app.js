const express =require("express");
const mongoose = require('mongoose');
const usersRoutes = require("./api/routes/users");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://forket:199115@todo-dju6z.mongodb.net/todo_db?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   if (req.method === 'OPTIONS') {
       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
       return res.status(200).json({});
   }
   next();
});
app.use('/users', usersRoutes);
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500).json({
       error: {
           message: error.message
       }
   })
});


module.exports = app;