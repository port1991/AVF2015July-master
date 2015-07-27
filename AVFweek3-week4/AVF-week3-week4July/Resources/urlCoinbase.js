var urlFunction = function(onSuccess) {
	var url = "https://coinbase.com/api/v1/prices/spot_rate"; // api url
		
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
	        Ti.API.info("Response: "+this.responseText);
	    	var json=JSON.parse(this.responseText); // parse api response text into json object
	    	onSuccess(json);
	    },
	    onerror: function(e) {
	        Ti.API.info(JSON.stringify(e));
	        alert('Network error');
	    },
	    timeout:10000
	});
	xhr.open("GET", url);
	xhr.send();

};

exports.urlFunction = urlFunction;

exports.updateCbCloud = function(cbData){
	var Cloud = require("ti.cloud"); // initializing module
	Cloud.Users.login({
	    login: 'portilla_1@msn.com',
	    password: 'mhpr1991'
	}, function (e) {
	    if (e.success) {
	    	Cloud.KeyValues.set({
			    name: 'coinbase',
			    value: JSON.stringify(cbData)
			}, function (e) {
			    if (e.success) {
			        console.log('Success');
			        return true;
			    } else {
			        console.log('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			        return false;
			    }
			});
	        //alert('Success:\n' +'id: ' + user.id + '\n' +'sessionId: ' + Cloud.sessionId + '\n' +'username: ' + user.username);
	    } else {
	    	console.log("Login error: "+ e);
	        //alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};
