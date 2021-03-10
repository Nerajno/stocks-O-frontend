import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import{ Navigation, Home }from "./components";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
//create your first component
function App () {
	
	return (
		<div className="App">
			<Navigation/>
			<Home/>
					
    </div>
	);
}

export default App;