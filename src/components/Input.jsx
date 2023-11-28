import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";

function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleSubmitBittonClick = (e) => {
    e.preventDefault();

    if (!title.length || !content.length) {
      return alert("제목과 내용을 모두 입력해주세요!");
    }

    const newTodo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmitBittonClick}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </>
  );
}

export default Input;
