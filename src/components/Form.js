import React, { Component } from "react";
import Script from "react-load-script";

export default class Form extends Component {
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
				geometry.location.lng()
			);
		});
	};

	updateGoogleLocationData = (location, lat, long) => {
		const { updateGoogleLocationData } = this.props;
		updateGoogleLocationData(location, lat, long);
	};

	updateInput = e => {
		const { updateLocation } = this.props;
		updateLocation(e.target.name, e.target.value);
	};

	render() {
		const { location } = this.props;

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
