import { render } from "@testing-library/react";
import react, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";


const TodoList = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div
        className="list"
        style={{
          display: "inline-flex",
          textAlign: "center",
        }}
        key={item.key}
      >
        <p>
          <input
            type="text"
            value={item.name}
            id={"todoName" + item.key}
            onChange={(el) => {
              props.updateItem(el.target.value, item.key);
            }}
          />
        </p>
        <DeleteIcon
          className="delIcon"
          onClick={() => {
            props.deleteItem(item.key);
          }}
        />
      </div>
    );
  });

  return <div style={{ display: "inline-grid" }}>{listItems}</div>;
};

export default TodoList;
