import { useTodosContext } from '../../context/TodoContext.js';
import { createTodo } from '../../services/todos.js';

export default function TodoForm() {
  const { name, setName, setTodos } = useTodosContext();

  const handleNewTodo = async () => {
    try {
      const todo = await createTodo(name);
      setTodos((prev) => [...prev, todo]);
      setName('');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <input type="text" placeholder="New Todo" value={name} />
      <button className="button" onClick={handleNewTodo}>
        Add Todo
      </button>
    </div>
  );
}
