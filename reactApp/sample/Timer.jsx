import React from 'react';

class Timer extends React.Component {
   constructor(props) {
   	super(props);
   	this.state = {elapsed: 0};
   }

   componentDidMount() {
        // componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(() => this.tick(), 50);
    }

    componentWillUnmount() {

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    }


   tick(event) {
      this.setState({elapsed: new Date() - this.props.start});
   }

   render() {
   		var elapsed  = Math.round(this.state.elapsed / 100);
      var seconds = (elapsed / 10).toFixed(1);

      return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
   }
}

export default Timer;