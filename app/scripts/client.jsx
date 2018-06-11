import React from "react";
import {render} from "react-dom";
import Header from "./components/header/header.jsx";
import Content from "./components/content/content.jsx";
import { HashRouter } from 'react-router-dom'

render (
	<HashRouter>
		<div>
			<Header/>
			<Content/>
		</div>
	</HashRouter>
	, document.getElementById("root")
)
