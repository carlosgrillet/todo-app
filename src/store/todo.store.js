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

const loadStore = () => {
  throw new Error('Not implemented');
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error('Opcion no permitida');
  }
};

const addTodo = () => {
  throw new Error('Not implemented');
};

const toggleTodo = () => {
  throw new Error('Not implemented');
};

const deleteTodo = () => {
  throw new Error('Not implemented');
};

const deleteCompleted = () => {
  throw new Error('Not implemented');
};

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented');
};

export default {
  initStore,
  loadStore,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
};
