import React, { Component } from "react";
import { ThemeProvider } from "emotion-theming";
import Form from "./components/Form";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import Alert from "./components/Alert";
import Featured from "./components/Featured";
import Loader from "./components/Loader";
import Grid from "./components/styled/Grid";

import Title from "./components/styled/Title";
import {
	returnFeaturedCities,
	currentTheme,
	determineTempColor
} from "./utils/utilities";

export default class App extends Component {
	state = {
		data: {},
		location: "",
		lat: 0,
		long: 0,
		requesting: false,
		featured: [],
		theme: {}
	};

	componentDidMount = async () => {
		document.addEventListener("keypress", e => {
			if (e.key === 'Enter') {
				
			}
		});

		const theme = currentTheme(0);
		const cities = returnFeaturedCities();
		// make api calls for each of the 3 returning cities
		let featuredFirst;
		let featuredSecond;
		let featuredThird;

		try {
			this.setState({
				requesting: true
			});
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const first = `${process.env.REACT_APP_API_URL}forecast/${
				process.env.REACT_APP_SECRET
			}/${cities[0].lat},${cities[0].long}`;
			const second = `${process.env.REACT_APP_API_URL}forecast/${
				process.env.REACT_APP_SECRET
			}/${cities[1].lat},${cities[1].long}`;
			const third = `${process.env.REACT_APP_API_URL}forecast/${
				process.env.REACT_APP_SECRET
			}/${cities[2].lat},${cities[2].long}`;

			const firstApi = proxy + first;
			const secondApi = proxy + second;
			const thirdApi = proxy + third;

			const firstResponse = await fetch(firstApi);
			const secondResponse = await fetch(secondApi);
			const thirdResponse = await fetch(thirdApi);

			featuredFirst = await firstResponse.text();
			featuredFirst = JSON.parse(featuredFirst);
			featuredFirst.name = cities[0].name;

			featuredSecond = await secondResponse.text();
			featuredSecond = JSON.parse(featuredSecond);
			featuredSecond.name = cities[1].name;

			featuredThird = await thirdResponse.text();
			featuredThird = JSON.parse(featuredThird);
			featuredThird.name = cities[2].name;

			this.setState({
				featured: [featuredFirst, featuredSecond, featuredThird],
				requesting: false,
				theme
			});
		} catch (error) {
			console.log(error);
		}
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

	handleFeaturedClick = data => {
		console.log(data);
		this.setState(
			{ lat: data.latitude, long: data.longitude, location: data.name },
			() => this.submitWeatherSearch()
		);
	};

	render() {
		const { data, featured, location, requesting, theme } = this.state;
		const { alerts, currently, daily, hourly } = data;
		const formProps = {
			location,
			updateGoogleLocationData: this.updateGoogleLocationData,
			updateLocation: this.updateLocation,
			submitWeatherSearch: this.submitWeatherSearch
		};

		const currentWeatherProps = {
			currently,
			location,
			timezone: data.timezone,
			hourly
		};

		const dailyProps = {
			currentTemp: currently && currently.temperature,
			daily
		};

		const featuredProps = {
			featured,
			handleClick: this.handleFeaturedClick
		};

		return (
			<ThemeProvider theme={theme}>
				<Grid className="appGrid">
					<div className="form">
						<Title className="AppTitle" titleFont="30px">
							Just Another Weather App
						</Title>
						<Form {...formProps} />
					</div>
					<div className="weatherData">
						{requesting && <Loader />}
						{currently && (
							<div className="currentWeather">
								{currently && <CurrentWeather {...currentWeatherProps} />}
								<div className="detailedWeather">
									<Title>Daily</Title>
									<div
										className="dataRow"
										style={{
											border: `2px solid ${determineTempColor(
												currently.temperature
											)}`
										}}
									>
										<div
											className="daily"
											style={{
												backgroundColor: theme.cardBg,
												color: theme.cardFont
											}}
										>
											<DailyWeather {...dailyProps} />
										</div>
									</div>
								</div>
							</div>
						)}
						{alerts && false && (
							<div className="alert">
								<Alert alert={alerts[0]} />
							</div>
						)}
						{featured.length ? <Featured {...featuredProps} /> : null}
					</div>
					<div className="footer">
						<div className="links">
							<a
								className="footerLink"
								href="https://github.com/arfusop"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="footerIcon fab fa-github-square" />
							</a>
							<a
								className="footerLink"
								href="https://www.linkedin.com/in/phil-arfuso"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="footerIcon fab fa-linkedin" />
							</a>
						</div>
						<div className="branding">Made by Phil Arfuso</div>
					</div>
				</Grid>
			</ThemeProvider>
		);
	}
}
