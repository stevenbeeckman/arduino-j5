var five = require("johnny-five")
    , board = new five.Board();



board.on("ready", function() {
	// https://github.com/rwaldron/johnny-five/wiki/Sensor
	var photoSensor = new five.Sensor("A0"); // use default options
	
	var options = {
	    pin: "A0"
	    , freq: 500
	    , threshold: 1
	};
	photoSensor = new five.Sensor(options);
	/*	photoSensor.on("change", function(){
		console.log("Change in light detected, new value is " + this.value + ".");
	});
	*/
	photoSensor.on("data", function(){
		console.log("Current value of the light sensor is " + this.value + ".");
	});


});