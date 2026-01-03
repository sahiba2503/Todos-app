import {taskInput} from "./Todos.js";
let compledDate;
export function attachTodoProgress(todoListItem, index, todoListData, progressListData ,createTodoList ,createProgressList) {
  todoListItem
    .querySelector(".todoMoveButton")
    .addEventListener("click", function () {

      progressListData.push({
        title: todoListData[index].title,
        create: todoListData[index].create,
        update: todoListData[index].update,
        due: todoListData[index].due,
        completed: "",
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
    .addEventListener("click", function () 
    {
        compledDate =  new Date().toLocaleString("en-IN", { weekday: "long",year: "numeric",month: "short",day: "numeric"})
        progressListData[index].completed = compledDate;

      completedListData.push({
        title: progressListData[index].title,
        create: progressListData[index].create,      
        update: progressListData[index].update,
        due: progressListData[index].due,
        completed: progressListData[index].completed,
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
        create: completedListData[index].create,
        update: completedListData[index].update,
        completed: completedListData[index].completed,
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
        create: delayListData[index].create,
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
