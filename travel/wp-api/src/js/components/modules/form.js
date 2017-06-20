import React, {Component} from 'react';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
			<div className="callout secondary">
		        <h4 className="leave-comment">Add a Comment</h4>
		        <form className="post-edit" ref="commentForm" noValidate>
		          <input type="text" ref="name" placeholder="Your Name" required/>
		          <textarea ref="desc" placeholder="Add your comment here" required/>
		          <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
		        </form>
		  	</div>
		)
	}
}

// const CommentForm = () => (
// 	<div className="callout secondary">
//         <h4 className="leave-comment">Add a Comment</h4>
//         <form className="post-edit" ref="commentForm">
//           <input type="text" ref="name" placeholder="Your Name" required/>
//           <textarea ref="desc" placeholder="Add your comment here" required/>
//           <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
//         </form>
//   	</div>
// )

export default CommentForm;

