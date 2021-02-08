import React from 'react';
import './App.css';
import Sidebar from './pages/sections/Sidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Error from './pages/Error'
import Widgets from './pages/sections/Widgets';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/Home" component={Home} exact/>
					<Route path="/Explore" component={Explore} exact/>
					<Route path="" component={Error} />

				</Switch>
				<Widgets />
			</Router>
		</div>
	);
}

export default App;
