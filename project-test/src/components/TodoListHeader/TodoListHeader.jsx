import React from "react";
import "./TodoListHeader.css";
const TodoListHeader = ({
  todoList,
  isCheckTodoNotActive,
  isChecked,
  language,
}) => {
  const todoAcive = todoList.filter((todoItem) => {
    return todoItem.isCheck === true;
  });
  const taskLeft = todoList.length - todoAcive.length;

  return (
    <div className="header">
      {!taskLeft ? (
        <>{language === "US" ? <p>Done</p> : <p>Hoàn thành</p>}</>
      ) : (
        <>
          {taskLeft === todoList.length ? (
            <>
              {language === "US" ? <p>Not Finished</p> : <p>Chưa hoàn thành</p>}
            </>
          ) : (
            <>
              {language === "US" ? (
                <p>{`You have ${taskLeft} tasks left!`}</p>
              ) : (
                <p>{`Bạn có ${taskLeft} việc chưa làm`}</p>
              )}
            </>
          )}
        </>
      )}

      <div className="input-check">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={isCheckTodoNotActive}
        />
        {language === "US" ? (
          <label style={{ paddingLeft: "5px" }}>Not finished only</label>
        ) : (
          <label style={{ paddingLeft: "5px" }}>Chỉ chưa hoàn thành</label>
        )}
      </div>
    </div>
  );
};

export default TodoListHeader;
