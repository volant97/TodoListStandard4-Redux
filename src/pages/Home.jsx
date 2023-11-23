import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addTodo, deleteTodo } from "../redux/modules/todos";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const newTodo = {
    id: shortid.generate(),
    title,
    content,
    isDone: false,
  };

  const onSubmitTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onClickDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // todos.map((item) => {
  //   console.log(item.isDone);
  // });

  return (
    <main>
      <form onSubmit={onSubmitTodo}>
        <input
          type="text"
          placeholder="제목입력!"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          type="text"
          placeholder="내용입력!"
          value={content}
          onChange={onChangeContent}
        />
        <button type="submit">제출</button>
      </form>
      <div>
        <h1>TodoList</h1>
        <ul>
          {todos
            .filter((item) => {
              return item.isDone === false;
            })
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <p>{todo.id}</p>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <p>{todo.isDone}</p>
                  <button onClick={() => onClickDeleteTodo(todo.id)}>
                    삭제
                  </button>
                  <button>완료</button>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h1>DoneList</h1>
        <ul>
          {todos
            .filter((item) => {
              return item.isDone === true;
            })
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <p>{todo.id}</p>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <p>{todo.isDone}</p>
                  <button onClick={() => onClickDeleteTodo(todo.id)}>
                    삭제
                  </button>
                  <button>완료</button>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
};
export default Home;
