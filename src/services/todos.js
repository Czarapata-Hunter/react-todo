import { checkError, client } from './client.js';

export async function getTodos() {
  const response = await client.from('react-todo').select();

  return checkError(response);
}

export async function createTodo(description) {
  if (!description) return;
  const response = await client.from('react-todo').insert({ description }).single();
  return checkError(response);
}
