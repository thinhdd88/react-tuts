import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import Home from './components/pages/home';
import PageDetail from './components/pages/pages';
import Destination from './components/pages/destination';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
  			<IndexRoute component={Home}></IndexRoute>
          	<Route path="/content/:pageName" component={PageDetail}/>
          	<Route path="/destination/:slug" component={Destination}/>
		</Route>
    </Router> ,
  document.getElementById('app')
);
