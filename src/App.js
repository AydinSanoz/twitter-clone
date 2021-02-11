import React, { useState } from 'react';
import './App.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './Router/AppRouter';
import MainLayout from './Layouts/MainLayout';

function App() {

	return (
		<div className="app">
			<AuthContextProvider>

					<AppRouter />

			</AuthContextProvider>
		</div>
	);
}

export default App;
