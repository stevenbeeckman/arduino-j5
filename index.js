var five = require("johnny-five")
    , board = new five.Board();

var request = require('request');

board.on("ready", function() {
	// https://github.com/rwaldron/johnny-five/wiki/Sensor
	var photoSensor = new five.Sensor("A0"); // use default options
	
	var options = {
	    pin: "A0"
	    , freq: 1000
	    , threshold: 1
	};
	photoSensor = new five.Sensor(options);
	/*	photoSensor.on("change", function(){
		console.log("Change in light detected, new value is " + this.value + ".");
	});
	*/
	photoSensor.on("data", function(){
		var measurement = this.value;
		console.log("Current value of the light sensor is " + measurement + ".");
		request.post(
			     'http://iotbe-njugbe.herokuapp.com/sensor/0/measurements'
			     , {value: measurement}
			     , function(error, response, body){
				 if(!error && response.statusCode == 200){
				     console.log(body);
				 }
			     }
);
	});


});