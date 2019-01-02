import * as React from 'react';


export class CommentItem extends React.Component {

	componentDidMount() {
    const comments = this.props.comments;
    this.setState((state) => Object.assign({}, state, {comments}));
	}
	
	deleteComment() {
			this.props.onDeleteComment(this.props.id);
	}
	

	render() {
		return <div className='comments__block__item' id={this.props.id}>
			<div>
				<span className = "author-name">{this.props.author}</span>
				<span className = "comment" >{this.props.text}</span>
			</div>
			<div>
				<span className = "date">{Date(this.props.date)}</span>
				<button 
					onClick={this.deleteComment.bind(this)}
					className='comments__block__item-delete-btn'>DELETE</button>
			</div>
		</div>
	}
}
