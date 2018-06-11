import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "App/routes/home/home.jsx"

const Content = () => {
	return (
		<main>	
			<Switch> 
				<Route exact path='/' component={Home} replace/>
			</Switch>
		</main>
	);
};


export default Content;