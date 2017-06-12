import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function Clock(props) {
// 	return(
// 		<div>
// 			<h1>Test</h1>
// 			<h2>It is {props.date.toLocaleTimeString()}</h2>
// 		</div>	
// 	);
// }


// function tick(){
// 	ReactDOM.render(
// 		<Clock date={new Date()} />,
// 		document.getElementById('root')
// 	);
// }

// setInterval(tick,1000);

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		//var seft = this;
		this.timerID = setInterval(
			// function(){seft.tick()}, 1000
			// or
			() => this.tick(), 1000
			// Until arrow functions, every new function defined its own this value 
			// (a new object in the case of a constructor, undefined in strict mode 
			// function calls, the context object if the function is called as  an "object method", etc.). 
			// is proved to be annoying with an object-oriented style of programming.
		)
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
	    this.setState({
	      date: new Date()
	    });
  	}

	render() {
		return(
			<div>
				<h1>Test</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>	
		);
	}
}



ReactDOM.render(
	<Clock />,
	document.getElementById('root')
);