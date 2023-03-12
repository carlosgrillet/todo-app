import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './models/use-cases';

const elementIds = {
  clearCompleted: '.clear-completed',
  TodoList: '.todo-list',
  newTodoInput: '.new-todo',
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

  const newDescriptionInput = document.querySelector(elementIds.newTodoInput);
  const todoListUL = document.querySelector(elementIds.TodoList);
  const deleteAllButton = document.querySelector(elementIds.clearCompleted);

  newDescriptionInput.addEventListener('keydown', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().lenght === 0) return;
    todoStore.addTodo(event.target.value);
    event.target.value = '';
    generarTodos();
  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    const selectedTodo = element.getAttribute('data-id');
    const elementClass = event.target.className;

    if (elementClass === 'toggle') {
      todoStore.toggleTodo(selectedTodo);
    }
    if (elementClass === 'destroy') {
      todoStore.deleteTodo(selectedTodo);
    }

    generarTodos();
  });

  deleteAllButton.addEventListener('click', () => {
    todoStore.deleteCompleted();
    generarTodos();
  });
};
