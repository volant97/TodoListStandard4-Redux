// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "todos/ADD_TODO";
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    body: "내용2",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];

    case DELETE_TODO:
      const id = action.payload;
      const newTodos = state.filter((todo) => todo.id !== id);
      return newTodos;

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
