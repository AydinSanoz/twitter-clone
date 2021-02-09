import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Main from './MainRouter';
import { FirebaseAuthContext } from '../context/AuthContext';

function AppRouter() {
	const { currentUser } = useContext(FirebaseAuthContext);
	console.log('current', currentUser);

	return currentUser ? <Main /> : <Welcome />;
}
export default AppRouter;
