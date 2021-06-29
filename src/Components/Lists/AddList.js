import React, { useState, useEffect } from "react";
import classes from "./AddList.module.css";
import ErrorModal from "../UI/ErrorModal";
import TodoList from "../Lists/TodoList";
import Button from "../UI/Button";
import Card from "../UI/Card";

const getLocalItems = () => {
  let list = localStorage.getItem("todolist");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("todolist"));
  } else {
    return [];
  }
};

const AddList = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [error, setError] = useState("");

  const addList = (event) => {
    event.preventDefault();
    if (!inputData) {
      setError({
        title: "TodoList should not be empty!!",
        message: "Please add the Todo List!!!💥",
      });
      return;
    } else {
      setItems([...items, { items: inputData, id: Math.random().toString() }]);
      setInputData("");
    }
  };

  const errorHandler = () => {
    setError(null);
  };
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(items));
  }, [items]);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="list">Todo List</label>
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            autoComplete="off"
          />
          <Button onClick={addList}>Add Todo</Button>
        </form>
      </Card>
      <TodoList items={items} />
    </>
  );
};

export default AddList;
