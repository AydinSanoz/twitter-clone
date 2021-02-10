import {
	VerifiedUser,
	ChatBubbleOutline,
	Repeat,
	FavoriteBorder,
	Publish,
} from '@material-ui/icons';
import React,{forwardRef} from 'react';
import Avatar from './Avatar';
import './Post.css';

const Post = forwardRef(
	({avatar, datetime,uid,name,slug,text,like,reply,retweet,tweet_img }, ref)=>{
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
				{/* <img src={tweet_img || 'https://pbs.twimg.com/media/EnfWIoiW4AUz2Ww?format=png&name=small'} alt="tweet-img" /> */}
				{tweet_img ? (<img src={tweet_img} alt="tweet-img" />): null}

				<div className="post-footer">
					<ChatBubbleOutline fontSize="small" />
					<Repeat fontSize="small" />
					<FavoriteBorder fontSize="small" />
					<Publish fontSize="small" />
				</div>
			</div>
		</div>
	);
})

export default Post;
