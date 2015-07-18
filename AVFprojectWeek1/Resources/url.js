var urlFunction = function(location,onSuccess) {
	var url = "http://api.wunderground.com/api/beaa77acd06bb26b/conditions/forecast/alert/q/"+location.latitude+","+location.longitude+".json" ; // weather api url
		
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(d){
		console.log(d);
		var json = JSON.parse(this.responseText);
		var weather = json.current_observation.weather;
		var location = json.current_observation.display_location.full;
		var temperature = json.current_observation.temperature_string;
		console.log(weather, location,temperature);
		onSuccess(json);		//call the success function and pass all data to it.
	};
	
	xhr.open("GET", url);  //notes:::::: gets the url
	xhr.send();

};

exports.urlFunction = urlFunction;

