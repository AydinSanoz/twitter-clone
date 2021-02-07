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
							{displayName}{' '}
							<span>
								<VerifiedUser className="post_badge"/>@{userName}
							</span>
						</h3>
					</div>
					<div className="post-headerDescription">
						<p>{text}</p>
					</div>
				</div>
				<img
					src={image}
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
