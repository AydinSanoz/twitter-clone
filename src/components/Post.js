import { VerifiedUser, ChatBubbleOutline, Repeat, FavoriteBorder, Publish } from '@material-ui/icons';
import React from 'react';
import Avatar from './Avatar';
import './Post.css';

function Post({ displayName, userName, verified, text, image, avatar }) {
	return (
		<div className="post">
			<div className="post-avatar">
				<Avatar />
			</div>
			<div className="post-body">
				<div className="post-header">
					<div className="post-headerText">
						<h3>
							Michael Jordan{' '}
							<span>
								<VerifiedUser className="post_badge" />
							</span>
						</h3>
					</div>
					<div className="post-headerDescription">
						<p>This is the tweeter clone thais developed by react-js</p>
					</div>
				</div>
				<img
					src="https://pbs.twimg.com/media/Enf9ZmFXcAAJeaX?format=jpg&name=small"
					alt="tweet-img"
				/>

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
