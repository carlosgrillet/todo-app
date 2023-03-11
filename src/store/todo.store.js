import { Todo } from '../todos/models/todo.models';

const Filters = {
  All: 'All',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [
    new Todo('Hola'),
    new Todo('Hola'),
    new Todo('Hola'),
    new Todo('Hola'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('store initialized');
};

export default {
  initStore,
};
