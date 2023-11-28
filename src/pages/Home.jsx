import React from "react";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
};

export default Home;
