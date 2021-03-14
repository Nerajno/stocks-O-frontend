import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import{ Navigation, Home }from "./components";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Favorites from "./components/Favorites";
//create your first component





function App () {
	const [stocksData, setstocksData]= useState(null);
	

	useEffect(()=>{
		getStocks()
	},[]);

	
	function getStocks(FAVORITES){
		fetch("https://morning-star.p.rapidapi.com/market/v2/get-movers", {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "607c356a15msh664378701f6febfp170069jsn3c9f418ebaf0",
				"x-rapidapi-host": "morning-star.p.rapidapi.com"
			}
			
})
.then((res)=>res.json())
.then(data => {
	console.log(data);
	setstocksData(data.results);
	
})
.catch(err => {
	console.error(err);

});
	}
	return (
		<div className="App">
			<Router>
				<Navigation/>
				<Favorites/>
				{/* <Switch>
					<Route path="/" exact component={()=><Home/>}/>
					<Route path="/home" exact component={()=><Home/>}/>
					<Route path="/login" exact component={()=><LogIn/>}/>
					<Route path="/signup" exact component={()=><SignUp/>}/>
				</Switch> */}
			</Router>
    	</div>
	);
}
export default App;