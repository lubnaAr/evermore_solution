# Evermore coding challenge

This template provides a minimal setup and `all the tools you will need` for this challenge.
Complete as much as you can or have the knowledge for! Please try to timebox this to 4-5 hours. On the coding interview, we will ask for a quick demo of
the challenge, walkthrough of the code and after which we will discuss and challenge your decisions. Good luck!

## Instructions

- Checkout the repository, install dependencies and run the project with `npm run dev`
- Design is entirely up to you, so be as creative as you want; we have prepared [MaterialUI](https://mui.com/material-ui/all-components/), but feel free to pick any framework that you are comfortable with
- [Typescript](https://react.dev/learn/typescript), [React Router](https://reactrouter.com) and [Redux](https://redux-toolkit.js.org/) are included in the project and are encouraged to be used
- Structure files and components according to the best coding practices that you are familiar with
- Follow the User Stories below as a criteria for this challenge
- Once you are done, submit a Pull Request for a review and discussion

## User stories

### 1. Task list

On app load, user should see the full list of tasks, centered in the middle, with each item having
Name, Priority and State displayed on it. User can click on the State button/text, and move it to the next state.
Eg: if task is in "To do" state, clicking on it will move it to "In Progress".

### 2. Create Task

On a button click on the Task list view, modal is opened where user can input data in order to create a new task.
User has to be able to enter a name of the task and select a priority. By default, each tasks will be in "todo" state.
When the task is created, it should be on the top of the list.

### 3. Delete Task

User can delete a task, by clicking a delete button on a list on a task. Prior to deletion, confirmation modal is shown
where user can either click "Cancel", or "Confirm". On cancel, modal is closed while on confirm, modal is closed and task
is removed from the UI. In case there are no tasks remaining, user sees a "All done!" texts.

### 4. Edit Task

User can edit a task, by clicking an edit button on a list on a task. Upon clicking, modal is opened with that
particular task information filled. If user presses the "Edit" button, tasks information will be updated, and the modal
closed.

### 5. Sort & Filter tasks

On the list view, user can sort and filter tasks by their state and priority. By default, list view should
filter out tasks that are done, and sort them by higher priority.

_(bonus)_ User always sees the latest sort/filter combination he had selected, on each consequent visit.

### (bonus) 6. Multiple task lists

User can create a new task list and in that way track tasks for different purpose. Eg: Work, home chores, hobby etc.
On a button click "New list", modal opens where user enters the name of the list. On confirm modal is closed and
user has all tasks on the list view filtered by tasks that belong to this list (initially no tasks are created for the
new list).
