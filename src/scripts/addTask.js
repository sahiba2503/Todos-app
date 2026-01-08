
export function addButtonTask(inputboxText,taskInput,dueDate,dueDatevalue ,delayListData,updateTodoTaskIndex,progressListData,updateprogressTaskIndex,updateDoneTaskIndex ,updateBacklogTaskIndex,todoListData,completedListData,createTodoList,createProgressList,createCompletedList,createDelayList,resetUpdateIndexes,handleClearTask, addBtn,clearSearchInput)
 
{
  // 1. Get input values
  var inputboxText = taskInput.value.trim();
  var dueDatevalue = dueDate.value;

  if (inputboxText === "" || dueDatevalue === "") {
    return;
  }

  // 2. Create current date
  var createDate = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if ( updateTodoTaskIndex === -1 &&  updateprogressTaskIndex === -1 && updateDoneTaskIndex === -1 && updateBacklogTaskIndex === -1  ) 
    {

    todoListData.push({
      title: inputboxText,
      create: createDate,
      update: "",
      due: dueDatevalue,
    });

    localStorage.setItem("TODO", JSON.stringify(todoListData));
    handleClearTask();
    createTodoList();
     }

  // 4. UPDATE TODO TASK
  else if (updateTodoTaskIndex !== -1) {
    var updateDate = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
    todoListData[updateTodoTaskIndex].title = inputboxText;
    todoListData[updateTodoTaskIndex].due = dueDatevalue;
    todoListData[updateTodoTaskIndex].update = updateDate;

    localStorage.setItem("TODO", JSON.stringify(todoListData));
    createTodoList();
    resetUpdateIndexes();
   handleClearTask();
    addBtn.innerText="Add Task";
    clearSearchInput();
  }
//



  // 5. UPDATE PROGRESS TASK
  else if (updateprogressTaskIndex !== -1) {
 var updateDate = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
    progressListData[updateprogressTaskIndex].title = inputboxText;
    progressListData[updateprogressTaskIndex].due = dueDatevalue;
    progressListData[updateprogressTaskIndex].update = updateDate;

    localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
    createProgressList();
    resetUpdateIndexes();
    handleClearTask();
    addBtn.innerText="Add Task";
    clearSearchInput();
  }

  // 6. UPDATE COMPLETED TASK
  else if (updateDoneTaskIndex !== -1) {
    alert("yes calling fun");
 var updateDate = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
    completedListData[updateDoneTaskIndex].title = inputboxText;
    completedListData[updateDoneTaskIndex].due = dueDatevalue;
    completedListData[updateDoneTaskIndex].update = updateDate;

    localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
    createCompletedList();
    resetUpdateIndexes();
    handleClearTask();
    addBtn.innerText="Add Task";
    clearSearchInput();
  }

  // 7. UPDATE BACKLOG TASK
  else if (updateBacklogTaskIndex !== -1) {
 var updateDate = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
    delayListData[updateBacklogTaskIndex].title = inputboxText;
    delayListData[updateBacklogTaskIndex].due = dueDatevalue;
    delayListData[updateBacklogTaskIndex].update = updateDate;

    localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
    createDelayList();
    handleClearTask();
    resetUpdateIndexes();
    addBtn.innerText="Add Task";
   clearSearchInput();
  }
  
  taskInput.value = "";
  dueDate.value = "";
 }

  
    