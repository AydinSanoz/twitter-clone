import React,{useContext} from 'react';
import Avatar from './Avatar';
import "./Dashboard.css";
import {useHistory} from "react-router-dom";
import firebase from "../firebase/firebase";
import {FirebaseAuthContext} from "../context/AuthContext";

function Dashboard() {
    const {currentUser} = useContext(FirebaseAuthContext)
    const userName = currentUser.email.split("@")
    const history = useHistory()

    function signOut() {
		firebase.signOut();
		history.push('/');
    }

	return (
		<div className="dashboard" onClick={signOut}>
			<Avatar avatar={currentUser.photoURL} />
			<div className="dashboard-text">
				<h3 className="dashboard-displayName">{currentUser.displayName}</h3>
				<h4 className="dashboard-userName">@{userName[0]}</h4>
				<p>Logout</p>
			</div>
		</div>
	);
}

export default Dashboard;
