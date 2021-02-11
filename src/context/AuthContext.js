import { createContext, useEffect, useState } from 'react';
import firebase from '../firebase/firebase';

export const FirebaseAuthContext = createContext();

function AuthContextProvider(props) {
	const [currentUser, setCurrentUser] = useState('');

	useEffect(() => {
		firebase.firebaseAuth.onAuthStateChanged((user) => setCurrentUser(user));
		return () => {
			firebase.firebaseAuth.signOut();
		};
	}, []);
	return (
		<FirebaseAuthContext.Provider value={{ currentUser }}>
			{props.children}
		</FirebaseAuthContext.Provider>
	);
}

export default AuthContextProvider;
