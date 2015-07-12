//====================================================================================================================
//===================================================WEATHER APP======================================================
//=================================================MIGUEL PORTILLA====================================================
//===================================================10 JULY 2015=====================================================
//============================================ADVANCE VISUAL FRAMEWORKS===============================================
//====================================================================================================================


var url = "http://api.wunderground.com/api/beaa77acd06bb26b/conditions/q/CA/San_Francisco.json"; // weather api url
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        //notes::::::                                     --------        Ti.API.info("Response: "+this.responseText);
    	var json=JSON.parse(this.responseText);
    	Ti.App.Properties.setObject("weather_info", json); //notes:::::: this sav the weather api json
    	showInfo(); // calling the function to view information
    	
    },
    onerror: function(e) {
        //Ti.API.debug(e.error);  notes::::::  leaving this coment for reference
        showInfo(); //notes:::::: if error then show information if there is old information found
        alert('Network error');
    },
    timeout:10000 //notes::::::   set this time to give the app more time to get info. suggested by teacher.
});
xhr.open("GET", url);  //notes:::::: gets the url
xhr.send();

function showInfo(){
	var json = Ti.App.Properties.getObject("weather_info", null);
	
	var tabGroup = Titanium.UI.createTabGroup({
		
		tabsBackgroundColor: 'black'
	});
	
	var dataWindow = Ti.UI.createWindow({
		backgroundImage : '1.png',
		fullscreen : true,
		layout: 'vertical',
		title : "Weather Information",
		backgroundColor: 'black'
	});
	
	//===================================
	//=======testing codes Area
	
	
	//here i have being testing animations but it seems is not supported
	
	
	
	
	
	//==============================================================================
	
	//====tab1====== this is the icon that will appear on the buttom of the app  "the tab"
	var tab1 = Titanium.UI.createTab({
		//icon : 'KS_nav_views.png',
		icon : 'KS_nav_views.png',
		title : 'Weather',
		window : dataWindow
		
	});
	
	//=============== if statement =======================================
	if(json != null){
		// the main scroll view where all the information will be included,the scroll view
		var scrollView = Ti.UI.createScrollView({
			showVerticalScrowIndicator : true,
			layout : "vertical"
		});
		
		//================================================================
		
		//---------- IMAGE OF THE WEATHER APP LOGO -------------
		var imgWeather = Ti.UI.createImageView({
			//image: json.current_observation.icon_url,
			backgroundImage: 'weather_image.png',
			width: 120,
			height: 120,
			top: 10
		});
		
		// weather location
		var lblLocation = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Location: ' + json.current_observation.display_location.full,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		
		// weather observation time
		var lblObserveTime = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Observation Time: ' + json.current_observation.observation_time,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// weather type
		var lblWeather = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Weather: ' + json.current_observation.weather,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// temparature
		var lblTemperature = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Temperature: ' + json.current_observation.temperature_string,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// humidity
		var lblHumidity = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Humidity: ' + json.current_observation.relative_humidity,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// wind type
		var lblWind = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Wind: ' + json.current_observation.wind_string,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// wind direction
		var lblWindDir = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Wind Direction: ' + json.current_observation.wind_dir,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// wind(degrees)
		var lblWindDegrees = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Wind(degrees): ' + json.current_observation.wind_degrees,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// wind(mph)
		var lblWindMph = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Wind(mph): ' + json.current_observation.wind_mph,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// pressure(mb)
		var lblPressureMb = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Pressure(mb): ' + json.current_observation.pressure_mb,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// pressure(in)
		var lblPressureIn = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Pressure(in): ' + json.current_observation.pressure_in,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		// dewpoint
		var lblDewPoint = Ti.UI.createLabel({
			color: 'black',
			left: 10,
			text: 'Dewpoint: ' + json.current_observation.dewpoint_string,
			//backgroundColor: 'black',
			borderRadius: 5,
			top: 10,
			BackgroundColor: '#0099CC',
			font:{fontSize:20},
			borderRadius: 4,
			textAlign:'center'
		});
		
		
		scrollView.add(imgWeather);
		scrollView.add(lblLocation);
		
		scrollView.add(lblObserveTime);
		scrollView.add(lblWeather);
		scrollView.add(lblTemperature);
		scrollView.add(lblHumidity);
		scrollView.add(lblWind);
		scrollView.add(lblWindDir);
		scrollView.add(lblWindDegrees);
		scrollView.add(lblWindMph);
		scrollView.add(lblPressureMb);
		scrollView.add(lblPressureIn);
		scrollView.add(lblDewPoint);
		
		dataWindow.add(scrollView);
	}
	else {
		//notes:::::: when there is no information to show(for connectivity error or api result null)
		var lblInfo = Ti.UI.createLabel({
			color: 'white',
			text: 'No information found',
			backgroundColor: 'red'
		});
		dataWindow.add(lblInfo);
	}
	
	tabGroup.addTab(tab1);
	tabGroup.open();
	
}