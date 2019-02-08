var express = require('express');
var app = express();

app.get('/time', function (req,res) {
  console.log('Client request received...');
  var timestamp = new Date();
  res.json({time: timestamp.getTime()});
});

module.exports = app;
