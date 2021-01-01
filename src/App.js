import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { name: "", id: Date.now() },
    };
  }
  handleInput = (e) => {
    this.setState({
      currentItem: { name: e.target.value, key: Date.now() },
    });
  };
  submitHandle = (e) => {
    const newItem = this.state.currentItem;
    e.preventDefault();
    if (newItem.name !== "") {
      const getItems = [...this.state.items, newItem];
      this.setState({ items: getItems, currentItem: { name: "", key: "" } });
    }
  };

  updateItem = (name, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.name !== "") {
        if (item.key == key) {
          item.name = name;
        }
      }
    });
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItems });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form id="formSubmit" onSubmit={this.submitHandle}>
            <input
              placeholder="Enter Text"
              value={this.state.currentItem.name}
              onChange={this.handleInput}
            />
            <button>Add Task</button>
          </form>
          <TodoList
            items={this.state.items}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
          />
        </header>
      </div>
    );
  }
}

export default App;
