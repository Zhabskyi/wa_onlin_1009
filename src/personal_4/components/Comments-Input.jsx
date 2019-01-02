import * as React from 'react';

export class CommentsInput extends React.Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
		this.valueChange = this.valueChange.bind(this);
		this.state = {
			newComment: '',
			author: 'Oleksandr'
    }
	}

	onSubmit(e) {
    e.preventDefault();
    console.log(e);
    const text = this.state.newComment;
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
      newState.newComment = '';
      return newState;
    });
    this.props.onSubmit({author: 'Oleksandr', text});
	}

	valueChange(e) {
    const value = e.target.value;
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
			newState.newComment = value;
      return newState;
    });
  }
	
	render() {
		return <form onSubmit={this.onSubmit} className='comments__form'>
			<input type="text" className='comments__form__input'
			onChange={this.valueChange}
			value={this.state.newComment} />
			<button className='comments__form__submit-btn'>Add comment</button>
		</form>
	}
}
