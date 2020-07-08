import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PostItem.css';
import like from "../images/like-default.png";

function PostItem(props) {
	const handleClick = () => {
		props.onVote(props.post.id);
	};
	
	const { post } = props;
	const style = {
	};
	return (
		<li className="item" style={style}>
			<div className="title">{post.title}</div>
			<div>作者：{post.author}</div>
			<div>日期：{post.date}</div>
			<div className="like">
				<span onClick={handleClick}><img src={like}/></span>
				<span>{post.vote}</span>
			</div>
		</li>
	);
}
PostItem.propTypes = {
	post: PropTypes.shape({
		title: PropTypes.string,
		author: PropTypes.string,
		date: PropTypes.string,
		vote: PropTypes.number,
		id: PropTypes.number
	}).isRequired,
	onVote: PropTypes.func.isRequired
};

export default PostItem;