const http = require('http');
var options = {
  host: process.env.SERVER_IP,
  port: 3000,
  path: '/time',
  method: 'GET'
}

var beforeTimestamp = new Date();
var returnedTime;
http.request(options, function(res) {
  // Server object has been received, timestamp end
  var afterTimestamp = new Date();
  res.setEncoding('utf8');
  res.on('data', function (chunk){
    var jsonObject = JSON.parse(chunk);
    returnedTime = jsonObject.time;
    var serverTime = new Date(returnedTime + ((afterTimestamp - beforeTimestamp) / 2));
    console.log("Server time: " + serverTime);
    // Validation uncomment 
    /*
    console.log("Server time: " + serverTime.getTime());
    console.log("Before: " + beforeTimestamp.getTime());
    console.log("After: " + afterTimestamp.getTime());
    console.log("Diff: " + (afterTimestamp.getTime() - beforeTimestamp.getTime()));
    console.log("Server val without rtt: " + returnedTime );
    */
  })
}).end();
