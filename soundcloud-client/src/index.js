import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './components/TrackList/index';
import {configureStore} from './store';
import * as actions from './actions';
import {Provider} from 'react-redux';


const tracks = [
	{
		id: 1,
		title: "Em cua ngay wa"
	}, 
	{
		id: 2,
		title: "Con mua ngang qua"
	}
]

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

// ReactDOM.render(
// 	<TrackList tracks={tracks} />, 	document.getElementById('app')
// );

ReactDOM.render(
  <Provider store={store}>
    <TrackList />
  </Provider>,
  document.getElementById('app')
);