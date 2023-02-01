import { createContext, useEffect, useState, useContext } from 'react';
import { getTodos } from '../services/todos.js';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [description, setDescription] = useState('');
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodo(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchTodos();
  }, []);
  return (
    <TodosContext.Provider value={{ todo, setTodo, description, setDescription }}>
      {children}
    </TodosContext.Provider>
  );
};

const useTodosContext = () => {
  const data = useContext(TodosContext);

  if (!data) {
    throw new Error('useTodos must be encompassed in a TodosProvider');
  }
  return data;
};

export { useTodosContext, TodosProvider };
