import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './models/use-cases';

const elementIds = {
  TodoList: '.todo-list',
};

/**
 *
 * @param {String} elementId Pagina web
 */
export const App = (elementId) => {
  const generarTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIds.TodoList, todos);
  };
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    generarTodos();
  })();
};
