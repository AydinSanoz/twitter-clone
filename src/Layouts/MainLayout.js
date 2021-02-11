import React from 'react';
import WindowSize from '../hooks/useWindowSize';

function MainLayout(props) {
	const { width, height } = WindowSize();

	console.log('width', width);
	console.log('height', height);

	return <div className="MainLayout" style={{width: width, height:height, display: 'flex'}}>{props.children}</div>;
}

export default MainLayout;
