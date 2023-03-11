export class Todo {
  /**
   *
   * @param {String} description Descripcion de la tarea
   */
  constructor(description) {
    if (!description) throw 'Error: Es necesario describir la tarea';
    this.id = 1;
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
