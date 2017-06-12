import React from 'react';

class MegaMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 0};
  }

  clicked(e) {
     this.setState({active: e})
  }

  render() {
    var menu = this.props.items.map((v,key) => {
      return <p key={key} className={this.state.active == key ? 'active' : '' } onClick={this.clicked.bind(this,key)} >{v.name}</p>
    });

    return <div>
            {menu}
           </div>;
  }
}

// var MegaMenu = React.createClass({

//     getInitialState: function(){
//         return { focused: 0 };
//     },

//     clicked: function(index){

//         // The click handler will update the state with
//         // the index of the focused menu entry

//         this.setState({focused: index});
//     },

//     render: function() {

//         // Here we will read the items property, which was passed
//         // as an attribute when the component was created

//         var self = this;

//         // The map method will loop over the array of menu entries,
//         // and will return a new array with <li> elements.

//         return (
//             <div>
//                 <ul>{ this.props.items.map(function(m, index){
        
//                     var style = '';
        
//                     if(self.state.focused == index){
//                         style = 'focused';
//                     }
        
//                     // Notice the use of the bind() method. It makes the
//                     // index available to the clicked function:
        
//                     return <li className={style} onClick={self.clicked.bind(self, index)}>{m.name}</li>;
        
//                 }) }
                        
//                 </ul>
                
//             </div>
//         );

//     }
// });

export default MegaMenu;