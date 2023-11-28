import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";

const Detail = () => {
  const navugate = useNavigate();
  const dispatch = useDispatch();

  const paramId = useParams().id;
  const todos = useSelector((state) => state.todos);
  const filteredTodos = todos.filter((item) => item.id === paramId)[0];

  const handleDeleteBtnClick = (id) => {
    dispatch(deleteTodo(id));
    navugate("/");
  };

  return (
    <>
      <h1>포스트 상세보기</h1>
      <StPost>
        <p>제목 : {filteredTodos.title}</p>
        <p>내용 : {filteredTodos.content}</p>
        <p>완료 여부 : {filteredTodos.isDone.toString()}</p>
        <button onClick={() => handleDeleteBtnClick(filteredTodos.id)}>
          삭제
        </button>
        <button onClick={() => navugate("/")}>돌아가기</button>
      </StPost>
    </>
  );
};

export default Detail;

const StPost = styled.div`
  width: 300px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;
