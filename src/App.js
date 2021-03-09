import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import{Navigation,Home}from "./components";
//create your first component
function App () {
	
	return (
		<div className="App">
			<Router>
				<Navigation/>
        <Switch>
        <Route  path="/" exact component={()=> <Home/>} />
				<Route path="/home" exact component={()=> <Home/>} />
						{/* <Route exact path="/userprofile" component={UserProfile} />
						<Route exact path="/mystocks" component={MyStocks} />
						<Route exact path="/tradestocks" component={TradeStocks} />
						<Route exact path="/leaderboard" component={LeaderBoard} />
						<Route exact path="/transactionhistory" component={TransactionHistory} /> */}
        </Switch>
      </Router>
					
    </div>
	);
}

export default App;