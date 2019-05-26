import React, { Component } from "react";
// import axios from "axios";

export default class App extends Component {
	state = {
		data: {}
	};
	componentDidMount = async () => {
		let response;
		try {
			// https://crossorigin.me/https://google.com
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = `${process.env.REACT_APP_API_URL}forecast/${
				process.env.REACT_APP_SECRET
			}/40.7128,74.0060`;
			const url = proxy + api;
			const parse = await fetch(url);
      response = await parse.text();
      response = JSON.parse(response);
			console.log(response);
			this.setState({
				data: response
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return <div>weather app</div>;
	}
}
