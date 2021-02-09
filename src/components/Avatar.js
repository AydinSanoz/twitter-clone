import React from 'react';
import './Avatar.css';

function Avatar({ cn, avatar, width, height }) {
	const defaultAvatar ='https://pbs.twimg.com/media/EnfWIoiW4AUz2Ww?format=png&name=small';
		// 'https://pbs.twimg.com/profile_images/1180781660247379968/BVoqMOft_400x400.jpg';
	return (
		<div className="avatar">
			<img
				className={cn || 'avatar-img'}
				src={avatar || defaultAvatar}
				alt="avatar"
				// style={{ width: width || 47, height: height || 47 }}
			/>
		</div>
	);
}

export default Avatar;
