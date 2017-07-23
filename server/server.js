var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var saleRoute = require('./routes/sale.route.js');
var rentRoute = require('./routes/rent.route.js');
var mongoose = require('mongoose');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/

app.use('/rent', rentRoute);

app.use('/sale', saleRoute);

/** ---------- GET INDEX HTML ---------- **/
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

/** -------- MONGOOSE CONNECTION --------**/
//targeting realestate db
var databaseUrl = 'mongodb://localhost:27017/realestate';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});



/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
