export const customErrorHandler = (err) => {
	console.log(err);
	// return err.message

	if (err.code === 'auth/user-not-found') {
		return 'There is no user with this email';
	}
	if (err.code === 'auth/email-already-in-use') {
		return 'The email address is already in use.Please try with another email';
	}
	if (err.code === 'auth/wrong-password') {
		return 'Wrong Password!! Please try again';
	} else {
		return err.message;
	}
};
