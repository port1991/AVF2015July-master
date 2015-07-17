//===================================================WEATHER APP======================================================
//=================================================MIGUEL PORTILLA====================================================
//===================================================10 JULY 2015=====================================================
//============================================ADVANCE VISUAL FRAMEWORKS===============================================
//====================================================================================================================
// http://api.wunderground.com/api/beaa77acd06bb26b/conditions/forecast/alert/q/17.382042000000000000,78.48172729999999000.json
//https://www.wetransfer.com/
exports.createUI = function(){
	//main window
	var mainWin = Ti.UI.createWindow({
		backgroundColor: "yellow",
		title: "weather app"
	});
	
	//scroll view
	var scroller = Ti.UI.createScrollView({
		layout: "vertical",
	});
	mainWin.add(scroller);
	
	//display location
	var lbl_location = Ti.UI.createLabel({
		top: '4%',
		//left: '6%',
		color: 'black',
		font: {
			fontSize: 20,
			fontColor: "black"
		}
	});
	
	scroller.add(lbl_location);
	//weather view
	var weatherView = Ti.UI.createView({
		top: '6%',
		left: '6%',
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		layout: 'horizontal'
	});
		
	scroller.add(weatherView);
	//disply description
	var lbl_wDescription = Ti.UI.createLabel({
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	weatherView.add(lbl_wDescription);
	
	// weather image display
	var img_weather = Ti.UI.createImageView({
		left: 15
	});
	weatherView.add(img_weather);
	
	//display temperature
	var lbl_temperature = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20,
			
		}
	});
	
	scroller.add(lbl_temperature);
	
	//display location city
		var lbl_locationCity = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_locationCity);
	
	//display zip code
	
	var lbl_locationZip = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_locationZip);
	
	//display latitude
	
	var lbl_locationlatitude = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_locationlatitude);
	
	// display longitude 
	
	var lbl_locationlongitude = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_locationlongitude);
	
	//Observation time
	
	var lbl_observation_time = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_observation_time);
	
	// display  local time
	
	var lbl_local_time_rfc822 = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_local_time_rfc822);
	
	// wind String
	
	var lbl_wind_string = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_wind_string);
	
	//display  temperature_string
	
	var lbl_temperature_string = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_temperature_string);
	
	// wind_degrees
	
	var lbl_wind_degrees = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_wind_degrees);
	
	// wind_gust_mph
	var lbl_wind_gust_mph = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_wind_gust_mph);
	
	//dewpoint_string
	
	var lbl_dewpoint_string = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_dewpoint_string);
	
	// pressure_in
	
	var lbl_pressure_in = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_pressure_in);
	
	// Display Solar radiation
	var lbl_solarradiation = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_solarradiation);
	
	// dISPLAY UV
	
	var lbl_UV = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_UV);
	
	//display elevation
	
	var lbl_display_location_elevation = Ti.UI.createLabel({
		top: '2%',
		left: '6%',
		color: 'black',
		font: {
			fontSize: 20
		}
	});
	
	scroller.add(lbl_display_location_elevation);
	
	
	mainWin.update = function(d){      // 16/16  
		lbl_location.text = d.current_observation.display_location.full;   
		lbl_locationCity.text = "City: " + d.current_observation.display_location.city;  
		lbl_locationZip.text = "Zip: " + d.current_observation.display_location.zip;  
		lbl_locationlatitude.text = "Latitude: " + d.current_observation.display_location.latitude;  
		lbl_locationlongitude.text = " Longitude: " + d.current_observation.display_location.latitude;
		lbl_display_location_elevation.text = " Elevation: " + d.current_observation.display_location.elevation;
		lbl_observation_time.text = "Obserbation Time: " + d.current_observation.observation_time;
		lbl_local_time_rfc822.text = "Local Time: " + d.current_observation.local_time_rfc822;
		lbl_wind_string.text = "Wind Direction: " + d.current_observation.wind_string;
		lbl_temperature_string.text = "Temperature: " + d.current_observation.temperature_string;
		lbl_wind_degrees.text = "Wind Degrees: " + d.current_observation.wind_degrees;
		lbl_wind_gust_mph.text = "Wind Gust MPH: " + d.current_observation.wind_gust_mph;
		lbl_dewpoint_string.text = "DewPoint: " + d.current_observation.dewpoint_string;
		lbl_pressure_in.text = "Presure In: " + d.current_observation.pressure_in;
		lbl_solarradiation.text = "Solar Radiation: " + d.current_observation.solarradiation;
		lbl_UV.text = "UV: " + d.current_observation.UV;
		
		lbl_wDescription.text = "Weather Description: " + d.current_observation.weather;
		img_weather.image = d.current_observation.icon_url;
		lbl_temperature.text = "Temperature: " + d.current_observation.temp_f;
	};
	
	return mainWin;
};
