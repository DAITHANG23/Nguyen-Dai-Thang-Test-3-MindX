import { useState } from "react";
import "./Form.css";
const Form = ({ onAddTodo, isLanguage }) => {
  const [todo, setTodo] = useState();
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      onAddTodo(todo);
    } else {
      alert("Fill in form, please!");
    }

    setTodo("");
  };
  return (
    <form className="form" onSubmit={onSubmitHandle}>
      <input
        type="text"
        value={todo}
        onChange={onChangeTodo}
        placeholder="Enter task ..."
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
