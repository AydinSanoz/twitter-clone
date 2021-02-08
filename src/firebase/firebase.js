import firebase from 'firebase';
import { customErrorHandler } from "../helper/customErrorHandler";

const firebaseConfig = {
	apiKey: 'AIzaSyCII5EnbX2al-xg9OeXs_9l9T73o7gpcWs',
	authDomain: 'twitterclone-d6669.firebaseapp.com',
	projectId: 'twitterclone-d6669',
	storageBucket: 'twitterclone-d6669.appspot.com',
	messagingSenderId: '273953701665',
	appId: '1:273953701665:web:1b2496fc1ecffc36550860',
	measurementId: 'G-DL290VYPFJ',
};

class Firebase {
	constructor() {
		this.firebaseApp = firebase.initializeApp(firebaseConfig);
		this.db = this.firebaseApp.firestore()
		this.firebaseAuth = this.firebaseApp.auth()
	}
	// register registerWithEmailAndPassword
	async register(displayName, email, password) {
		try {
			await this.firebaseAuth.createUserWithEmailAndPassword(
				email,
				password
			);
			this.firebaseAuth.currentUser.updateProfile({
				displayName,
			});
		} catch (error) {
			console.log(error.message);
			return customErrorHandler(error);
		}
	}
	// sign in/up with google GoogleAuthProvider
	useGoogleProvider() {
		try {
			const googleProvider = new firebase.auth.GoogleAuthProvider();
			googleProvider.setCustomParameters({ prompt: "select_account" });
			this.firebaseAuth.signInWithPopup(googleProvider);
		} catch (error) {
			console.log(error.message);
			return customErrorHandler(error);
		}
	}
	// login  signInWithEmailAndPassword
	async signIn(email, password) {
		try {
			await this.firebaseAuth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error.message);
			return customErrorHandler(error);
		}
	}
	// logout signOut
	signOut() {
		try {
			this.firebaseAuth.signOut();
		} catch (error) {
			console.log(error.message);
			return customErrorHandler(error);
		}
	}
	// forgot password sendPasswordResetEmail
	async forgotPassword(email) {
		try {
			await this.firebaseAuth.sendPasswordResetEmail(email);
			window.location.href = "/";
		} catch (error) {
			console.log(error);
			return error
				? customErrorHandler(error)
				: customErrorHandler({
						message: "Check your email to reset your password",
				  });
		}
	}



}

export default new Firebase();
