import React, { useContext } from 'react';
import Welcome from './Welcome';
import Main from './MainRouter';
import { FirebaseAuthContext } from '../context/AuthContext';
import Window from "../hooks/useWindowSize";

function AppRouter() {
	const { currentUser } = useContext(FirebaseAuthContext);
	
	console.log('current', currentUser);

	return currentUser ? <Main /> : <Welcome />;
}
export default AppRouter;
