import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyCII5EnbX2al-xg9OeXs_9l9T73o7gpcWs',
	authDomain: 'twitterclone-d6669.firebaseapp.com',
	projectId: 'twitterclone-d6669',
	storageBucket: 'twitterclone-d6669.appspot.com',
	messagingSenderId: '273953701665',
	appId: '1:273953701665:web:1b2496fc1ecffc36550860',
	measurementId: 'G-DL290VYPFJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
export default db;
