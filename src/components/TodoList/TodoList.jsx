import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function TodoList({ deleteTodo, todoFinished, editTodo }) {
  const list = useSelector((state) => state.todo);

  function onFinished(todo, isFinished) {
    todoFinished(todo, isFinished);
  }

  function onDelete(todo) {
    deleteTodo(todo);
  }
  function onEdit(todo, todoText) {
    editTodo(todo, todoText);
  }
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todoData={todo.todoData}
            isFinished={todo.finished}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(text) => onEdit(todo, text)}
          />
        ))}
    </div>
  );
}

export default TodoList;
