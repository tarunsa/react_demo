import React, { Component } from 'react';

export default class Article extends Component {
	render() {
		return (
			<div>
				<div className='article'>
					<p style={{ textDecoration: this.props.todo.complete ? 'line-through' : '' }}>
						{this.props.todo.title}
					</p>
					<div className='status'>
						<button className='complete' onClick={() => this.props.completeArticle(this.props.todo.id)}>
							Complete
						</button>
						<button className='delete' onClick={() => this.props.deleteArticle(this.props.todo.id)}>
							Delete
						</button>
					</div>
				</div>
			</div>
		);
	}
}
