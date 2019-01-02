import * as React from 'react';
import { HTTPService } from '../../common/scripts/http-service';
import { CommentItem } from '../components/Comment-item.jsx';
import { CommentsInput } from '../components/Comments-Input.jsx';


const URL = 'http://localhost:4001/comments';

export class Comments extends React.Component {
	constructor() {
		super();
		this.httpService = new HTTPService();
		this.onSubmit = this.onSubmit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.state = {
			comments: []
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		this.httpService
			.get(URL)
			.then((comments) => {
				this.setState((oldState) => {
					const newState = Object.assign({}, oldState);
					newState.comments = comments;
						return newState;
					});
			})
			.catch((e) => console.log(e));
	}
	
	onSubmit(newComment) {
		this.httpService
			.post(URL, newComment)
			.then((text) => {
				this.setState((oldState) => {
					const newState = Object.assign({}, oldState);
					console.log(text);
					newState.comments.push(text);
					return newState;
				})
			//.catch((e) => console.log(e));
			});
	}

	deleteItem(id) {
		this.httpService
		.delete(`${URL}/${id}`)
		.then((comments) => {
      this.setState((oldState) => {
				const newState = Object.assign({}, oldState);
        newState.comments = comments.reduce((commentsReduced, comment) => {
						if (comment.hasOwnProperty('id') !== id) {
							commentsReduced.push(comment);
						}
					return commentsReduced;
				}, []);
        return newState;
      });
    })
	}
	
	


	
	render() {
		const comments = Array.from(this.state.comments);

		const listComments = comments.map((comment, i) => {
      return <CommentItem
        author={comment.author}
				id={comment.id}
				text={comment.text}
				date={comment.date}
				key={i}
				onDeleteComment={this.deleteItem}
      />
		});
		return <div><CommentsInput onSubmit={this.onSubmit}/>
		 <div  className='comments__block'>
				{listComments}
			</div>
		</div>
	}
}
