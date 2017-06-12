import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';


// const uid = () => Math.random().toString(34).slice(2);

// export function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     payload: {
//       id: uid(),
//       isDone: false,
//       text: text
//     }
//   };
// }

// export function toggleTodo(id) {
//   return {
//     type: 'TOGGLE_TODO',
//     payload: id
// }

export const TodoList = connect(
  function mapStateToProps(state) {
     return { todos: state };
  },
  
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(components.TodoList);