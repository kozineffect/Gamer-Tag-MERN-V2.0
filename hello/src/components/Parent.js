import React from 'react';
import "../App.css";
import Child from "./Child.js";

const Parent = () => {
	return (
		<div className="Parent">
			<div className="dad"></div>
			<Child />
		</div>);
};

export default Parent