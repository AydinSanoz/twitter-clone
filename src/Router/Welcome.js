import React, { useContext } from 'react';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAuthContext } from '../context/AuthContext';
import WelcomeBody from '../components/WelcomeBody';

function Welcome() {
	const { currentUser } = useContext(FirebaseAuthContext);
	return (
		<WelcomeBody>
			<Router>
				<Switch>
					<Route exact path="/register" component={Signup} />
					<Route exact path="/Login" component={Signin} />
					<Route path="/" component={Signin} />
				</Switch>
			</Router>
		</WelcomeBody>
	);
}

export default Welcome;
