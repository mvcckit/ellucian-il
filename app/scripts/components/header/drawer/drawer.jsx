import React from "react";
import Buttons from "./buttons/buttons.jsx";
import Options from "./options/options.jsx";

const Drawer = (props) => {
	const items = props.items.map((item) => {
		return (
			<a className="mat-menu__link" href={item.href}>
				<i className="material-icons mat--mr-m">{item.icon}</i> {item.text}
			</a>
		);
	});
	return (
		<div id="drawer" className="mat-drawer">
			<nav className="mat-menu mat-menu--block">		
				{items}			
			</nav>
			<Buttons items={props.buttons}/>
			<Options items={props.options}/>
		</div>
	)
};

export default Drawer;