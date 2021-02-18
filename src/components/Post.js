import {
	VerifiedUser,
	ChatBubbleOutline,
	Repeat,
	FavoriteBorder,
	Publish,
} from '@material-ui/icons';
import React, { forwardRef, useContext } from 'react';
import Avatar from './Avatar';
import Option from '../components/icons/Options';
import './Post.css';
import firebase from '../firebase/firebase';
import {FirebaseAuthContext} from "../context/AuthContext";

const Post = forwardRef(
	(
		{
			avatar,
			datetime,
			uid,
			name,
			slug,
			text,
			like,
			reply,
			retweet,
			tweet_img,
		},
		ref
	) => {

		//TODO onDelete func add 

		const {currentUser} = useContext(FirebaseAuthContext)
		const userName = currentUser.email.split("@")
		const db= firebase.db;
		const refDoc = db.collection("posts").doc("tweets").collection(`${userName[0]}`)
		function onDelete() {
			refDoc.doc().set({})
		}
		return (
			<div ref={ref} className="post">
				<div className="post-avatar">
					<Avatar avatar={avatar} />
				</div>
				<div className="post-body">
					<div className="post-header">
						<div className="post-headerText">
							<h3>
								{name}{' '}
								<span>
									<VerifiedUser className="post_badge" />@{slug}
								</span>
							</h3>
							<Option className="option" onClick={onDelete} />
						</div>
						<div className="post-headerDescription">
							<p>{text}</p>
						</div>
					</div>
					{tweet_img ? <img src={tweet_img} alt="tweet-img" /> : null}

					<div className="post-footer">
						<ChatBubbleOutline fontSize="small" />
						<Repeat fontSize="small" />
						<FavoriteBorder fontSize="small" />
						<Publish fontSize="small" />
					</div>
				</div>
			</div>
		);
	}
);

export default Post;
