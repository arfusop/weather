import React, { Component } from "react";
import Form from "./components/Form";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import Alert from "./components/Alert";
import { format } from "date-fns";

export default class App extends Component {
	state = {
		data: {},
		days: [],
		location: "",
		lat: 0,
		long: 0
	};

	componentDidMount = async () => {};

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
			console.log(dayString);

			

			await this.setState({
				data: response
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { data, location } = this.state;
		const { alerts, currently, daily } = data;
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
				<div className="dailyWeather">
					{daily && <DailyWeather {...dailyProps} />}
				</div>
				<div className="alert">{alerts && <Alert alert={alerts[0]} />}</div>
			</div>
		);
	}
}
