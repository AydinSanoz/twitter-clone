import React from 'react';
import './App.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './Router/AppRouter';
import WindowSize from './hooks/useWindowSize';

function App() {
	return (
		<div className="app">
			<AuthContextProvider>
				<WindowSize>
					<AppRouter />
				</WindowSize>
			</AuthContextProvider>
		</div>
	);
}

export default App;
