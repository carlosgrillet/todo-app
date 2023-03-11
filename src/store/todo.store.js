import { Todo } from '../todos/models/todo.models';

const Filters = {
  All: 'All',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [
    new Todo('Ir a comprar comida'),
    new Todo('Pedir cosas por amazon'),
    new Todo('Ir al trabajo'),
    new Todo('Comprar comida para las gatas'),
    new Todo('Reparar el aire acondicionado'),
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
      throw new Error(`Option ${filter} not valid`);
  }
};

const addTodo = (description) => {
  if (!description) throw new Error('Description required');
  state.todos.push(new Todo(description));
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.done);
};

const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
};

const getCurrentFilter = (newFilter = Filters.All) => {
  return state.filter;
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
  getCurrentFilter,
};
