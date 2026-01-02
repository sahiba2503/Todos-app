import {taskInput} from "./Todos.js";
export function attachTodoProgress(todoListItem, index, todoListData, progressListData ,createTodoList ,createProgressList) {
  todoListItem
    .querySelector(".todoMoveButton")
    .addEventListener("click", function () {

      progressListData.push({
        title: todoListData[index].title,
        createDate: todoListData[index].createDate,
        update: "",
        due: todoListData[index].due,
      });

      todoListData.splice(index, 1);

      localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      localStorage.setItem("TODO", JSON.stringify(todoListData));

      createTodoList();
      createProgressList();
    });
}
export function attachProgressToCompleted(
  progressListItem,
  index,
  progressListData,
  completedListData,
  createProgressList,
  createCompletedList
) {
  progressListItem
    .querySelector(".progressMoveButton")
    .addEventListener("click", function () {
      completedListData.push({
        title: progressListData[index].title,
        createDate: progressListData[index].createDate,
        compledDate: new Date().toLocaleString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        update: "",
        due: progressListData[index].due,
      });

      progressListData.splice(index, 1);

      localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
      localStorage.setItem("PROGRESS", JSON.stringify(progressListData));

      createCompletedList();
      createProgressList();

      taskInput.value = "";
      dueDate.value = "";
    });
}
export function attachCompletedToSign(
  completedListItem,
  index,
  completedListData,
  signListData,
  createCompletedList,
  createSignList
) {
  completedListItem
    .querySelector(".completedMoveButton")
    .addEventListener("click", function () {
      signListData.push({
        title: completedListData[index].title,
        createDate: completedListData[index].createDate,
        compledDate: new Date().toLocaleString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        expiry: new Date().toLocaleString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        due: completedListData[index].due,
      });

      completedListData.splice(index, 1);

      localStorage.setItem("SIGN", JSON.stringify(signListData));
      localStorage.setItem("COMPLETED", JSON.stringify(completedListData));

      createSignList();
      createCompletedList();

      taskInput.value = "";
      dueDate.value = "";
    });
}
export function attachBacklogToTodo(
  delayListItem,
  index,
  delayListData,
  todoListData,
  createDelayList,
  createTodoList
) {
  delayListItem
    .querySelector(".BacklogMoveTodo")
    .addEventListener("click", function () {
      todoListData.push({
        title: delayListData[index].title,
        createDate: delayListData[index].createDate,
        update: delayListData[index].update,
        due: new Date().toLocaleString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      });

      delayListData.splice(index, 1);

      localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
      localStorage.setItem("TODO", JSON.stringify(todoListData));

      createDelayList();
      createTodoList();

      taskInput.value = "";
      dueDate.value = "";
    });
}
