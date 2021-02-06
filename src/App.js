import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
	return (
		//BEM
		<div className="app">
			<h1>Welcome to my twitter clone </h1>
			<Sidebar />
		</div>
	);
}

export default App;
