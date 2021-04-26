import React, { Component } from 'react';
import '../Styles/Login.css'
class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			article: '',
		};
	}
	addArticle = (e) => {
		e.preventDefault();
		this.props.addArticle(this.state.article);
		this.setState({ article: '' });
	};

	render() {
		return (
			<div>
                <center>
				<form onSubmit={this.addArticle} className='form'>
                <div className="form-group">
					<input style={{width:'95%'}}
						type='text'
                        className="form-control"
						value={this.state.article}
						onChange={(e) => this.setState({ article: e.target.value })}
						placeholder='Add your article'
					/>
                    </div>
				</form>
                </center>
			</div>
		);
	}
}

export default Form;
