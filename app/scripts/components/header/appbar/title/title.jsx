import React from "react";

const Title = (props) => {
	const {title} = props;
	return (
		<nav className="mat-menu mat-menu--appbar">
			<a className="mat-menu__link" href="javascript: $matToggle('#drawer')">
				<i className="material-icons">menu</i>
			</a>
			<a className="mat-menu__link" href="#/">
				{title}
			</a>			
		</nav>
	)
};

export default Title;