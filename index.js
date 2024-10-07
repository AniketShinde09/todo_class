class Todo {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.created_at = new Date();
      this.updated_at = new Date();
    }
  }
  
  class TodoApp {
    constructor() {
      this.todos = [];
      this.nextId = 1;
    }
  
    createTodo(title, content) {
      const todo = new Todo(this.nextId, title, content);
      this.todos.push(todo);
      this.nextId++;
      return todo;
    }
  
    getTodo(todoId) {
      return this.todos.find(todo => todo.id === todoId);
    }
  
    updateTodo(todoId, title = null, content = null) {
      const todo = this.getTodo(todoId);
      if (todo) {
        if (title) todo.title = title;
        if (content) todo.content = content;
        todo.updated_at = new Date();
        return todo;
      }
      return null;
    }
  
    deleteTodo(todoId) {
      const index = this.todos.findIndex(todo => todo.id === todoId);
      if (index !== -1) {
        this.todos.splice(index, 1);
        return true;
      }
      return false;
    }
  
    listTodos() {
      return this.todos;
    }
  }
  

  const todoApp = new TodoApp();
  
  const todo1 = todoApp.createTodo('learn JS', 'More JS');
  console.log(todo1);
  
  const todo2 = todoApp.createTodo('learn NextJS', 'from zero');
  console.log(todo2);
  
  const fetchedTodo = todoApp.getTodo(1);
  console.log(fetchedTodo);
  
  const updatedTodo = todoApp.updateTodo(1, 'more advance concepts');
  console.log(updatedTodo);
  
  const isDeleted = todoApp.deleteTodo(2);
  console.log(isDeleted);
  
  console.log(todoApp.listTodos());
  