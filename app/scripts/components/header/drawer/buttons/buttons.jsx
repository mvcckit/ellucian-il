import React from "react";
import {Fragment} from "react";

const Buttons = (props) => {
	const items = props.items.map((item) => {
		return (
			<div className="mat--ma-s">
				<a className="mat-button mat-button--secondary mat-button--block" href={item.href}>
					{item.text}
				</a>
			</div>
		);
	});
	return (
		<Fragment>
			{items}				
		</Fragment>
	)
};

export default Buttons;