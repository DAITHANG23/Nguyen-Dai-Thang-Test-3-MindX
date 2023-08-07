import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import Form from "./components/Form/Form";
import Footer from "./pages/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [todoList, setTodoList] = useState(() => {
    const todoListStorage = localStorage.getItem("todoApp");
    return todoListStorage ? JSON.parse(todoListStorage) : [];
  });
  const [isChecked, setIsChecked] = useState(false);
  const [language, setLanguage] = useState("US");
  useEffect(() => {
    window.localStorage.setItem("todoApp", JSON.stringify(todoList));
  }, [todoList]);
  const onAddTodo = (todo) => {
    const newTodo = {
      title: todo,
      id: uuidv4(),
      isCheck: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const isCheckTodoList = (todoId) => {
    const todoIndex = todoList.findIndex((itemId) => {
      return itemId.id === todoId;
    });
    const newTodoItem = [...todoList];

    if (newTodoItem[todoIndex].isCheck === false) {
      newTodoItem[todoIndex].isCheck = true;
    } else {
      newTodoItem[todoIndex].isCheck = false;
    }
    setTodoList(newTodoItem);
  };

  const isCheckTodoNotActive = () => {
    if (!isChecked) {
      setIsChecked(true);
    } else setIsChecked(false);
  };

  const onRemoveToDo = (id) => {
    const todoRemove = todoList.filter((todoItem) => {
      return todoItem.id !== id;
    });
    setTodoList(todoRemove);
  };
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader
          language={language}
          todoList={todoList}
          isCheckTodoNotActive={isCheckTodoNotActive}
          isChecked={isChecked}
        />
        <TodoList
          isChecked={isChecked}
          todoList={todoList}
          isCheckTodoList={isCheckTodoList}
          onRemoveToDo={onRemoveToDo}
        />
        <Form language={language} onAddTodo={onAddTodo} />
      </div>
      <Footer setLanguage={setLanguage} />
    </div>
  );
};
