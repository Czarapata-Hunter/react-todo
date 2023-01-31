import { createContext, useEffect, useState } from 'react';
import { getTodos } from '../services/todos.js';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
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
  return <TodosContext.Provider value={{ todo, setTodo }}>{children}</TodosContext.Provider>;
};

export { TodosContext, TodosProvider };
