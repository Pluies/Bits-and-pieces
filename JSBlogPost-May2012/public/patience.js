var weatherData;

function loadWeatherData() {
	$.get('http://localhost:4567/', function(data){
			weatherData = data;
		});
}

// Start loading the data asap
loadWeatherData();

function loadAd(i) {
	if(typeof(weatherData) === 'undefined'){
		console.log('not loaded for '+i+'...');
		setTimeout('loadAd('+i+')', 1000);
	} else {
		$('#div'+i).html('hello, data is ' + weatherData);
	}
}
