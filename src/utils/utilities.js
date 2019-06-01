export const determineWeatherIcon = label => {
	let icon;
	switch (label) {
		case "clear-day":
			icon = "wi-day-sunny";
			break;
		case "clear-night":
			icon = "wi-night-clear";
			break;
		case "rain":
			icon = "wi-rain";
			break;
		case "snow":
			icon = "wi-snow";
			break;
		case "sleet":
			icon = "wi-sleet";
			break;
		case "wind":
			icon = "wi-windy";
			break;
		case "fog":
			icon = "wi-fog";
			break;
		case "cloudy":
			icon = "wi-cloudy";
			break;
		case "partly-cloudy-day":
			icon = "wi-day-cloudy";
			break;
		case "partly-cloudy-night":
			icon = "wi-night-cloudy";
			break;
		default:
			icon = "wi-na";
			break;
	}

	return icon;
};

export const daysForecastArray = day => {
	// figure out how to calculate the other days of the upcoming week. should return an array of 8 day indexes, starting with the first one passed into this function
};

export const returnFeaturedCities = () => {
	const usCities = [
		{
			name: "New York, NY, USA",
			lat: 40.7127753,
			long: -74.0059728
		},
		{
			name: "Los Angeles, CA, USA",
			lat: 34.0522342,
			long: -118.2436849
		},
		{
			name: "Chicago, IL, USA",
			lat: 41.8781136,
			long: -87.62979819999998
		},
		{
			name: "Washington, DC, USA",
			lat: 38.9071923,
			long: -77.03687070000001
		},
		{
			name: "Charleston, SC, USA",
			lat: 32.7764749,
			long: -79.93105120000001
		},
		{
			name: "Dallas, TX, USA",
			lat: 32.7766642,
			long: -96.79698789999998
		},
		{
			name: "San Francisco, CA, USA",
			lat: 37.7749295,
			long: -122.41941550000001
		},
		{
			name: "Phoenix, AZ, USA",
			lat: 33.4483771,
			long: -112.07403729999999
		},
		{
			name: "Seattle, WA, USA",
			lat: 47.6062095,
			long: -122.3320708
		},
		{
			name: "Philadelphia, PA, USA",
			lat: 39.9525839,
			long: -75.16522150000003
		}
	];
	const europeanCities = [
		{
			name: "Paris, France",
			lat: 48.85661400000001,
			long: 2.3522219000000177
		},
		{
			name: "Rome, Italy",
			lat: 41.90270080000001,
			long: 12.496235200000001
		},
		{
			name: "London, UK",
			lat: 51.5073509,
			long: -0.12775829999998223
		},
		{
			name: "Barcelona, Spain",
			lat: 41.38506389999999,
			long: 2.1734034999999494
		},
		{
			name: "Amsterdam, Netherlands",
			lat: 52.3679843,
			long: 4.903561399999944
		},
		{
			name: "Moscow, Russia",
			lat: 55.755826,
			long: 37.617299900000035
		},
		{
			name: "Lisbon, Portugal",
			lat: 38.7222524,
			long: -9.139336599999979
		}
	];
	const southAmericanCities = [
		{
			name: "Rio de Janeiro, Brazil",
			lat: -22.9098755,
			long: -43.20949710000002
		},
		{
			name: "Bogota, Colombia",
			lat: 4.648594000000001,
			long: -74.104466
		},
		{
			name: "Lima, Peru",
			lat: -12.0463731,
			long: -77.042754
		},
		{
			name: "Medellin, Colombia",
			lat: 6.244203,
			long: -75.58121189999997
		},
		{
			name: "Carcaras, Venezuela",
			lat: 10.4805937,
			long: -66.90360629999998
		},
		{
			name: "Punta Cana, Dominican Republic",
			lat: 18.5820101,
			long: -68.4054729
		},
		{
			name: "Cancun, Mexico",
			lat: 21.161908,
			long: -86.85152790000001
		}
	];

	// select 3 randomly
	const first = returnIndex(usCities.length - 1);
	const second = returnIndex(europeanCities.length - 1);
	const third = returnIndex(southAmericanCities.length - 1);
	const featuredCities = [
		usCities[first],
		europeanCities[second],
		southAmericanCities[third]
	];
	// return 3
	return featuredCities;
};

const returnIndex = length => {
	const val = Math.floor(Math.random() * length + 1);
	return val;
};
