import "./TodoList.css";

const TodoList = ({ todoList, isCheckTodoList, isChecked, onRemoveToDo }) => {
  const todoListNotActive = todoList.filter((todoItem) => {
    return todoItem.isCheck !== true;
  });

  const todoItemNotActive = todoListNotActive.map((todoItem) => {
    const { title, id, isCheck } = todoItem;
    return (
      <div
        className={isCheck ? "todo-item-container done" : "todo-item-container"}
        key={id}
      >
        <input
          type="checkbox"
          checked={isCheck}
          onChange={() => isCheckTodoList(id)}
        />
        <div className="item-title">{title}</div>
        <button onClick={() => onRemoveToDo(id)}>x</button>
      </div>
    );
  });
  const todoListValid = todoList && Array.isArray(todoList);
  const todoItem =
    todoListValid &&
    todoList.map((todoItem) => {
      const { title, id, isCheck } = todoItem;
      return (
        <div
          className={
            isCheck ? "todo-item-container done" : "todo-item-container"
          }
          key={id}
        >
          <input
            type="checkbox"
            checked={isCheck}
            onChange={() => isCheckTodoList(id)}
          />
          <div className="item-title">{title}</div>
          <button onClick={() => onRemoveToDo(id)}>x</button>
        </div>
      );
    });

  return (
    <div className="todo-list-container">
      {!isChecked ? <div>{todoItem}</div> : <div>{todoItemNotActive}</div>}
      {/* {todoItem} */}
    </div>
  );
};

export default TodoList;
