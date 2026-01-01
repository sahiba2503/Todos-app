export function attachTodoDelete(todoListItem, index, todoListData,createTodoList) {
  todoListItem
    .querySelector(".todoDeleteButton")
    .addEventListener("click", function () {
      todoListData.splice(index, 1);
      localStorage.setItem("TODO", JSON.stringify(todoListData));
      createTodoList();
    });
}
