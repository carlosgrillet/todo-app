export const createTodoHTML = (todo) => {
  if (!todo) throw new Error('A todo object is required');
  const { done, description, id } = todo;
  const task_done = done ? 'completed' : 'view';
  const check = done ? 'checked' : '';
  const html = `
    <div class="view">
      <input class="toggle" type="checkbox" ${check}>
      <label>${description}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `;
  const liElement = document.createElement('li');
  liElement.setAttribute('data-id', id);
  liElement.setAttribute('class', task_done);
  liElement.innerHTML = html;

  return liElement;
};
