import { List, Map } from 'immutable';

const init = List([
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);

export default function(todos=init, action){
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));

    case 'TOGGLE_TODO':
      return todos.map(t => {
        if(t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
      
    default:
      return todos;
  }
}