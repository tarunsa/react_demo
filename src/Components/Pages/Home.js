import React, { Component } from 'react';
import '../../App.css';
import Form from '../Pages/Form';
import Article from '../Pages/Article';
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{ id: 1, title: 'First Article', complete: false },
			
			],
		};
	}
	addArticle = (title) => {
		console.log(title);
		let todos = [ ...this.state.todos ];
		let id = todos[todos.length - 1] ? todos[todos.length - 1]['id'] + 1 : 0;
		let newTodo = {
			id,
			title,
			complete: false,
		};
		todos.push(newTodo);
		this.setState({ todos });
	};

	completeArticle = (id) => {
		let todos = [ ...this.state.todos ];
		todos.filter((todo) => {
			if (todo.id === id) {
				todo.complete = true;
			}
		});
		this.setState({ todos });
	};
	deleteArticle = (id) => {
		let todos = [ ...this.state.todos ];
		todos.filter((todo, index) => {
			if (todo.id === id) {
				todos.splice(index, 1);
			}
		});
		this.setState({ todos });
	};
	render() {
		return (
			<div className='p-3' style={{backgroundColor:'#f3f3'}}>
			
				<h1 className='heading p-3'>Create a articles with React</h1>
				<div className='todos'>
					{this.state.todos.map((todo) => (
						<Article
							key={todo.id}
							todo={todo}
							completeArticle={(id) => this.completeArticle(id)}
							deleteArticle={(id) => this.deleteArticle(id)}
						/>
					))}
					<div id='down' />
				</div>
				<Form addArticle={(todo) => this.addArticle(todo)} />
            
			</div>
		);
	}
}
