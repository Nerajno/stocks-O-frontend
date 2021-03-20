import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import{ Navigation, Home }from "./components";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Favorites from "./components/Favorites";
import MyPortfolio from "./components/MyPortfolio";
//create your first component





function App () {
	
	return (
		<div className="App">
			<Router>
				<Navigation/>
				
				{/* <Favorites/> */}
				<Switch>
					<Route path="/" exact component={()=><Home/>}/>
					<Route path="/home" exact component={()=><Home/>}/>
					<Route path="/login" exact component={()=><LogIn/>}/>
					<Route path="/signup" exact component={()=><SignUp/>}/>
					<Route path="/favorites" exact component={()=><Favorites/>}/>
					<Route path="/myportfolio" exact component={()=><MyPortfolio/>}/>
				</Switch>
			</Router>
    	</div>
	);
}
export default App;