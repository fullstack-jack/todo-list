import "./styles.css"

const projects = []
const todos = []

class Project {
    constructor(name) {
        this.name = name    
        this.todos = []
    }

    addProject(project) {
        projects.push(project)
    }
    
}

class Todo {
  constructor(title, description, dueDate, priority, notes = '', checklist = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.completed = false;
  }

  addTodo(todo) {
        todos.push(todo)
    }
}

const todo1 = new Todo("test")
todo1.addTodo(todo1)
console.log(todos)

// UI
const bottom = document.querySelector(".bottom")
const square = document.createElement("div")
square.style.height = "200px"
square.style.width = "200px"
bottom.append(square)
