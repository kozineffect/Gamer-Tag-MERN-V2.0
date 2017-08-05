import React from "react";
import "../App.css";
import avatar from '../images/shadowArcher.jpg';

const GTag = () => {
	return (<div className="col-xs-6">
			<img id="avatar" src={avatar} alt="My GamerTag" />
		</div>)
}

export default GTag;