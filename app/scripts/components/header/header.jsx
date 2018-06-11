import React from "react";
import AppBar from "./appbar/appbar.jsx";
import Drawer from "./drawer/drawer.jsx";
import Config from "./header.json";

const Header = (props) => {
	const {title, actions, drawer, buttons, options} = Config;

	return (
		<div>
			<AppBar items={actions} title={title} />
			<Drawer items={drawer} buttons={buttons} options={options}/>
	 	</div> 
	)
};

export default Header;