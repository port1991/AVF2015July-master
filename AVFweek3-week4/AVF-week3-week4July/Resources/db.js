
//install database 
Ti.Database.install('wg_weather.sqlite','weatherDB').close();

exports.insert = function(d) {
	var db = Ti.Database.open('weatherDB');
	//var sql = 'INSERT INTO weather VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,DEFAULT)'
	//	db.execute('INSERT INTO weather VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,DEFAULT)', d.current_observation.display_location.full, d.current_observation.display_location.city, d.current_observation.display_location.zip, d.current_observation.display_location.latitude, d.current_observation.display_location.longitude, d.current_observation.display_location.elevation, d.current_observation.observation_time, d.current_observation.local_time_rfc822, d.current_observation.wind_string, d.current_observation.temperature_string, d.current_observation.wind_degrees, d.current_observation.wind_gust_mph, d.current_observation.dewpoint_string, d.current_observation.pressure_in, d.current_observation.solarradiation, d.current_observation.UV, d.current_observation.weather, d.current_observation.icon_url, d.current_observation.temp_f);
	db.execute('INSERT INTO weather (display_location_full,display_location_city,display_location_zip,display_location_latitude,display_location_longitude,display_location_elevation,observation_time,local_time_rfc822,wind_string,temperature_string,wind_degrees,wind_gust_mph,dewpoint_string,pressure_in,solarradiation,UV,weather,icon_url,temp_f) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', d.current_observation.display_location.full, d.current_observation.display_location.city, d.current_observation.display_location.zip, d.current_observation.display_location.latitude, d.current_observation.display_location.longitude, d.current_observation.display_location.elevation, d.current_observation.observation_time, d.current_observation.local_time_rfc822, d.current_observation.wind_string, d.current_observation.temperature_string, d.current_observation.wind_degrees, d.current_observation.wind_gust_mph, d.current_observation.dewpoint_string, d.current_observation.pressure_in, d.current_observation.solarradiation, d.current_observation.UV, d.current_observation.weather, d.current_observation.icon_url, d.current_observation.temp_f);
	db.close();
};

exports.fetch = function() {
	var db = Ti.Database.open('weatherDB');
	var sql = "SELECT * FROM weather ORDER BY time_added DESC";
	var result = db.execute(sql);
	if (result.isValidRow()) {
		var obj = {
			current_observation : {
				display_location : {
					full : result.fieldByName('display_location_full'),
					city : result.fieldByName("display_location_city"),
					zip : result.fieldByName("display_location_zip"),
					latitude : result.fieldByName("display_location_latitude"),
					longitude : result.fieldByName("display_location_longitude"),
					elevation : result.fieldByName("display_location_elevation"),
				},
				observation_time : result.fieldByName("observation_time"),
				local_time_rfc822 : result.fieldByName("local_time_rfc822"),
				wind_string : result.fieldByName("wind_string"),
				temperature_string : result.fieldByName("temperature_string"),
				wind_degrees : result.fieldByName("wind_degrees"),
				wind_gust_mph : result.fieldByName("wind_gust_mph"),
				dewpoint_string : result.fieldByName("dewpoint_string"),
				pressure_in : result.fieldByName("pressure_in"),
				solarradiation : result.fieldByName("solarradiation"),
				UV : result.fieldByName("UV"),
				weather : result.fieldByName("weather"),
				icon_url : result.fieldByName("icon_url"),
				temp_f : result.fieldByName("temp_f"),
			}
		};
		db.close();

		return obj;
	}
};

exports.insertCbData = function(coinBaseData) {
	var db = Ti.Database.open('weatherDB');
	//var sql = 'INSERT INTO weather VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,DEFAULT)'
	//	db.execute('INSERT INTO weather VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,DEFAULT)', d.current_observation.display_location.full, d.current_observation.display_location.city, d.current_observation.display_location.zip, d.current_observation.display_location.latitude, d.current_observation.display_location.longitude, d.current_observation.display_location.elevation, d.current_observation.observation_time, d.current_observation.local_time_rfc822, d.current_observation.wind_string, d.current_observation.temperature_string, d.current_observation.wind_degrees, d.current_observation.wind_gust_mph, d.current_observation.dewpoint_string, d.current_observation.pressure_in, d.current_observation.solarradiation, d.current_observation.UV, d.current_observation.weather, d.current_observation.icon_url, d.current_observation.temp_f);
	db.execute('CREATE TABLE IF NOT EXISTS coinbase_current_Price (id INTEGER PRIMARY KEY, amount VARCHAR, currency VARCHAR)');
	db.execute("INSERT OR REPLACE into coinbase_current_Price(id, amount, currency) VALUES(?,?,?)", 1, coinBaseData.amount, coinBaseData.currency);
	db.close();
};

exports.fetchCbData = function() {
	var data = new Array();
	var db = Ti.Database.open('weatherDB');
	var row_databse = db.execute('SELECT * FROM coinbase_current_Price');  // is defined in whatevernameis.sqlite file		
	while (row_databse.validRow) {
		data['amount'] = row_databse.fieldByName('amount');
		data['currency'] = row_databse.fieldByName('currency');


		row_databse.next();
	}
	db.close();
	
	return data;
};