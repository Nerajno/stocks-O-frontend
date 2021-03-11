import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import{ Navigation, Home }from "./components";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignUp from "./components/SignUp"
//create your first component
function App () {
	
	return (
		<div className="App">
			<Navigation/>
			{/* <Home/> */}
			<SignUp/>
					
    </div>
	);
}

export default App;