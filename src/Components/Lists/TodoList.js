import React from "react";
import Card from "../UI/Card";
import classes from "./TodoList.module.css";
const List = (props) => {
  return (
    <Card className={classes.todo}>
      <ul>
        {props.items.map((item) => {
          return <li key={item.id}>{item.items}</li>;
        })}
      </ul>
    </Card>
  );
};

export default List;
