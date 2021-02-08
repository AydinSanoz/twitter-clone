import React from 'react';
import TweetBox from '../components/TweetBox';
import '../components/Feed.css';
import error from "../assets/Under-Construction.png"

function Home() {
	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Sorry Not Ready  </h2>
			</div>
            <div className="img">
                <img src= {error} alt="error" width= "500px"/>
            </div>
		</div>
	);
}

export default Home;
