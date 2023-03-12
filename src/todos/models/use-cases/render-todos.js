import { createTodoHTML } from './create-todo-html';
let element;

export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);
  element.innerHTML = '';
  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
