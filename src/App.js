import React from 'react';
import './App.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './Router/AppRouter';


function App() {
	return (
		<div className="app">
			<AuthContextProvider>
				<AppRouter/>
			</AuthContextProvider>
		</div>
	);
}

export default App;
