var win = require ('ui').createUI();
var geo = require("geo");
var net = require("url");
var netCB = require("urlCoinbase");
var db = require('db');



win.open();

if (Ti.Network.online) {
	// we are connected to internet. Get user location
	geo.getGeoLocation(onLocationGet);
	
	netCB.urlFunction(onCoinbaseDataGet);
}
else {
	//Not connnected to internet. Get data from local database.
	alert("no internet connection, getting last info");
	var weatherData = db.fetch();
	win.update(weatherData);
	
	var cbData = fetchCbData();
	win.updateCoinbaseUI(cbData);		//update coinbase ui with local data
};

//function to be invoked on successful gps operation
function onLocationGet(location){
	net.urlFunction(location,onDataReceive);		//pass lat/long to api and pull weather data
}

//function to be invoked on successful gps operation
function onCoinbaseDataGet(cbData){
	win.updateCoinbaseUI(cbData);		//update coinbase ui
	db.insertCbData(cbData)	;			// save info in db.
	netCB.updateCbCloud(cbData)	;		// upload info to cloud.
	
}

function onDataReceive(data){
	//update the window labels with the data received from api
	win.update(data);
	
	//Store the data in local db
	db.insert(data);
}







/*
// added during app creation. this will automatically login to
// ACS for your application and then fire an event (see below)
// when connected or errored. if you do not use ACS in your
// application as a client, you should remove this block
(function(){
var ACS = require('ti.cloud'),
    env = Ti.App.deployType.toLowerCase() === 'production' ? 'production' : 'development',
    username = Ti.App.Properties.getString('acs-username-'+env),
    password = Ti.App.Properties.getString('acs-password-'+env);

// if not configured, just return
if (!env || !username || !password) { return; }
/**
 * Appcelerator Cloud (ACS) Admin User Login Logic
 *
 * fires login.success with the user as argument on success
 * fires login.failed with the result as argument on error
 */

/*
ACS.Users.login({
	login:username,
	password:password,
}, function(result){
	if (env==='development') {
		Ti.API.info('ACS Login Results for environment `'+env+'`:');
		Ti.API.info(result);
	}
	if (result && result.success && result.users && result.users.length){
		Ti.App.fireEvent('login.success',result.users[0],env);
	} else {
		Ti.App.fireEvent('login.failed',result,env);
	}
});

})();  */

