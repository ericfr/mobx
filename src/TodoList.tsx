import * as React from "react";
import { observer, useObservable } from "mobx-react-lite";

export const TodoList = observer(() => {
  const todos = useObservable(new Map<string, boolean>());
  const todoRef = React.useRef();
  const addTodo = React.useCallback(() => {
    todos.set(todoRef.current.value, false);
    todoRef.current.value = "";
  }, []);
  const toggleTodo = React.useCallback((todo: string) => {
    todos.set(todo, !todos.get(todo));
  }, []);

  return (
    <div>
      {Array.from(todos).map(([todo, done]) => (
        <div onClick={() => toggleTodo(todo)} key={todo}>
          {todo}
          {done ? " ✔" : " ⏲"}
        </div>
      ))}
      <input ref={todoRef} />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
});
