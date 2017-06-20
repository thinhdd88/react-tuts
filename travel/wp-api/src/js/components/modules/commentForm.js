import React, {Component, PropTypes, findDOMNode} from 'react';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';

class CommentForm extends Component {
	constructor(props) {
		super(props);
    this.validatorTypes = {
      author_email: Joi.string().required().email().label('Email'),
      author_name: Joi.string().required().label('User Name'),
      content: Joi.string().required().label('Content')
    };
    this.getValidatorData = this.getValidatorData.bind(this);
    this.renderHelpText = this.renderHelpText.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      errorMessage: ''
    }
	}

  getValidatorData() {
    return {
      author_email: this.refs.author_email.value,
      author_name: this.refs.author_name.value,
      content: this.refs.content.value,
      post: this.props.id
    };
  }

  renderHelpText(message) {
    return (
     <ul className='help-block list-unstyled'>
       {message.map(function(text, key) {
          return (
              <li key={key}>{text}</li>
            )
        })}
     </ul>
    );
  }

  getClasses(field) {
    return classnames({
      'form-group': true,
      'has-error': !this.props.isValid(field)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const onValidate = (error) => {
      if (error) {
      } else {
        this.addComment();
        this.refs.commentForm.reset();
      }
    };
    this.props.validate(onValidate);
  }

  addComment(){
    console.log(this.getValidatorData());
    let url = `http://localhost/tut/reactjs/travel/wp-site/wp-json/wp/v2/comments`;
    fetch(url, { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.getValidatorData())
      })
      .then((res) => {
          console.log(res);
          return res.json();
      })
      .then((data) => {
          if(data.message){
            this.setState({
              errorMessage: data.message
            })
          }
      })
      .catch((error) => {
        console.error(error);
      });
  }

	render() {
		return(
			 <form ref="commentForm" onSubmit={this.onSubmit}>
        <div className={this.getClasses('author_name')}>
          <label htmlFor='author_name'>User Name</label>
          <input
            ref='author_name'
            type='text'
            className='form-control'
            placeholder='User Name'
            onBlur={this.props.handleValidation('author_name')}
          />
          {this.renderHelpText(this.props.getValidationMessages('username'))}
        </div>
        <div className={this.getClasses('author_email')}>
          <label htmlFor='author_email'>Email</label>
          <input
            ref='author_email'
            type='text'
            className='form-control'
            placeholder='Email'
            onBlur={this.props.handleValidation('author_email')}
          />
          {this.renderHelpText(this.props.getValidationMessages('author_email'))}
        </div>
        <div className={this.getClasses('content')}>
          <label htmlFor='content'>Comment</label>
          <textarea
            ref='content'
            className='form-control'
            placeholder=''
            onBlur={this.props.handleValidation('content')}
          >
          </textarea>
          {this.renderHelpText(this.props.getValidationMessages('content'))}
        </div>
        <button type="submit">asdda</button>
        <div className="error" dangerouslySetInnerHTML={ {__html: this.state.errorMessage} } />
      </form>
		)
	}
};

// CommentForm.propTypes = {
//   username: PropTypes.string,
//   password: PropTypes.string,
//   updateField: PropTypes.func,
//   submitForm: PropTypes.func,
//   errors: PropTypes.object,
//   validate: PropTypes.func,
//   isValid: PropTypes.func,
//   getValidationMessages: PropTypes.func,
//   clearValidations: PropTypes.func,
// };

export default validation(strategy)(CommentForm);