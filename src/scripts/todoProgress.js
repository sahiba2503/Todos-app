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
