import React from "react";

const Options = (props) => {
	const items = props.items.map((item) => {
		return (
			<a className="mat-menu__link" href={item.href}>
				<i className="material-icons mat--mr-m">{item.icon}</i> {item.text}
			</a>
		);
	});
	return (
		<nav className="mat-menu mat-menu--block mat--divider-top">		
			{items}			
		</nav>
	)
};

export default Options;