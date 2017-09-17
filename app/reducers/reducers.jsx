var moment = require('moment');
var uuid = require('node-uuid');

export var searchTextReducer = (state = "", action) =>{
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = true, action) => {
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export var todosReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text:action.text,
          completed:false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id){
          var nextCompleted = !todo.completed;

          return {
            id: todo.id,
            text: todo.text,
            createdAt: todo.createdAt,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix(): undefined
          };
        }
      });
      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];
      case 'DELETE_TODO':
        var todoToDelete = 0;

        state.map((todo) => {
          if(todo.id === action.id){
            todoToDelete = todo.id;
          }
        });
    		state.splice(todoToDelete, 1);

    		return [
          ...state
        ];

    default:
      return state;
  }
}
