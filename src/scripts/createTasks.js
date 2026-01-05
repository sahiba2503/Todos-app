
 export function createTodoTask(todoListData){
return `<li class="todoListItem">
        <div class="todoListDetail">
        <div class="todoTask">${todoListData.title}</div>
        <div class="todoCreateDate">Created: ${todoListData.create}</div>
         <div class="todoUpdateDate">Update: ${todoListData.update}</div>
        <div class="todoDueDate">Due: ${todoListData.due}</div>
        </div>
        <div class="todoiconContainer">
          <div class="todoEditButton"><img src="./public/images/update.svg" alt="update"></div>
        <div class="todoBacklog"><img src="./public/images/moveBack.svg" alt="update"></div>
        <div class="todoMoveButton"><img src="./public/images/move.svg" alt="update"></div>
        <div class="todoDeleteButton"><img src="./public/images/delete.svg" alt="update"></div>
        </div>
        </li> `
};
 
 export function createCompletedTask (completedListData){
  return `<li class="completedListItem">
        <div class="completedListDetail">
        <div class="completedTask">${completedListData.title}</div>
        <div class="completedCreateDate">Created: ${completedListData.create}</div>
           <div class="completedUpdateDate">Update: ${completedListData.update}</div>
             <div class="completedDueDate">Completed: ${completedListData.completed}</div>
        </div>
        <div class="completedIconContainer">
         <div class="completedEditButton"> <img src="./public/images/update.svg" alt="update"></div>
          <div class="comeMoveInProg"><img src="./public/images/moveBack.svg" alt="update"></div>
        <div class="completedMoveButton"><img src="./public/images/move.svg" alt="update"></div>
        <div class="completedDeleteButton"><img src="./public/images/delete.svg" alt="update"></div>
        </div>
        </li>
        `
}
 export function createBacklogTask (createBacklogTask){
  return `<li class="delayListItem">
        <div class="backlogListDetail">
        <div class="backlogTask">${createBacklogTask.title}</div>
         <div class="backlogCreateDate">Created:${createBacklogTask.create}</div>
          <div class="backlogupdateDate">update: ${createBacklogTask.update}</div>
          <div class="backlogdueDate">Due: ${createBacklogTask.due}</div>
           </div>  
        <div class="backlogIconContainer"> 
          <div class="backlogEditButton"> <img src="./public/images/update.svg" alt="update"></div> 
        <div class="BacklogMoveTodo"><img src="./public/images/move.svg" alt="update"></div>    
        <div class="delayDeleteButton"> <img src="./public/images/delete.svg" alt="update"></div>        
        </div>
        </li>
        `
      }

export function createProgressTask (progressListData){
  return `<li class="progressListItem">
         <div class="progressListDetail">
         <div class="progressTask">${progressListData.title}</div>
         <div class="progressCreateDate">Created: ${progressListData.create}</div>
          <div class="progressUpdateDate">Update: ${progressListData.update}</div>
         <div class="progressDueDate">Due: ${progressListData.due}</div>
         </div>
         <div class="progressIconContainer">
          <div class="progressEditButton"><img src="./public/images/update.svg" alt="update"></div>
         <div class="progressMoveInTodo"><img src="./public/images/moveBack.svg" alt="update"></div>
         <div class="progressMoveButton"><img src="./public/images/move.svg" alt="update"></div>
         <div class="progressDeleteButton"><img src="./public/images/delete.svg" alt="update"></div>
         </div>
         </li>`
   
}
 export function createSignTasks (signListData){
  return `<li class="signListItem">
         <div class="signListDetail">
         <div class="signTask">${signListData.title}</div>
          <div class="signExpiryDate">Create: ${signListData.create}</div>
          <div class="signCompletedDate">Expiry: ${signListData.due}</div>
          </div>
         <div class="signIconContainer">
          <div class="signMoveInCompleted"><img src="./public/images/moveBack.svg" alt="update"></div>
          <div class="signDeleteButton"><img src="./public/images/delete.svg" alt="update"></div>
         </div>
         </li>
         `
}
