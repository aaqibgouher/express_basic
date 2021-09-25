const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const db = require('./config/database');
const app = express();

// test the connection
db.authenticate()
    .then(() => console.log("Db connection established.."))
    .catch(err => console.log("error is : "+err))

// used router 
app.use('/api/todos', require('./routes/api/todos_api'));

const PORT = 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));