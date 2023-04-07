class Task {
    constructor(projectName, taskName, taskDescription, dueDate) {
      this.projectName = projectName;
      this.taskName = taskName;
      this.taskDescription = taskDescription;
      this.dueDate = dueDate;
    }
  }

  class TaskList {
    constructor() {
      this.tasks = [];
    }

    addTask(task) {
      this.tasks.push(task);
    }

    removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }

    render() {
      const taskListElement = document.getElementById('task-list');
      taskListElement.innerHTML = '';

      this.tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
          <h3> ${task.projectName}</h3>
          <p><strong>Task:</strong> ${task.taskName}</p>
          <p><strong>Description:</strong> ${task.taskDescription}</p>
          <p><strong>Due Date:</strong> ${task.dueDate}</p>
          <button class="remove-task-button">Remove</button>
        `;
        const removeButton = taskElement.querySelector('.remove-task-button');
        removeButton.addEventListener('click', () => {
          this.removeTask(task);
          this.render();
        });
        taskListElement.appendChild(taskElement);
      });
    }
  }

  const taskList = new TaskList();
  const form = document.getElementById('add-task-form');
  form.addEventListener('submit', event => {
    event.preventDefault();

    const projectName = form.elements['project-name'].value;
    const taskName = form.elements['task-name'].value;
    const taskDescription = form.elements['task-description'].value;
    const dueDate = form.elements['due-date'].value;

    const task = new Task(projectName, taskName, taskDescription, dueDate);
    taskList.addTask(task);
    taskList.render();

    form.reset();
  });