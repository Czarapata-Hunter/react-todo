import { useUserContext } from '../../context/UserContext.js';
// import { createTodo } from '../../services/todos.js';
import TodosList from './TodosList.js';
import TodoForm from './TodoForm.js';
import { Redirect } from 'react-router-dom';

export default function Todos() {
  const { user } = useUserContext();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="container">
      <div>
        <TodoForm />
        <TodosList />
      </div>
    </div>
  );
}
