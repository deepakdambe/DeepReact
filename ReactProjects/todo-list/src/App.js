import './App.css';
import Header from './MyComponent/Header';
import {Todos} from './MyComponent/Todos';
import {Footer} from './MyComponent/Footer';
import { AddTodo } from './MyComponent/AddTodo';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo ", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter( (e) => {
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "Go to the market to get some vegetables"
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "Go to the market to get some cloths"
    },
    {
      sno: 3,
      title: "Go to movie",
      desc: "Go to the movie - ku fu pandas"
    }
  ]);

  return (
    <>
      <Header title="My Todo List" searchBar={true}/>
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
