import {reloadAlltask} from "./reload.js"
import {createTodoTask} from "./createTodoTask.js";
import {createProgressTask} from "./createProTask.js";
import {createCompletedTask} from "./createComTask.js";
import {createSignTasks} from "./createSignTask.js";
import {createBacklogTask} from "./createDelayTask.js";

import {attachTodoBacklog} from "./todoBacklog.js";
import {attachTodoProgress} from "./todoProgress.js";
import {attachTodoDelete} from "./todoDelete.js";

import{addButtonTask } from "./addBtn.js";

export let taskInput = document.querySelector("#taskInput");
export let addBtn = document.querySelector("#addBtn");
export let dueDate = document.querySelector("#dueDate");

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
});

addBtn.addEventListener("click", function () {

  // 1. Get input values
  var inputboxText = taskInput.value.trim();
  var dueDatevalue = dueDate.value;
addButtonTask(inputboxText,taskInput,dueDate,dueDatevalue ,delayListData,updateTodoTaskIndex,progressListData,updateprogressTaskIndex,updateDoneTaskIndex ,updateBacklogTaskIndex,todoListData,completedListData,createTodoList,createProgressList,createCompletedList,createDelayList,resetUpdateIndexes);


  // if (inputboxText === "" || dueDatevalue === "") {
  //   return;
  // }

  // // 2. Create current date
  // var createDatevalue = new Date().toLocaleString("en-IN", {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  // // 3. CREATE NEW TODO TASK
  // if (
  //   updateTodoTaskIndex === -1 &&
  //   updateprogressTaskIndex === -1 &&
  //   updateDoneTaskIndex === -1 &&
  //   updateBacklogTaskIndex === -1
  // ) {

  //   todoListData.push({
  //     title: inputboxText,
  //     createDate: createDatevalue,
  //     update: "",
  //     due: dueDatevalue
  //   });

  //   localStorage.setItem("TODO", JSON.stringify(todoListData));
  //   createTodoList();
  // }

  // // 4. UPDATE TODO TASK
  // else if (updateTodoTaskIndex !== -1) {

  //   todoListData[updateTodoTaskIndex].title = inputboxText;
  //   todoListData[updateTodoTaskIndex].due = dueDatevalue;
  //   todoListData[updateTodoTaskIndex].update = createDatevalue;

  //   localStorage.setItem("TODO", JSON.stringify(todoListData));
  //   createTodoList();
  // }

  // // 5. UPDATE PROGRESS TASK
  // else if (updateprogressTaskIndex !== -1) {

  //   progressListData[updateprogressTaskIndex].title = inputboxText;
  //   progressListData[updateprogressTaskIndex].due = dueDatevalue;
  //   progressListData[updateprogressTaskIndex].update = createDatevalue;

  //   localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
  //   createProgressList();
  // }

  // // 6. UPDATE COMPLETED TASK
  // else if (updateDoneTaskIndex !== -1) {

  //   completedListData[updateDoneTaskIndex].title = inputboxText;
  //   completedListData[updateDoneTaskIndex].due = dueDatevalue;
  //   completedListData[updateDoneTaskIndex].update = createDatevalue;

  //   localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
  //   createCompletedList();
  // }

  // // 7. UPDATE BACKLOG TASK
  // else if (updateBacklogTaskIndex !== -1) {

  //   delayListData[updateBacklogTaskIndex].title = inputboxText;
  //   delayListData[updateBacklogTaskIndex].due = dueDatevalue;
  //   delayListData[updateBacklogTaskIndex].update = createDatevalue;

  //   localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
  //   createDelayList();
  // }

  // // 8. Reset everything
  // resetUpdateIndexes();
  // taskInput.value = "";
  // dueDate.value = "";
});


/////////////////////////////////////////////////////////////////////////////////////////////////////

export function createTodoList() {
  todoList.innerHTML = "";
  document.querySelector("#tTaskHeading").children[0].innerHTML =   todoListData.length;
   for (let i = 0; i < todoListData.length; i++) {
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
  var progressHeading= document.querySelector("#pTaskHeading");
var progressL = progressListData.length;
progressHeading.children[0].innerHTML = progressL ;
  for (let i = 0; i < progressListData.length; i++) {
    progressList.insertAdjacentHTML(
      "beforeend",createProgressTask({
        title:progressListData[i].title,
        createDate:progressListData[i].createDate,
        update:progressListData[i].update,
        due:progressListData[i].due,
      })
       );
  }
  let progressListItem = document.querySelectorAll(".progressListItem");
  for (let i = 0; i < progressListData.length; i++) {
    let index = i;
//update progress task
    progressListItem[i].querySelector(".progressDeleteButton").addEventListener("click", ProgressDeleteList);
    function ProgressDeleteList() 
    {
      progressListData.splice(index, 1);
        var progressStringyTask = JSON.stringify(progressListData);
      localStorage.setItem("PROGRESS",progressStringyTask);
      createProgressList();
    }
    //move task in todo from progress
    progressListItem[i].querySelector(".progressMoveInTodo").addEventListener("click", progressListMoveInTodo);
    function progressListMoveInTodo()
     {
       var todoListTitle = progressListData[i].title;
      var todoListCreate = progressListData[i].createDate;
      var todoListDue = progressListData[i].due;
        let forwardTaskInTodo = {
  title: todoListTitle,
  createDate: todoListCreate,
  update: "",
  due: todoListDue,
};
// Add task to array/
todoListData.push(forwardTaskInTodo);
 progressListData.splice(index, 1);
createTodoList();
 createProgressList();
//update todo array in local storage 
 var stringTodoTask = JSON.stringify(todoListData)
localStorage.setItem("TODO", stringTodoTask);

     // update progress array in local storage   
var stringPrTask = JSON.stringify(progressListData);
localStorage.setItem("PROGRESS",stringPrTask);
     
//END
     dueDate.value = "";
    taskInput.value = "";
        }
        //move progress task in completed
    progressListItem[i].querySelector(".progressMoveButton")
      .addEventListener("click", progressMoveLists);
    function progressMoveLists() {
      var completedListTitle = progressListData[i].title;
      var completedListDue = progressListData[i].due;
      var completedListCreate = progressListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
       let forwardTaskInCom = {
  title: completedListTitle,
  createDate: completedListCreate,
  compledDate : completedListCompleted,
  update: "",
  due: completedListDue,
};
// Add task to array/
completedListData.push(forwardTaskInCom);
  progressListData.splice(index, 1);
      createCompletedList();
      createProgressList();
     //update progress array in local storage     
       var stringprogTask = JSON.stringify(progressListData);
       localStorage.setItem("PROGRESS", stringprogTask);
 //update completed in local storage
var stringComTask = JSON.stringify(completedListData);
localStorage.setItem("COMPLETED",stringComTask );
//end
 dueDate.value = "";
    taskInput.value = "";
     
    }
    //update progress task
    progressListItem[i]
      .querySelector(".progressEditButton")
      .addEventListener("click", progressEditList);
    function progressEditList() {
      taskInput.value =  progressListData[i].title;
      dueDate.value = progressListData[i].due;
      updateprogressTaskIndex = i;
    }

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
    completedList.insertAdjacentHTML(
      "beforeend",createCompletedTask({
        title:completedListData[i].title,
        createDate:completedListData[i].createDate,
        update:completedListData[i].update,
        due:completedListData[i].due,
      })
         );
  }
  let completedListItem = document.querySelectorAll(".completedListItem");
  for (let i = 0; i < completedListData.length; i++) {
    let index = i;
    //delete the completed task
    completedListItem[i]
      .querySelector(".completedDeleteButton")
      .addEventListener("click", completedDeleteList);
    function completedDeleteList() {
      completedListData.splice(index, 1);
      //after remove the task completed array is updated in local Storage
        var completedStringyTask = JSON.stringify(completedListData);
      localStorage.setItem("COMPLETED",completedStringyTask);
      //end
      createCompletedList();
    }
    //completed task move in progress task section
    completedListItem[i].querySelector(".comeMoveInProg").addEventListener("click", progressListMoveInTodo);
     function progressListMoveInTodo() {
      var prCreateListTitle = completedListData[i].title;
      var prCreateListCreate = completedListData[i].createDate;
      var prCreateListdue = completedListData[i].compledDate;
       let forwardTaskInprogress = {
  title: prCreateListTitle ,
  createDate: prCreateListCreate,
  compledDate :  prCreateListdue,
  update: "",
 due: prCreateListdue,
};
// Add task to array/
progressListData.push(forwardTaskInprogress);
  completedListData.splice(index, 1);
      createCompletedList();
      createProgressList();
// update completed array in local storage
    var stringCom = JSON.stringify(completedListData);
      localStorage.setItem("COMPLETED", stringCom);
      //update progress array in local storage
var stringPrTask = JSON.stringify(progressListData);
localStorage.setItem("PROGRESS",stringPrTask);
     
//END
 dueDate.value = "";
    taskInput.value = "";
    }
    //completed task is moving in sign section
       completedListItem[i].querySelector(".completedMoveButton").addEventListener("click", completedAddListInsign);
    function completedAddListInsign() {      
      var signListTitle = completedListData[i].title;
      var signListCreate = completedListData[i].createDate;
      var signListDue = completedListData[i].due;
        var signListExpiry = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      var signCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
  let forwardTaskInSign = {
  title: signListTitle,
  createDate: signListCreate,
  compledDate :  signCompleted,
   expiry: signListExpiry,
  due: signListDue,
};
// Add task to array/
signListData.push(forwardTaskInSign);
  completedListData.splice(index, 1);
   createCompletedList();
      createSignList();
      //completed task array is updating in local storage 
  var stringComgTask = JSON.stringify(completedListData);
       localStorage.setItem("COMPLETED", stringComgTask);
 //sign array is updating in local storage
var stringDonTask = JSON.stringify(signListData);
localStorage.setItem("SIGN",stringDonTask );
//end
 dueDate.value = "";
    taskInput.value = "";
          }
          //updating is completed task 
        completedListItem[i]
      .querySelector(".completedEditButton")
      .addEventListener("click", completedEditList);
    function completedEditList() {
      taskInput.value =  completedListData[i].title;
      dueDate.value = completedListData[i].due;  
         updateDoneTaskIndex = i;
             }
   
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
    signList.insertAdjacentHTML(
      "beforeend", createSignTasks({
        title:signListData[i].title,
        createDate:signListData[i].createDate,
        update:signListData[i].update,
        due:signListData[i].due,
      })
    );
  }
  let signListItem = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++) {
    //delete the sign 
    let index = i ;
    signListItem[i]
      .querySelector(".signDeleteButton")
      .addEventListener("click", signDeletList);
    function signDeletList() {
      signListData.splice(index, 1);
        //update the sign array in local storage
        var signStringyTask = JSON.stringify(signListData);
      localStorage.setItem("SIGN",signStringyTask);
      //end
      createSignList();
    }
    //move sign task in completed section
    signListItem[i].querySelector(".signMoveInCompleted").addEventListener("click", signListMoveInCompleted);
    function signListMoveInCompleted() {
           var completedListTitle = signListData[i].title;
      var completedListCreate = signListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
     var  backInCompleted = {
        title: completedListTitle,
        createDate: completedListCreate,
        update: "",
        compledDate: completedListCompleted,
      };
      completedListData.push(backInCompleted);
     signListData.splice(index, 1);
       createCompletedList();      
      createSignList();
//update completed array in local storage
       var stringCom = JSON.stringify(completedListData);
      localStorage.setItem("COMPLETED", stringCom);
      //update sign task in local storage
var stringsignTask = JSON.stringify(signListData);
localStorage.setItem("SIGN",stringsignTask);
//end code     
    
       dueDate.value = "";
    taskInput.value = "";
    }
  }
}
//this logic  is for create delay list
export function createDelayList() {
  delayList.innerHTML = "";
  var backlogHeading = document.querySelector("#bTaskHeading");
var backlogL = delayListData.length;
backlogHeading.children[0].innerHTML = backlogL;
  for (let i = 0; i < delayListData.length; i++) {
    delayList.insertAdjacentHTML(
      "beforeend",createBacklogTask({
        title:delayListData[i].title,
        createDate:delayListData[i].createDate,
        update:delayListData[i].update,
        due:delayListData[i].due,
      })
     
    );
  }

  let delayListItem = document.querySelectorAll(".delayListItem");
  for (let i = 0; i < delayListData.length; i++) {
    let index = i;
    //update delay task
      delayListItem[i]
      .querySelector(".backlogEditButton")
      .addEventListener("click", backlogEditList);
    function backlogEditList() {
       taskInput.value = delayListData[i].title;
      dueDate.value = delayListData[i].due;
             
      updateBacklogTaskIndex = i;
    }
 //delete the delay task
    delayListItem[i]
      .querySelector(".delayDeleteButton")
      .addEventListener("click", delayDeleteList);
    function delayDeleteList() {
      delayListData.splice(index, 1);
        //after remove the task update local Storage
        var delayStringyTask = JSON.stringify(delayListData);
      localStorage.setItem("BACKLOG",delayStringyTask);
      //end
      createDelayList();
    }
//delay task is move in todo task section
    delayListItem[i]
      .querySelector(".BacklogMoveTodo")
      .addEventListener("click", backlogAddList);
    function backlogAddList() {
      var todoListTitle = delayListData[i].title;
      var todoListCreate = delayListData[i].createDate;
      var todoListupdate = delayListData[i].update;
      var todoListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

       var addtodoListItem = {
        title: todoListTitle,
        createDate: todoListCreate,
        update: todoListupdate,
        due: todoListCompleted,
      }
      todoListData.push(addtodoListItem);
       delayListData.splice(index, 1);
        createDelayList();
      createTodoList();
   //update the backlog array in local storage
var stringBackInTask = JSON.stringify(delayListData);
localStorage.setItem("BACKLOG", stringBackInTask);
 //update the todo array in local storage
var stringTodoTask = JSON.stringify(todoListData);
localStorage.setItem("TODO",stringTodoTask );
       dueDate.value = "";
    taskInput.value = "";
    }
  }
}
//this logic is for search task
 var searchInput = document.querySelector("#searchInput");
 let searchBtn = document.querySelector("#searchBtn");
  let clearBtn = document.querySelector("#clearBtn");

searchBtn.addEventListener("click", handleSearchListItem);
function handleSearchListItem() {
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
   
  for (let i = 0; i < signListData.length; i++) 
    {
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

clearBtn.addEventListener("click", handleClearTask);
 function handleClearTask() {
  searchInput.value = "";
  createTodoList();
  createProgressList();
  createCompletedList();
  createDelayList();
  createSignList();
}

var slider = document.querySelector(".taskContainer");

var leftBtn = document.querySelector("#sliderLeftBtn");
var rightBtn = document.querySelector("#sliderRightBtn");

 var backBtn = document.querySelector("#backBtn");
 var todoBtn = document.querySelector("#todoBtn");
 var proBtn = document.querySelector("#proBtn");
 var doneBtn = document.querySelector("#donBtn");
 var expiryBtn = document.querySelector("#expiryBtn");
 var index = 0;
 var STEP = 20;
  var lengthTaskBox = document.querySelectorAll(".taskBox").length;

  //we have implement login on left button all posible condition and then write code for right btn.
leftBtn.addEventListener("click", function () {
 //it is for desktop left button
  if (window.innerWidth > 900) {
    if (index <= 0) {
      index = lengthTaskBox - 4;
    } else {
      index--;
    }
  }  
  // it is for tablet left button
  else if (window.innerWidth > 480) {
    if (index <= 0) {
      index = 4;
    } else {
      index--;
    }
  }
  slider.style.transform = "translateX(-" + (index * STEP) + "%)";
});
rightBtn.addEventListener("click", function () {
  //it is for desktop right button
  if (window.innerWidth > 900) {
    if (index >= lengthTaskBox - 4) {
      index = 0;
    } else {
      index++;
    }
  }
  // it is for tablet screen right button
  else if (window.innerWidth > 480) {
    if (index >=  4) {
      index = 0;
    } 
    else {
      index++;
    }
  }

  slider.style.transform = "translateX(-" + (index * STEP) + "%)";
});

//it is for mobile screen it work directly click btn
backBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(0%)";
});

todoBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(-20%)";
});

proBtn.addEventListener("click", function () {
   slider.style.transform = "translateX(-40%)";
});

doneBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(-60%)";
});

expiryBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(-80%)";
});







