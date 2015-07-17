//====================================================================================================================
//===================================================WEATHER APP======================================================
//=================================================MIGUEL PORTILLA====================================================
//===================================================10 JULY 2015=====================================================
//============================================ADVANCE VISUAL FRAMEWORKS===============================================
//====================================================================================================================


var win = require("ui").createUI();
var geo = require("geo");
var net = require("url");

win.open();

if (Ti.Network.online) {
	// we are connected to internet. Get user location
	geo.getGeoLocation(onLocationGet);
}
else {
	//Not connnected to internet. Get data from local database.
};

//function to be invoked on successful gps operation
function onLocationGet(location){
	net.urlFunction(location,onDataReceive);		//pass lat/long to api and pull weather data
}

function onDataReceive(data){
	//update the window labels with the data received from api
	win.update(data);
	
	//Store the data in local db
}
