import {reloadAlltask} from "./reload.js"
import{runslider} from "./slider.js";
import {createTodoTask,createProgressTask,createCompletedTask,createSignTasks,createBacklogTask} from "./createTasks.js";

import {attachTodoBacklog,attachProgressToTodo,attachCompletedToProgress,attachSignToCompleted} from "./moveBackTask.js";
import {attachTodoProgress,attachProgressToCompleted,attachCompletedToSign,attachBacklogToTodo} from "./moveforwardTask.js";
import {attachTodoDelete,attachProgressDelete,attachCompletedDelete,attachBacklogDelete,attachSignDelete} from "./deleteTask.js";

import{addButtonTask } from "./addBtn.js";
import{handleSearchListItem} from "./searchTask.js";

export let taskInput = document.querySelector("#taskInput");
export let addBtn = document.querySelector("#addBtn");
export let dueDate = document.querySelector("#dueDate");

export let todoList = document.querySelector("#todoList");
export let progressList = document.querySelector("#progressList");
export let completedList = document.querySelector("#completedList");
export let delayList = document.querySelector("#delayList");
export let signList = document.querySelector("#signList");
 
let searchBtn = document.querySelector("#searchBtn");

 export let todoListData = [];
 export let progressListData = [];
export let completedListData = [];
export let delayListData = [];
export let signListData = [];

//these variable is used for updating the task when variable's value is -1 it means we are not updating otherwise updating 
export let updateTodoTaskIndex = -1;
export let updateprogressTaskIndex = -1;
export let updateDoneTaskIndex = -1;
export let updateBacklogTaskIndex = -1;

function resetUpdateIndexes() {
  updateTodoTaskIndex = -1;
  updateprogressTaskIndex = -1;
  updateDoneTaskIndex = -1;
  updateBacklogTaskIndex = -1;
}
//create a new task when i click the add Task button
window.addEventListener("DOMContentLoaded", ()=> {
   reloadAlltask(); 
   runslider();
});
addBtn.addEventListener("click",  ()=> {
  var inputboxText = taskInput.value.trim();
  var dueDatevalue = dueDate.value;
addButtonTask(inputboxText,taskInput,dueDate,dueDatevalue ,delayListData,updateTodoTaskIndex,progressListData,updateprogressTaskIndex,updateDoneTaskIndex ,updateBacklogTaskIndex,todoListData,completedListData,createTodoList,createProgressList,createCompletedList,createDelayList,resetUpdateIndexes,handleClearTask);
});
export function createTodoList() {
  todoList.innerHTML = "";
  document.querySelector("#tTaskHeading").children[0].innerHTML =   todoListData.length;
   for (let i = 0; i < todoListData.length; i++) 
    {
    todoList.insertAdjacentHTML( "beforeend", createTodoTask({ title: todoListData[i].title, createDate: todoListData[i].createDate, update: todoListData[i].update,  due: todoListData[i].due })    );
  }
  let todoListItem = document.querySelectorAll(".todoListItem");
  for (let i = 0; i < todoListData.length; i++) {
    let index = i;  
    attachTodoBacklog(todoListItem[index], index, todoListData, delayListData ,createDelayList,createTodoList);
    attachTodoProgress(todoListItem[index], index, todoListData, progressListData,createTodoList,createProgressList);
    attachTodoDelete(todoListItem[index], index, todoListData,createTodoList);
      
     todoListItem[i].querySelector(".todoEditButton").addEventListener("click", todoEditList);
    function todoEditList() {
      taskInput.value =  todoListData[i].title;
      dueDate.value = todoListData[i].due;     
      updateTodoTaskIndex = i;
    }
  }
}
//this logic is for create progress list
export function createProgressList() {
  progressList.innerHTML = "";
  document.querySelector("#pTaskHeading").children[0].innerHTML = progressListData.length;

  for (let i = 0; i < progressListData.length; i++)
 {
    progressList.insertAdjacentHTML( "beforeend", createProgressTask({ title: progressListData[i].title, createDate: progressListData[i].createDate, update: progressListData[i].update, due: progressListData[i].due,}) );
  }
  let progressListItem = document.querySelectorAll(".progressListItem");

  for (let i = 0; i < progressListData.length; i++) {
    let index = i;
    attachProgressDelete( progressListItem[index], index, progressListData, createProgressList);
    attachProgressToTodo(progressListItem[index],index,progressListData, todoListData, createProgressList, createTodoList);
    attachProgressToCompleted( progressListItem[index], index, progressListData,completedListData, createProgressList, createCompletedList);

    progressListItem[index].querySelector(".progressEditButton").addEventListener("click", function () {
        taskInput.value = progressListData[index].title;
        dueDate.value = progressListData[index].due;
        updateprogressTaskIndex = index;
      });
  }
}
export function createCompletedList() {
  completedList.innerHTML = "";
  document.querySelector("#dTaskHeading").children[0].innerHTML =
    completedListData.length;

  for (let i = 0; i < completedListData.length; i++) {
    completedList.insertAdjacentHTML(
      "beforeend",
      createCompletedTask({
        title: completedListData[i].title,
        createDate: completedListData[i].createDate,
        update: completedListData[i].update,
        due: completedListData[i].due,
      })
    );
  }
  let completedListItem = document.querySelectorAll(".completedListItem");
  for (let i = 0; i < completedListData.length; i++) {
    let index = i;
    attachCompletedDelete(completedListItem[index], index, completedListData, createCompletedList);
    attachCompletedToProgress(completedListItem[index],index, completedListData, progressListData, createCompletedList, createProgressList);
    attachCompletedToSign(completedListItem[index], index, completedListData, signListData, createCompletedList, createSignList);

    completedListItem[index].querySelector(".completedEditButton").addEventListener("click", function () {
        taskInput.value = completedListData[index].title;
        dueDate.value = completedListData[index].due;
        updateDoneTaskIndex = index;
      });
  }
}
export function createSignList() {
  signList.innerHTML = "";
  document.querySelector("#eTaskHeading").children[0].innerHTML =
    signListData.length;

  for (let i = 0; i < signListData.length; i++) {
    signList.insertAdjacentHTML( "beforeend",createSignTasks({title: signListData[i].title, createDate: signListData[i].createDate, update: signListData[i].update, due: signListData[i].due, })
    );
  }
  let signListItem = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++) {
    let index = i;
    attachSignDelete(signListItem[index], index, signListData,createSignList);
    attachSignToCompleted(signListItem[index],index,signListData,completedListData,createSignList,createCompletedList);
  }
}
export function createDelayList() {
  delayList.innerHTML = "";
  document.querySelector("#bTaskHeading").children[0].innerHTML =
    delayListData.length;

  for (let i = 0; i < delayListData.length; i++)
     {
    delayList.insertAdjacentHTML( "beforeend", createBacklogTask({title: delayListData[i].title,createDate: delayListData[i].createDate,update: delayListData[i].update, due: delayListData[i].due, }) 
  );
  }
  let delayListItem = document.querySelectorAll(".delayListItem");
  for (let i = 0; i < delayListData.length; i++) {
    let index = i;
    attachBacklogDelete(delayListItem[index], index, delayListData, createDelayList );
    attachBacklogToTodo(delayListItem[index],index,delayListData,todoListData, createDelayList, createTodoList );

    delayListItem[index] .querySelector(".backlogEditButton").addEventListener("click", function () {
        taskInput.value = delayListData[index].title;
        dueDate.value = delayListData[index].due;
        updateBacklogTaskIndex = index;
      });
  }
}
searchBtn.addEventListener("click", ()=>{
var searchInput = document.querySelector("#searchInput");
handleSearchListItem(searchInput,todoList, progressList, completedList, delayList, signList, todoListData, progressListData, completedListData, delayListData, signListData);
});
clearBtn.addEventListener("click", handleClearTask);
 function handleClearTask() 
 {
  searchInput.value = "";
  createTodoList();
  createProgressList();
  createCompletedList();
  createDelayList();
  createSignList();
}








