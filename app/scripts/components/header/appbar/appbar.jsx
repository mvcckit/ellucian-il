import React from "react";
import Title from "./title/title.jsx";
import Actions from "./actions/actions.jsx";

const AppBar = (props) => {
	const {title, items} = props;

	return (
		<div className="mat-section mat--bg-primary">
			<div className="mat-section__body">
				<div className="mat-toolbar mat--bg-primary">
					<Title title={title}/>
					<Actions items={items}/>
				</div>
			</div>
		</div>
	)
};

export default AppBar;