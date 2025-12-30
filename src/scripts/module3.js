//this logic is for searching the  and clearing task.
import {
  todoList,
  progressList,
  completedList,
  delayList,
  signList,
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
var searchInput = document.querySelector("#searchInput");

let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", handleSearchListItem);
export function handleSearchListItem() {
  let searchTaskvalue = searchInput.value.toLowerCase().trim();

  let todoItems = todoList.getElementsByTagName("li");
  let progressItems = progressList.getElementsByTagName("li");
  let completedItems = completedList.getElementsByTagName("li");
  let delayItems = delayList.getElementsByTagName("li");
  let signItems = signList.getElementsByTagName("li");

  for (let i = 0; i < todoListData.length; i++) {
    let todotext = todoListData[i].title;
    todotext = todotext.toLowerCase();
    let todoIsmatch = todotext.includes(searchTaskvalue);
    if (todoIsmatch == true) {
      todoItems[i].style.display = "flex";
    } else {
      todoItems[i].style.display = "none";
    }
  }
  for (let i = 0; i < progressListData.length; i++) {
    let progresstext = progressListData[i].title;
    progresstext = progresstext.toLowerCase();
    let progressismatch = progresstext.includes(searchTaskvalue);
    if (progressismatch == true) {
      progressItems[i].style.display = "flex";
    } else {
      progressItems[i].style.display = "none";
    }
  }
  for (let i = 0; i < completedListData.length; i++) {
    let completedtext = completedListData[i].title;
    completedtext = completedtext.toLowerCase();
    let completdIsmatch = completedtext.includes(searchTaskvalue);
    if (completdIsmatch == true) {
      completedItems[i].style.display = "flex";
    } else {
      completedItems[i].style.display = "none";
    }
  }
  for (let i = 0; i< delayListData.length; i++) {
    let delayText = delayListData[i].title;
    delayText = delayText.toLowerCase();
    let delayListismatch = delayText.includes(searchTaskvalue);
    if (delayListismatch == true) {
      delayItems[i].style.display = "flex";
    } else {
      delayItems[i].style.display = "none";
    }
  }
 
  for (let i = 0; i < signListData.length; i++) {
    let signtext = signListData[i].title;
    signtext = signtext.toLowerCase();
    let signIsmatch = signtext.includes(searchTaskvalue);
    if (signIsmatch == true) {
      signItems[i].style.display = "flex";
    } else {
      signItems[i].style.display = "none";
    }
  }
}
let clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", handleClearTask);
function handleClearTask() {
  searchInput.value = "";
  createTodoList();
  createProgressList();
  createCompletedList();
  createDelayList();
  createSignList();
}