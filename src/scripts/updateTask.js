export function attachCompletedEdit( completedListItem,  index,  completedListData,  taskInput,  dueDate,  addBtn) {
  completedListItem .querySelector(".completedEditButton") .addEventListener("click", function () {
      taskInput.value = completedListData[index].title;
      dueDate.value = completedListData[index].due;

      // store index for update
      updateDoneTaskIndex = index;
      addBtn.innerText = "Update the task";
    });
}