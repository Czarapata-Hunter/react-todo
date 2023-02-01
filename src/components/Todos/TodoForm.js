import { useTodosContext } from '../../context/TodoContext.js';
import { createTodo } from '../../services/todos.js';

export default function TodoForm() {
  const { description, setDescription, setTodo } = useTodosContext();

  const handleNewTodo = async () => {
    try {
      const todo = await createTodo(description);
      setTodo((prev) => [...prev, todo]);
      setDescription('');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="button" onClick={handleNewTodo}>
        Add Todo
      </button>
    </div>
  );
}
