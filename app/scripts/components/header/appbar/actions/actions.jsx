import React from "react";

const Actions = (props) => {
	const items = props.items.map((item) => {
		return (
			<a className="mat-menu__link" href={item.href}>
				<i className="material-icons">{item.icon}</i>
			</a>
		);
	});

	return (
		<nav className="mat-menu mat-menu--appbar">
			{items}		
		</nav>
	)
};

export default Actions;