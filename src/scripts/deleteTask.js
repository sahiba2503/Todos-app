
//
// export function attachTodoDelete(
//   todoListItem,
//   index,
//   todoListData,
//   createTodoList,
//   taskInput,
//   dueDate
// ) {
//   todoListItem
//     .querySelector(".todoDeleteButton")
//     .addEventListener("click", function () {

//       var taskId = todoListData[index].id;

//       fetch(TODO_API + "/" + taskId, {
//         method: "DELETE"
//       })
//         .then(function () {
//           createTodoList();      // or re-fetch from API
//           taskInput.value = "";
//           dueDate.value = "";
//         })
//         .catch(function (error) {
//           console.log("Error deleting task", error);
//         });

//     });
// }

//
export function attachTodoDelete(todoListItem, index, todoListData,createTodoList,taskInput,dueDate) {
  todoListItem .querySelector(".todoDeleteButton")
    .addEventListener("click", function () {
      todoListData.splice(index, 1);
      localStorage.setItem("TODO", JSON.stringify(todoListData));
      createTodoList();
      taskInput.value = "";
      dueDate.value ="";
    });
}
export function attachProgressDelete( progressListItem, index, progressListData, createProgressList,taskInput,dueDate) {
  progressListItem.querySelector(".progressDeleteButton") .addEventListener("click", function () {
      progressListData.splice(index, 1);
      localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      createProgressList();
       taskInput.value = "";
      dueDate.value ="";
    });
}
export function attachCompletedDelete( completedListItem, index, completedListData, createCompletedList,taskInput,dueDate) {
  completedListItem.querySelector(".completedDeleteButton")
    .addEventListener("click", function () {
      completedListData.splice(index, 1);
      localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
      createCompletedList();
       taskInput.value = "";
      dueDate.value ="";
    });
}

export function attachBacklogDelete(delayListItem, index, delayListData, createDelayList,taskInput,dueDate) {
  delayListItem.querySelector(".delayDeleteButton")
    .addEventListener("click", function () {
      delayListData.splice(index, 1);
      localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
      createDelayList();
       taskInput.value = "";
      dueDate.value ="";
    });
}
export function attachSignDelete( signListItem, index, signListData, createSignList,taskInput,dueDate) {
  signListItem.querySelector(".signDeleteButton")
    .addEventListener("click", function () {
      signListData.splice(index, 1);
      localStorage.setItem("SIGN", JSON.stringify(signListData));
      createSignList();
       taskInput.value = "";
      dueDate.value ="";
    });
}
