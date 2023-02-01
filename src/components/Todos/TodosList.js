import { useTodosContext } from '../../context/TodoContext.js';

export default function TodosList() {
  const { todo } = useTodosContext();

  return (
    <>
      {todo.map((todo) => (
        <div key={todo.id}>{todo.description}</div>
      ))}
    </>
  );
}
