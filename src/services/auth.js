import { client } from '../services/client.js';

export function getUser() {
  return client.auth.currentUser;
}
