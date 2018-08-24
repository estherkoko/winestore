//package import
const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
//local import
const {mongoose} = require('./db.js');
//add require statement for wine controller created
var wineController = require('./controllers/wineController.js');


//call express function to use it and configure express middleware
var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
//start the express server
app.listen(3000, () => console.log('Server started at port : 3000'));

//call middleware function to use controller
app.use('/wine', wineController);