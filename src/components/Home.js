import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Slider from "./Slider";

const home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
		</div>
	);
};

export default home;
