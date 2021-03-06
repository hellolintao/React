import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
	constructor(props) {
		console.log('A constructor');
		super(props);
		this.state = {
			posts: []
		};
		this.timer = null;
		this.handleVote = this.handleVote.bind(this); // ES6 class中，必须手动的绑定this的指向
		this.handleSave = this.handleSave.bind(this);
	}
	componentDidMount() {
		console.log('A componentDidMount');
		this.timer = setTimeout(() => {
			this.setState({
				posts: [
				{
					title: '第一篇新闻',
					author: '小李',
					date: '2020-01-01',
					vote: 0,
					id: 1
				},
				{
					title: '第二篇新闻',
					author: '小红',
					date: '2020-02-14',
					vote: 0,
					id: 2
				},
				{
					title: '第三篇新闻',
					author: '小张',
					date: '2020-04-20',
					vote: 0,
					id: 3
				}]
			});
		}, 1000);
	}

	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	componentWillMount() {
		console.log('A componentWillMount');
	}

	handleVote(id) {
		const posts = this.state.posts.map((item) => {
			const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
			return newItem;
		});
		this.setState({
			posts
		});
	}

	handleSave(data) {
		console.log(data);
		const posts = this.state.posts.map((item) => {
			const newItem = item.id == data.id ? {...data} : item;
			return newItem;
		});
		this.setState({
			posts
		});
	}

	render() {
		console.log('A render');
		return (
			<div>
				帖子列表
				<ul>
					{
						this.state.posts.map((item, index) => {
							return <PostItem post={item} onVote={this.handleVote} onSave={this.handleSave} key={index}/>
						})
					}
				</ul>
			</div>
		);
	}



	componentDidUpdate() {
		console.log('A4 componentDidUpdate');
	}
}

export default PostList;