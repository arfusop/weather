import React from "react";

const Loader = () => {
	return (
		<div className="preloader">
			<div className="loaderContainer">
				<div className="preloader-top">
					<div className="preloader-top-sun">
						<div className="preloader-top-sun-bg" />
						<div className="preloader-top-sun-line preloader-top-sun-line-0" />
						<div className="preloader-top-sun-line preloader-top-sun-line-45" />
						<div className="preloader-top-sun-line preloader-top-sun-line-90" />
						<div className="preloader-top-sun-line preloader-top-sun-line-135" />
						<div className="preloader-top-sun-line preloader-top-sun-line-180" />
						<div className="preloader-top-sun-line preloader-top-sun-line-225" />
						<div className="preloader-top-sun-line preloader-top-sun-line-270" />
						<div className="preloader-top-sun-line preloader-top-sun-line-315" />
					</div>
				</div>
				<div className="preloader-bottom">
					<div className="preloader-bottom-line preloader-bottom-line-lg" />
					<div className="preloader-bottom-line preloader-bottom-line-md" />
					<div className="preloader-bottom-line preloader-bottom-line-sm" />
					<div className="preloader-bottom-line preloader-bottom-line-xs" />
				</div>
			</div>
		</div>
	);
};

export default Loader;
