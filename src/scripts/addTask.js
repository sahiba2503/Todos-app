 export function addButtonTask(inputboxText,taskInput,dueDate,dueDatevalue ,delayListData,updateTodoTaskIndex,progressListData,updateprogressTaskIndex,updateDoneTaskIndex ,updateBacklogTaskIndex,todoListData,completedListData,createTodoList,createProgressList,createCompletedList,createDelayList,resetUpdateIndexes,handleClearTask)
 
{
  // 1. Get input values
  var inputboxText = taskInput.value.trim();
  var dueDatevalue = dueDate.value;

  if (inputboxText === "" || dueDatevalue === "") {
    return;
  }

  // 2. Create current date
  var createDatevalue = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // 3. CREATE NEW TODO TASK
  if (
    updateTodoTaskIndex === -1 &&
    updateprogressTaskIndex === -1 &&
    updateDoneTaskIndex === -1 &&
    updateBacklogTaskIndex === -1
  ) {

    todoListData.push({
      title: inputboxText,
      createDate: createDatevalue,
      update: "",
      due: dueDatevalue
    });

    localStorage.setItem("TODO", JSON.stringify(todoListData));
    handleClearTask();
    createTodoList();
     
  }

  // 4. UPDATE TODO TASK
  else if (updateTodoTaskIndex !== -1) {

    todoListData[updateTodoTaskIndex].title = inputboxText;
    todoListData[updateTodoTaskIndex].due = dueDatevalue;
    todoListData[updateTodoTaskIndex].update = createDatevalue;

    localStorage.setItem("TODO", JSON.stringify(todoListData));
    createTodoList();
   handleClearTask();
  }

  // 5. UPDATE PROGRESS TASK
  else if (updateprogressTaskIndex !== -1) {

    progressListData[updateprogressTaskIndex].title = inputboxText;
    progressListData[updateprogressTaskIndex].due = dueDatevalue;
    progressListData[updateprogressTaskIndex].update = createDatevalue;

    localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
    createProgressList();
    handleClearTask();
  }

  // 6. UPDATE COMPLETED TASK
  else if (updateDoneTaskIndex !== -1) {

    completedListData[updateDoneTaskIndex].title = inputboxText;
    completedListData[updateDoneTaskIndex].due = dueDatevalue;
    completedListData[updateDoneTaskIndex].update = createDatevalue;

    localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
    createCompletedList();
    handleClearTask();
  }

  // 7. UPDATE BACKLOG TASK
  else if (updateBacklogTaskIndex !== -1) {

    delayListData[updateBacklogTaskIndex].title = inputboxText;
    delayListData[updateBacklogTaskIndex].due = dueDatevalue;
    delayListData[updateBacklogTaskIndex].update = createDatevalue;

    localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
    createDelayList();
    handleClearTask();
  }

  // 8. Reset everything
  resetUpdateIndexes();
  taskInput.value = "";
  dueDate.value = "";
}

  
    