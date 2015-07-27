

exports.createUI = function(){
// this sets the background color of the master UIView (when there are no windows/tab groups on it)

Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var windowWeather = require('weather').createWeather();
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Weather',
    window: windowWeather
});

//
// create controls tab and root window
//
var windowCamera = require('camera').createCameraWin();
var cameraTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Camera',
    window: windowCamera
});

//coinbase info

var windowCoinBase = require('coinbaseData').coinBaseDataFunction();

var coinbaseTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'CoinBase',
    window: windowCoinBase
});



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(cameraTab);
tabGroup.addTab(coinbaseTab); 
 

tabGroup.update = windowWeather.update;
tabGroup.updateCoinbaseUI = windowCoinBase.updateUI;

// open tab group
//tabGroup.open();

	return tabGroup;
};