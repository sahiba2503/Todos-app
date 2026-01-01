export function attachTodoDelete(todoListItem, index, todoListData,createTodoList) {
  todoListItem
    .querySelector(".todoDeleteButton")
    .addEventListener("click", function () {
      todoListData.splice(index, 1);
      localStorage.setItem("TODO", JSON.stringify(todoListData));
      createTodoList();
    });
}
export function attachProgressDelete(
  progressListItem,
  index,
  progressListData,
  createProgressList
) {
  progressListItem
    .querySelector(".progressDeleteButton")
    .addEventListener("click", function () {
      progressListData.splice(index, 1);
      localStorage.setItem("PROGRESS", JSON.stringify(progressListData));
      createProgressList();
    });
}
export function attachCompletedDelete(
  completedListItem,
  index,
  completedListData,
  createCompletedList
) {
  completedListItem
    .querySelector(".completedDeleteButton")
    .addEventListener("click", function () {
      completedListData.splice(index, 1);
      localStorage.setItem("COMPLETED", JSON.stringify(completedListData));
      createCompletedList();
    });
}

export function attachBacklogDelete(
  delayListItem,
  index,
  delayListData,
  createDelayList
) {
  delayListItem
    .querySelector(".delayDeleteButton")
    .addEventListener("click", function () {
      delayListData.splice(index, 1);
      localStorage.setItem("BACKLOG", JSON.stringify(delayListData));
      createDelayList();
    });
}
export function attachSignDelete(
  signListItem,
  index,
  signListData,
  createSignList
) {
  signListItem
    .querySelector(".signDeleteButton")
    .addEventListener("click", function () {
      signListData.splice(index, 1);
      localStorage.setItem("SIGN", JSON.stringify(signListData));
      createSignList();
    });
}
