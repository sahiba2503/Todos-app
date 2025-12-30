import { } from "./module1.js";
import { createTodoTask, createProgressTask, createCompletedTask, 
  createSignTasks, createBacklogTask } from "./createTask.js";
import{ } from "./module3.js";
import { reloadAlltask } from "./module4.js";

window.addEventListener("DOMContentLoaded", function () {
  reloadAlltask(); 
});
// import{handleSearchListItem,searchInput,searchBtn,clearBtn,todoListData,progressListData,completedListData,signListData,delayListData,delayList,todoList,progressList,completedList,signList} from "./module11.js";
//this code is responsible for handling the task how task is moving from planing to completion 
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let dueDate = document.querySelector("#dueDate");

export let todoList = document.querySelector("#todoList");
export let progressList = document.querySelector("#progressList");
export let completedList = document.querySelector("#completedList");
export let delayList = document.querySelector("#delayList");
export let signList = document.querySelector("#signList");

 export let todoListData = [];
 export let progressListData = [];
export let completedListData = [];
export let delayListData = [];
export let signListData = [];
//these variable is used for updating the task when variable's value is -1 it means we are not updating otherwise updating 
let updateTodoTaskIndex = -1;
let updateprogressTaskIndex = -1;
let updateDoneTaskIndex = -1;
let updateBacklogTaskIndex = -1;
//create a new task when i click the add Task button
addBtn.addEventListener("click", ()=>  {
  var inputboxText = taskInput.value.trim();
  var dueDatevalue = dueDate.value;
  //crating new date assign in create date in english indian formate
  var createDatevalue = new Date().toLocaleString("en-IN", {    weekday: "long",    year: "numeric",    month: "short",   day: "numeric",  });
  //check condition is empty task input field or due date
  if (inputboxText == "" || dueDatevalue == "") {    return;  }
  //checking here are  equal -1  these variabl's value
  if (updateTodoTaskIndex == -1 && updateprogressTaskIndex == -1 &&
    updateDoneTaskIndex == -1 && updateBacklogTaskIndex == -1) {
    let todoTask = {  title: inputboxText,  createDate: createDatevalue,   update: "",    due: dueDatevalue   };
    // push task in array
    todoListData.push(todoTask);
    // Save todoarray in localStorage
      localStorage.setItem("TODO", JSON.stringify(todoListData));
    taskInput.value = " ";
    dueDate.value = " ";
    searchInput.value = "";
    createTodoList();
    handleSearchListItem();
  }
  //logic for todo task update when click add button
  else if (updateTodoTaskIndex != -1) {
    todoListData[updateTodoTaskIndex].title = taskInput.value;
    todoListData[updateTodoTaskIndex].update = new Date().toLocaleString("en-IN", {      weekday: "long",      year: "numeric",      month: "short",      day: "numeric",    });
    todoListData[updateTodoTaskIndex].due = dueDate.value;
    // update todo array in local storage
    localStorage.setItem("TODO", JSON.stringify(todoListData));
    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createTodoList();
    handleSearchListItem();
    updateTodoTaskIndex = -1;
  }
  //logic for progress task update when click add button
  else if (updateprogressTaskIndex != -1) {
    progressListData[updateprogressTaskIndex].title = taskInput.value;
    progressListData[updateprogressTaskIndex].update = new Date().toLocaleString("en-IN", {      weekday: "long",      year: "numeric",      month: "short",      day: "numeric",    });
    progressListData[updateprogressTaskIndex].due = dueDate.value;
    // update  progress array task  in local storage
   localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createProgressList();
    handleSearchListItem();
    updateprogressTaskIndex = -1;
  }
  // update done task when click add button
  else if (updateDoneTaskIndex != -1) {
    completedListData[updateDoneTaskIndex].title = taskInput.value;
    completedListData[updateDoneTaskIndex].update = new Date().toLocaleString("en-IN", {      weekday: "long",      year: "numeric",      month: "short",      day: "numeric",    });
    completedListData[updateDoneTaskIndex].due = dueDate.value;
    // update  completed array in local storage
   localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createCompletedList();
    handleSearchListItem();
    updateDoneTaskIndex = -1;
  }
  //logic for todo task update when click add button
  else if (updateBacklogTaskIndex != -1) {
    delayListData[updateBacklogTaskIndex].title = taskInput.value;
    delayListData[updateBacklogTaskIndex].update = new Date().toLocaleString("en-IN", {      weekday: "long",      year: "numeric",      month: "short",      day: "numeric",    });
    delayListData[updateBacklogTaskIndex].due = dueDate.value;
    // update backlog array  in local storage
   localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createDelayList();
    handleSearchListItem();
    updateBacklogTaskIndex = -1;
  }
});
//this logic is for create todo list
export function createTodoList() {
  todoList.innerHTML = "";
  //this logic for displaying total number of task present in the section
  var totalTodo = document.querySelector("#tTaskHeading");
  var todoL = todoListData.length;
  totalTodo.children[0].innerHTML = todoL;
  for (let i = 0; i < todoListData.length; i++) {
    todoList.insertAdjacentHTML(
      "beforeend",
      createTodoTask({ title: todoListData[i].title, createDate: todoListData[i].createDate, update: todoListData[i].update,  due: todoListData[i].due   })
    );
  }
  let todoListItem = document.querySelectorAll(".todoListItem");

  for (let i = 0; i < todoListData.length; i++) {
    //logic to update todo  task 
    todoListItem[i].querySelector(".todoEditButton").addEventListener("click", ()=> {
      taskInput.value = todoListData[i].title;
      dueDate.value = todoListData[i].due;
      updateTodoTaskIndex = i;
        });
    //move todo task  to backlog 
    todoListItem[i].querySelector(".todoBacklog").addEventListener("click", ()=> {
       var todoBacklogListTitle = todoListData[i].title;
      var todoBacklogListCreate = todoListData[i].createDate;
      var todoBacklogListDue = todoListData[i].due;
      let backTask = { title: todoBacklogListTitle, createDate: todoBacklogListCreate, update: "", due: todoBacklogListDue  };
      // Add task to array/
      delayListData.push(backTask);
      todoListData.splice(i, 1);
      createDelayList();
      createTodoList();
      // update backlog array to localStorage
     localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
      //update todo array to local storage
      localStorage.setItem("TODO", JSON.stringify(todoListData));
       dueDate.value = "";
      taskInput.value = "";
    });
    //logic for move todo task in progress
    todoListItem[i] .querySelector(".todoMoveButton").addEventListener("click", ()=> {
      var todoProgListTitle = todoListData[i].title;
      var todoProgListCreate = todoListData[i].createDate;
      var todoProgListDue = todoListData[i].due;
      let forwardTask = { title: todoProgListTitle, createDate: todoProgListCreate, update: "", due: todoProgListDue  };
      // Add task to array/
      progressListData.push(forwardTask);
      todoListData.splice(i, 1);
      createTodoList();
      createProgressList();
      // update progress array in local
     localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      //update todo array in local storage 
     localStorage.setItem("TODO", JSON.stringify(todoListData));
      dueDate.value = "";
      taskInput.value = "";
    });
    todoListItem[i].querySelector(".todoDeleteButton").addEventListener("click", ()=>{
          todoListData.splice(i, 1);
     localStorage.setItem("TODO", JSON.stringify(todoListData));
      taskInput.value = "";
      createTodoList();
    });
  }
}
//this logic is for create progress list
export function createProgressList() {
  progressList.innerHTML = "";
  var progressHeading = document.querySelector("#pTaskHeading");
  var progressL = progressListData.length;
  progressHeading.children[0].innerHTML = progressL;
  for (let i = 0; i < progressListData.length; i++) {
    progressList.insertAdjacentHTML(
      "beforeend",
      createProgressTask({ title: progressListData[i].title, createDate: progressListData[i].createDate, update: progressListData[i].update, due: progressListData[i].due })
    );
  }
  let progressListItem = document.querySelectorAll(".progressListItem");
  for (let i = 0; i < progressListData.length; i++) {
    //update progress task
    progressListItem[i].querySelector(".progressDeleteButton").addEventListener("click", ()=>{
      progressListData.splice(i, 1);
      localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      createProgressList();
    });
    //move task in todo from progress
    progressListItem[i].querySelector(".progressMoveInTodo").addEventListener("click", progressListMoveInTodo);
    //move progress task in completed
    progressListItem[i].querySelector(".progressMoveButton").addEventListener("click",()=>{
      var completedListTitle = progressListData[i].title;
      var completedListDue = progressListData[i].due;
      var completedListCreate = progressListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", {  weekday: "long",year: "numeric",  month: "short", day: "numeric" });
      let forwardTaskInCom = {title: completedListTitle, createDate: completedListCreate, completedDate: completedListCompleted, update: "", due: completedListDue };
      // Add task to array/
      completedListData.push(forwardTaskInCom);
      progressListData.splice(i, 1);
      createCompletedList();
      createProgressList();
      //update progress array in local storage     
       localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      //update completed in local storage
     localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
       dueDate.value = "";
      taskInput.value = "";
    });
    function progressListMoveInTodo() {
      var todoListTitle = progressListData[i].title;
      var todoListCreate = progressListData[i].createDate;
      var todoListDue = progressListData[i].due;
      let forwardTaskInTodo = {title: todoListTitle,createDate: todoListCreate, update: "", due: todoListDue };
      // Add task to array/
      todoListData.push(forwardTaskInTodo);
      progressListData.splice(i, 1);
      createTodoList();
      createProgressList();
      //update todo array in local storage 
      localStorage.setItem("TODO", JSON.stringify(todoListData));

      // update progress array in local storage   
     localStorage.setItem("PROGRESS", JSON.stringify(progressListData));;
      dueDate.value = "";
      taskInput.value = "";
    }
    //update progress task
    progressListItem[i].querySelector(".progressEditButton").addEventListener("click", ()=>{
      taskInput.value = progressListData[i].title;
      dueDate.value = progressListData[i].due;
      updateprogressTaskIndex = i;
    });
  }
}
//this logic is for create completed list
export function createCompletedList() {
  completedList.innerHTML = "";
  //this logic for displaying total number present task length
  var doneHeading = document.querySelector("#dTaskHeading");
  var doneL = completedListData.length;
  doneHeading.children[0].innerHTML = doneL;

  for (let i = 0; i < completedListData.length; i++) {
    //we have to chenge completed Date to completedDate
    var completedDate = new Date().toLocaleString("en-IN", { weekday: "long", year: "numeric",month: "short",day: "numeric",});
    completedList.insertAdjacentHTML(
      "beforeend",
      createCompletedTask({title: completedListData[i].title, createDate: completedListData[i].createDate, update: completedListData[i].update, due: completedListData[i].due, completedDate: completedDate})
    );
  }
  let completedListItem = document.querySelectorAll(".completedListItem");
  for (let i = 0; i < completedListData.length; i++) {
    //delete the completed task
    completedListItem[i].querySelector(".completedDeleteButton").addEventListener("click", ()=>{
       completedListData.splice(i, 1);
      //after remove the task completed array is updated in local Storage
      localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
      createCompletedList();
    });
    //completed task move in progress task section
    completedListItem[i].querySelector(".comeMoveInProg").addEventListener("click",()=>{
      var prCreateListTitle = completedListData[i].title;
      var prCreateListCreate = completedListData[i].createDate;
      var prCreateListdue = completedListData[i].completedDate;
      let forwardTaskInprogress = { title: prCreateListTitle, createDate: prCreateListCreate, completedDate: prCreateListdue, update: "", due: prCreateListdue,};
      // Add task to array/
      progressListData.push(forwardTaskInprogress);
      completedListData.splice(i, 1);
      createCompletedList();
      createProgressList();
      // update completed array in local storage
    localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
      //update progress array in local storage
        localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      dueDate.value = "";
      taskInput.value = "";
    });
    //completed task is moving in sign section
    completedListItem[i].querySelector(".completedMoveButton").addEventListener("click", ()=>{
      var signListTitle = completedListData[i].title;
      var signListCreate = completedListData[i].createDate;
      var signListDue = completedListData[i].due;
      var signListExpiry = new Date().toLocaleString("en-IN", {weekday: "long",year: "numeric", month: "short", day: "numeric", });
      var signCompleted = new Date().toLocaleString("en-IN", { weekday: "long", year: "numeric", month: "short",day: "numeric",});
      let forwardTasksInSign = {title: signListTitle, createDate: signListCreate,completedDate: signCompleted, expiry: signListExpiry, due: signListDue, };
      alert("HERE IS FINE");
      signListData.push(forwardTasksInSign);
      createSignList();
      completedListData.splice(i, 1);
      createCompletedList();
      //completed task array is updating in local storage 
         var stringComgTask = JSON.stringify(completedListData);
      localStorage.setItem("COMPLETED", stringComgTask);
      //sign array is updating in local storage
        dueDate.value = "";
      taskInput.value = "";
    });
    //updating is completed task 
    completedListItem[i].querySelector(".completedEditButton").addEventListener("click",()=>{
       taskInput.value = completedListData[i].title;
      dueDate.value = completedListData[i].due;
      updateDoneTaskIndex = i;
    });
  }
}
//this logic is for create create list
export function createSignList() {
  signList.innerHTML = "";
  //displayin length of all task present in the sign section
  var signHeading = document.querySelector("#eTaskHeading");
  var signL = signListData.length;
  signHeading.children[0].innerHTML = signL;
  for (let i = 0; i < signListData.length; i++) {
    var signExpiry = new Date().toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    signList.insertAdjacentHTML(
      "beforeend",
      createSignTasks({title: signListData[i].title, createDate: signListData[i].createDate, completedDate: signListData[i].completedDate, expiry: signExpiry })
    );
  }
  let signListItem = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++) {
    //delete the sign 
    signListItem[i].querySelector(".signDeleteButton").addEventListener("click", ()=>{
       signListData.splice(i, 1);
      //update the sign array in local storage
    localStorage.setItem("SIGN", JSON.stringify(signListData));
      //end
      createSignList();
    });
    //move sign task in completed section
    signListItem[i].querySelector(".signMoveInCompleted").addEventListener("click", ()=>{
      var completedListTitle = signListData[i].title;
      var completedListCreate = signListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", { weekday: "long", year: "numeric", month: "short", day: "numeric", });
      var backInCompleted = { title: completedListTitle, createDate: completedListCreate, update: "", completedDate: completedListCompleted, };
      completedListData.push(backInCompleted);
      signListData.splice(i, 1);
      createCompletedList();
      createSignList();
      //update completed array in local storage
     localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
      //update sign task in local storage
   localStorage.setItem("SIGN", JSON.stringify(signListData));
    dueDate.value = "";
      taskInput.value = "";
    });
  }
}
//this logic  is for create delay list
export function createDelayList() {
  delayList.innerHTML = "";
  var backlogHeading = document.querySelector("#bTaskHeading");
  var backlogL = delayListData.length;
  backlogHeading.children[0].innerHTML = backlogL;
  for (let i = 0; i < delayListData.length; i++) {
    {
      delayList.insertAdjacentHTML(
        "beforeend",
        createBacklogTask({title: delayListData[i].title, createDate: delayListData[i].createDate, update: delayListData[i].update, due: delayListData[i].due})
      );
    }
  }
  let delayListItem = document.querySelectorAll(".delayListItem");
  for (let i = 0; i < delayListData.length; i++) {
    //update delay task
    delayListItem[i].querySelector(".backlogEditButton").addEventListener("click", ()=>{
      taskInput.value = delayListData[i].title;
      dueDate.value = delayListData[i].due;
      updateBacklogTaskIndex = i;
    });
    //delete the delay task
    delayListItem[i].querySelector(".delayDeleteButton").addEventListener("click",()=>{
      delayListData.splice(i, 1);
      //after remove the task update local Storage
   localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
    createDelayList();
    });
    //delay task is move in todo task section
    delayListItem[i].querySelector(".BacklogMoveTodo").addEventListener("click",()=>{
      var todoListTitle = delayListData[i].title;
      var todoListCreate = delayListData[i].createDate;
      var todoListupdate = delayListData[i].update;
      var todoListCompleted = new Date().toLocaleString("en-IN", { weekday: "long", year: "numeric", month: "short", day: "numeric"   });
      var addtodoListItem = { title: todoListTitle, createDate: todoListCreate, update: todoListupdate,due: todoListCompleted }
      todoListData.push(addtodoListItem);
      delayListData.splice(i, 1);
      createDelayList();
      createTodoList();
      //update the backlog array in local storage
     localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
      //update the todo array in local storage
    localStorage.setItem("TODO", JSON.stringify(todoListData));
      dueDate.value = "";
      taskInput.value = "";
    });
  }
}










