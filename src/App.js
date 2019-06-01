import React, { Component } from "react";
import Form from "./components/Form";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import HourlyWeather from "./components/HourlyWeather";
import Alert from "./components/Alert";
import Loader from "./components/Loader";
import { returnFeaturedCities } from "./utils/utilities";
import { format } from "date-fns";

export default class App extends Component {
	state = {
		data: {},
		days: [],
		location: "",
		lat: 0,
		long: 0,
		requesting: false
	};

	componentDidMount = async () => {
		const cities = returnFeaturedCities();
		console.log(cities);
	};

	updateLocation = (name, value) => {
		this.setState({
			[name]: value
		});
	};

	updateGoogleLocationData = (location, lat, long) => {
		this.setState({
			location,
			lat,
			long
		});
	};

	submitWeatherSearch = async () => {
		const { lat, long } = this.state;
		let response;
		try {
			this.setState({
				requesting: true
			});
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = `${process.env.REACT_APP_API_URL}forecast/${
				process.env.REACT_APP_SECRET
			}/${lat},${long}`;

			const url = proxy + api;
			const parse = await fetch(url);
			response = await parse.text();
			response = JSON.parse(response);

			const date = new Date();
			const dayIndex = date.getDay();
			const dayString = format(date.getDay(), "dddd");
			const daysArray = [0, 1, 2, 3, 4, 5, 6];
			// loop through the days array, pop out the one that is the current day/split arra into two at the current day
			// push that day into the new days array
			// then loop through remaining day strings and push in order
			console.log(dayString);

			setTimeout(() => {
				this.setState({
					data: response,
					requesting: false
				});
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { data, location, requesting } = this.state;
		const { alerts, currently, daily, hourly, minutely } = data;
		const formProps = {
			location,
			updateGoogleLocationData: this.updateGoogleLocationData,
			updateLocation: this.updateLocation
		};

		const currentWeatherProps = {
			currently,
			location
		};

		const dailyProps = {
			daily
		};

		const hourlyProps = {
			hourly
		};

		return (
			<div>
				<div className="form">
					<div>weather app</div>
					<Form {...formProps} />
					<button onClick={this.submitWeatherSearch}>Submit</button>
				</div>
				<div className="currentWeather">
					{currently && <CurrentWeather {...currentWeatherProps} />}
				</div>
				<hr />
				{hourly && <HourlyWeather {...hourlyProps} />}
				<hr />
				<div className="dailyWeather">
					{daily && <DailyWeather {...dailyProps} />}
				</div>
				<div className="alert">{alerts && <Alert alert={alerts[0]} />}</div>
				{requesting && <Loader />}
			</div>
		);
	}
}
