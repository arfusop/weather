import React, { Component } from "react";
// import axios from "axios";

export default class App extends Component {
	componentDidMount = async () => {
		let response;
		try {
			// https://crossorigin.me/https://google.com

			response = await fetch(
				`https://crossorigin.me/${process.env.REACT_APP_API_URL}/forecast/${
					process.env.REACT_APP_SECRET
				}/40.7128,74.0060`,
				{ mode: "cors" }
			);
			console.log(response);
			console.log("wuuuut");
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return <div>weather app</div>;
	}
}
