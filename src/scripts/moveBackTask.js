import {taskInput,dueDate} from "./Todos.js";
export function attachTodoBacklog(todoListItem, index, todoListData, delayListData ,createDelayList ,createTodoList) {
  todoListItem
    .querySelector(".todoBacklog")
    .addEventListener("click", function () {

      delayListData.push({
        title: todoListData[index].title,
        createDate: todoListData[index].createDate,
        update: "",
        due: todoListData[index].due,
      });

      todoListData.splice(index, 1);

      localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
      localStorage.setItem("TODO", JSON.stringify(todoListData));

      createDelayList();
      createTodoList();
    });
}
export function attachProgressToTodo( progressListItem,index,progressListData, todoListData, createProgressList, createTodoList) 
{
  progressListItem
    .querySelector(".progressMoveInTodo")
    .addEventListener("click", function () {
      todoListData.push({
        title: progressListData[index].title,
        createDate: progressListData[index].createDate,
        update: "",
        due: progressListData[index].due,
      });

      progressListData.splice(index, 1);

      localStorage.setItem("TODO", JSON.stringify(todoListData));
      localStorage.setItem("PROGRESS", JSON.stringify(progressListData));

      createTodoList();
      createProgressList();

      taskInput.value = "";
      dueDate.value = "";
    });
}
export function attachCompletedToProgress(
  completedListItem,
  index,
  completedListData,
  progressListData,
  createCompletedList,
  createProgressList
) {
  completedListItem
    .querySelector(".comeMoveInProg")
    .addEventListener("click", function () {
      progressListData.push({
        title: completedListData[index].title,
        createDate: completedListData[index].createDate,
        compledDate: completedListData[index].compledDate,
        update: "",
        due: completedListData[index].due,
      });

      completedListData.splice(index, 1);

      localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      localStorage.setItem("COMPLETED", JSON.stringify(completedListData));

      createProgressList();
      createCompletedList();

      taskInput.value = "";
      dueDate.value = "";
    });
}

export function attachSignToCompleted(
  signListItem,
  index,
  signListData,
  completedListData,
  createSignList,
  createCompletedList
) {
  signListItem
    .querySelector(".signMoveInCompleted")
    .addEventListener("click", function () {
      completedListData.push({
        title: signListData[index].title,
        createDate: signListData[index].createDate,
        update: "",
        compledDate: new Date().toLocaleString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      });

      signListData.splice(index, 1);

      localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
      localStorage.setItem("SIGN", JSON.stringify(signListData));

      createCompletedList();
      createSignList();

      taskInput.value = "";
      dueDate.value = "";
    });
}
