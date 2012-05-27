var AdModule = (function(){
		var module = {};
		var weatherData;
		var adsToLoad = [];

		$.get('http://localhost:4567/', function(data){
				weatherData = data;
				while( adsToLoad.length > 0 ){
					var callback = adsToLoad.pop();
					callback();
				}
			});

		module.loadAd = function(i) {
			if(typeof(weatherData) === 'undefined'){
				console.log('not loaded for '+i+'...');
				adsToLoad.push( function(){module.loadAd(i)} );
				console.log('ad pushed in the array');
			} else {
				$('#div'+i).html('hello, data is ' + weatherData);
			}
		};

		return module;
	}());
