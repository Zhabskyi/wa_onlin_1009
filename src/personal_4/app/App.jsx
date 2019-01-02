import * as React from 'react';
import {Comments} from '../components/Comments.jsx';
import {CommentsInput} from '../components/Comments-Input.jsx';



export class App extends React.Component {
	render() {
		return <div className='comments'>
			<Comments />
			</div>
	}
}
