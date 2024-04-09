import { useEffect, useState } from "react";
import AddNewTask from "./components/AddNewTask";
import TodoList from "./components/TodoList";
import { notification } from "antd";
//LOCAL STORAGE(inspect, application, local storage)
const LOCAL_STORAGE_KEY = "Todos";

const App = () => {

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    // console.log(value);
    if (value === null) {
      return [];
    }
    else {
      return JSON.parse(value);//konvertovanje u niz json objekata
    }
  });//ovako citamo sacuvano iz browsera

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))//I param je key, II je string od niza koji smo konvertovali
  }, [todos]);

  const addTask = (taskName) => {
    const taskExists = todos.includes(taskName);//vraca true ili false
    // console.log(taskExists);
    if (!taskExists) {
      // console.log("add task", taskName);
      const todoList = todos.slice();//ovako pravimo lokalnu kopiju niza
      todoList.unshift(taskName);//stavlja element na pocetak niza
      setTodos(todoList);
      notification.success({
        message: "Success",
        description: "Task successfully added!",
      });
    }
    else {
      notification.error({
        message: "Failed",
        description: "Task already exists!"
      });
    }
  };

  const deleteTask = (index) => {
    // console.log("delete task", index);
    const todoList = todos.slice();
    todoList.splice(index, 1);//od kog pocinjemo, koliko elemenata brisemo
    // console.log(todoList);
    setTodos(todoList);
    notification.success({
      message: "Success",
      description: "Task successfully deleted!",
      duration: 1
    });

  }

  return (
    <>
      <h2>Todo list</h2>
      <AddNewTask addTask={addTask} />
      <TodoList todos={todos} deleteTask={deleteTask} />


    </>
  );
}
export default App;



