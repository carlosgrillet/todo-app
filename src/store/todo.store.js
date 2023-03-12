import { Todo } from '../todos/models/todo.models';

export const Filters = {
  All: 'All',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log('store initialized');
};

const loadStore = () => {
  const localData = localStorage.getItem('state');
  const jsonState = JSON.parse(localData);
  if (!localData) return;
  const { todos = [], filter = Filters.All } = jsonState;
  state.todos = todos;
  state.filter = filter;
};

const saveToLocalStorage = () => {
  const jsonState = JSON.stringify(state);
  localStorage.setItem('state', jsonState);
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
  saveToLocalStorage();
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  saveToLocalStorage();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveToLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveToLocalStorage();
};

const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveToLocalStorage();
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
