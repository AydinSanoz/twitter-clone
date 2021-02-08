import {
	VerifiedUser,
	ChatBubbleOutline,
	Repeat,
	FavoriteBorder,
	Publish,
} from '@material-ui/icons';
import React from 'react';
import Avatar from './Avatar';
import './Post.css';

function Post({tweet, avatar,datetime,id,name,slug,text,like,reply,retweet,tweet_img }) {
	console.log("name",tweet)

	return (
		<div className="post">
			<div className="post-avatar">
				<Avatar avatar={avatar}/>
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
					</div>
					<div className="post-headerDescription">
						<p>{text}</p>
					</div>
				</div>
				<img src={tweet_img} alt="tweet-img" />

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

export default Post;
