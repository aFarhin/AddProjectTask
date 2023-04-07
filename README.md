# AddProjectTask

This code is for a basic Add-Project-Task list application , which allows users to add tasks to a list and remove them when they are completed.📚
It consists of two main classes: 1️⃣Task 2️⃣TaskList

The Task class is used to create instances of individual tasks, which are defined by their -
project name👩‍🦰
task name📝
task description📥
due date📆

The TaskList class is used to manage a list of tasks. 
It contains an array of tasks and methods for adding and removing tasks from the list, as well as rendering the list of tasks in the DOM. 
The render() method creates an HTML element for each task and adds it to the DOM. 
It also adds a "Remove" button to each task element, which allows users to remove tasks from the list.

The code also includes an event listener that listens for a form submission, which adds a new task to the list when the user submits the form. 
When the form is submitted, the values of the form inputs are used to create a new Task object, which is added to the TaskList array of tasks. 
Finally, the render() method is called to update the list of tasks in the DOM.
