var getGeoLocation = function(callback) {

	//Ti.Geolocation.purpose = "we need your location to get info about the weather";
	if (!Ti.Geolocation.locationServicesEnabled)
		alert('Location services disabled. Turn on your gps');
	else {
		//	Ti.Geolocation.preferredProvider = "gps";
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_NEAREST_TEN_METERS;
		//Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
		Titanium.Geolocation.distanceFilter = 1;

		Ti.Geolocation.getCurrentPosition(function(a) {
			Ti.API.info('gps response: ', JSON.stringify(a));
			if (a.error)
				Ti.API.error(a.error);
			else if (a.success) {
				// trigger callback with lat/long on gps success.
				callback({
					latitude : a.coords.latitude,
					longitude : a.coords.longitude,
					accuracy : a.coords.accuracy
				});
			}
		});

	}
};

exports.getGeoLocation = getGeoLocation;








/*
var getGeoLocation = function (callback){
		
		Ti.Geolocation.purpose = "we need your location to get info about the weather";
		if(!Ti.Geolocation.locationServicesEnabled)
			alert('Location services disabled. Turn on your gps');
		else{
			Ti.Geolocation.preferredProvider = "gps";
			Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_NEAREST_TEN_METERS;
			//Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
			Titanium.Geolocation.distanceFilter = 1;
			Ti.Geolocation.getCurrentPosition (function() {
				
				Ti.Geolocation.getCurrentPosition (function() {
					
					Ti.Geolocation.getCurrentPosition (function(a) {
						Ti.API.info('gps response: ',JSON.stringify(a));
						if(a.error)
							alert(a.error);
						else if(a.success){
							// trigger callback with lat/long on gps success.
							callback({
								latitude: a.coords.latitude,
								longitude: a.coords.longitude,
								accuracy: a.coords.accuracy
							});
						}
					});
				});
			});
		}
		
};

exports.getGeoLocation = getGeoLocation;


*/