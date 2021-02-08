import React from 'react';
import './SearchBox.css';
import Search from './icons/Search';

function SearchBox() {
	return (
		<div>
			<div className="search-input">
				<Search className="search-searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>
		</div>
	);
}

export default SearchBox;
