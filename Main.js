var express = require('express');
var app = express();
var fs = require("fs");
var request = require('request');

function turnOnDevice(){
  request.post({
     url: 'https://io.adafruit.com/api/v2/DLCMAH/feeds/dlc/data',
     form: {value: '1'},
     headers: {
        'X-AIO-Key': '51505cbb6c514e63ac2aa7762773683d',
        'Content-Type' : 'application/json'
     },
     method: 'POST'
   },

   function (e, r, body) {
      console.log(body);
  });
}

function turnOffDevice(){
  request.post({
     url: 'https://io.adafruit.com/api/v2/DLCMAH/feeds/dlc/data',
     form: {value: '0'},
     headers: {
        'X-AIO-Key': '51505cbb6c514e63ac2aa7762773683d',
        'Content-Type' : 'application/json'
     },
     method: 'POST'
   },

   function (e, r, body) {
      console.log(body);
  });
}

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost", host, port)

})

app.get('/turnOffDevice', function (req, res) {
  turnOffDevice();
  res.end("Devices has been turned off");
})

app.get('/turnOnDevice', function (req, res) {
  turnOnDevice();
  res.end("Devices has been turned on");
})
