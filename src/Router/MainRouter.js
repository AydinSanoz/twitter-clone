import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';

import Error from '../pages/Error';
import ProfileTweets from '../pages/ProfileTweet';
import ProfileError from '../pages/ProfileError';
import Widgets from '../components/Widgets';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAuthContext } from '../context/AuthContext';
import Welcome from '../pages/Welcome';

function Main() {
	const { currentUser } = useContext(FirebaseAuthContext);

	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route exact path="/Home" component={currentUser ? Home : Welcome} />
				<Route
					exact
					path="/Explore"
					component={currentUser ? Explore : Welcome}
				/>
				<Route path="/Notifications" component={Error} />
				<Route path="/Messages" component={Error} />
				<Route path="/Bookmarks" component={Error} />
				<Route path="/Lists" component={Error} />
				<Route path="/Profile" component={Profile} />
				<Route path="/Tweets" component={ProfileTweets} />
				<Route path="/Tweets & Replies" component={ProfileError} />
				<Route path="/Media" component={ProfileError} />
				<Route path="/Likes" component={ProfileError} />
				<Route path="/More" component={Error} />
				<Route path="" component={Home} />
			</Switch>
			<Widgets />
		</Router>
	);
}

export default Main;
