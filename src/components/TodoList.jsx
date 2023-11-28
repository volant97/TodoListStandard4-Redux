import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteBtnClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSwitchBtnClick = (id) => {
    dispatch(switchTodo(id));
  };

  const handleGoToDetailPageBtnClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <h1>{isActive ? "해야할 일" : "완료된 일"}</h1>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StPost key={item.id}>
              <p>{item.title}</p>
              <p>{item.content}</p>
              <p>{item.isDone.toString()}</p>
              <button onClick={() => handleDeleteBtnClick(item.id)}>
                삭제
              </button>
              <button onClick={() => handleSwitchBtnClick(item.id)}>
                {isActive ? "완료" : "취소"}
              </button>
              <button onClick={() => handleGoToDetailPageBtnClick(item.id)}>
                상세보기
              </button>
            </StPost>
          );
        })}
    </>
  );
}

export default TodoList;

const StPost = styled.div`
  width: 300px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;
