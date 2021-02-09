import React, { useContext } from 'react';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Welcome.css';
import { FirebaseAuthContext } from '../context/AuthContext';

function Welcome() {
	const { currentUser } = useContext(FirebaseAuthContext);
	return (
		<div className="welcome-body">
            <div className="twit-logo">  
            </div>
			<div className="welcome">
				<h2>Welcome to Twitter</h2>
				<Router>
					<Switch>
						<Route exact path="/register" component={Signup} />
						<Route exact path="/Login" component={Signin} />
						<Route path="/" component={Signin} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default Welcome;
