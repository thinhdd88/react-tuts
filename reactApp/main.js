import React from 'react';
import ReactDOM from 'react-dom';
import Search from './sample/Search.jsx';
import Timer from './sample/Timer.jsx';
import ServiceChooser from './sample/ServiceChooser.jsx';
import MegaMenu from './sample/Menu.jsx';


// Search
var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

ReactDOM.render(<Search items={libraries} />, document.getElementById('app'));

// Timer
ReactDOM.render(
    <Timer start={Date.now()} />,
    document.getElementById('timer')
);


// Order form
var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];


//Render the ServiceChooser component, and pass the array of services
ReactDOM.render(
    <ServiceChooser items={ services } />,
    document.getElementById('order')
);

// Menu
var menu = [
    { name: 'Web Development'},
    { name: 'Design'},
    { name: 'Integration'},
    { name: 'Training'}
];


ReactDOM.render(
    <MegaMenu items={ menu } />,
    document.getElementById('menu')
);