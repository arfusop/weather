import React, { Component } from "react";
import Script from "react-load-script";

export default class Form extends Component {
	state = {
		location: "",
		lat: 0,
		long: 0
	};

	handleScriptLoad = () => {
		// Declare Options For Autocomplete
		var options = { types: ["geocode"] };

		// Initialize Google Autocomplete
		/*global google*/
		this.autocomplete = new google.maps.places.Autocomplete(
			document.getElementById("locationSearch"),
			options
		);
		// Fire Event when a suggested name is selected
		this.autocomplete.addListener("place_changed", () => {
			// Extract City From Address Object
			let addressObject = this.autocomplete.getPlace();
			const { formatted_address, geometry } = addressObject;
			this.updateGoogleLocationData(
				formatted_address,
				geometry.location.lat(),
				geometry.location.lat()
			);
		});
	};

	updateGoogleLocationData = (location, lat, long) => {
		this.setState({
			location,
			lat,
			long
		});
	};

	updateInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		const { location } = this.state;

		return (
			<div>
				<Script
					url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfBb7wMtoqYklIWJzZVv62bWsVvfIfZg0&libraries=places"
					onLoad={this.handleScriptLoad}
				/>
				<input
					onChange={e => this.updateInput(e)}
					name="location"
					value={location}
					placeholder="Location"
					id="locationSearch"
					type="text"
				/>
			</div>
		);
	}
}
