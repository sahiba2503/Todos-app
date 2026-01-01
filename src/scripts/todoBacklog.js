
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
