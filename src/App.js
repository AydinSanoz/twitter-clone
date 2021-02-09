import React from 'react';
import './App.css';
import Sidebar from './pages/sections/Sidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Error from './pages/Error';
import Widgets from './pages/sections/Widgets';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
	return (
		<div className="app">
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/Login" component={Signin} />
					<Route path="/Register" component={Signup} />

					<Route path="/Home" component={Home} exact />
					<Route path="/Explore" component={Explore} exact />
					<Route path="" component={Error} />
				</Switch>
				<Widgets />
			</Router>
		</div>
	);
}

export default App;
