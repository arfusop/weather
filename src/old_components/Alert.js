import React from "react";

const Alert = ({ alert }) => {
	return (
		<div>
			<div className="title">{alert.title}</div>
			<div className="message">{alert.description}</div>
			<div className="url">{alert.uri}</div>
		</div>
	);
};

export default Alert;
