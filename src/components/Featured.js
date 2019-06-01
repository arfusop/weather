import React from "react";

const Featured = featured => {
	return (
    <div>
    featured cities
			{featured.featured.map(city => {
				const {
					name,
					apparentTemperature,
					temperature,
					summary
				} = city.currently;

				const { temperatureHigh, temperatureLow } = city.daily.data[0];
				return (
					<div>
						<div>{name}</div>
						<div>
							{Math.round(temperatureHigh)} | {Math.round(temperatureLow)}
						</div>
						<div>{Math.round(temperature)}</div>
						<div>Feels like {apparentTemperature}</div>
						<div>{summary}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Featured;
