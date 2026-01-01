import {
  todoListData,
  progressListData,
  completedListData,
  delayListData,
  signListData,
  createTodoList,
  createProgressList,
  createCompletedList,
  createDelayList,
  createSignList
} from "./Todos.js";

// This function loads tasks from localStorage and renders them
export function reloadAlltask( ) {
  // Load TODO tasks
  let storedTodo = localStorage.getItem("TODO");
  if (storedTodo) {
    todoListData.length = 0;               
    let todos = JSON.parse(storedTodo);    
    for (let i = 0; i < todos.length; i++) {
      todoListData.push(todos[i]);         
    }
  }

  // Load PROGRESS tasks
  let storedProgress = localStorage.getItem("PROGRESS");
  if (storedProgress) {
    progressListData.length = 0;
    let progress = JSON.parse(storedProgress);
    for (let i = 0; i < progress.length; i++) {
      progressListData.push(progress[i]);
    }
  }

  // Load COMPLETED tasks
  let storedCompleted = localStorage.getItem("COMPLETED");
  if (storedCompleted) {
    completedListData.length = 0;
    let completed = JSON.parse(storedCompleted);
    for (let i = 0; i < completed.length; i++) {
      completedListData.push(completed[i]);
    }
  }

  // Load SIGN tasks
  let storedSign = localStorage.getItem("SIGN");
  if (storedSign) {
    signListData.length = 0;
    let sign = JSON.parse(storedSign);
    for (let i = 0; i < sign.length; i++) {
      signListData.push(sign[i]);
    }
  }

  // Load BACKLOG tasks
  let storedBacklog = localStorage.getItem("BACKLOG");
  if (storedBacklog) {
    delayListData.length = 0;
    let backlog = JSON.parse(storedBacklog);
    for (let i = 0; i < backlog.length; i++) {
      delayListData.push(backlog[i]);
    }
  }

  // Render all lists
  createTodoList();
  createProgressList();
  createCompletedList();
  createSignList();
  createDelayList();
}
