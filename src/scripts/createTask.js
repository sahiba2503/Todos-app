export {createTodoTask,createProgressTask ,createCompletedTask,createSignTasks,createBacklogTask}
 const createTodoTask = ({title,createDate,update,due})=>{
return `<li class="todoListItem">
        <div class="todoListDetail">
        <div class="todoTask">${title}</div>
        <div class="todoCreateDate">Created: ${createDate}</div>
         <div class="todoUpdateDate">Update: ${update}</div>
        <div class="todoDueDate">Due: ${due}</div>
        </div>
        <div class="todoiconContainer">
          <div class="todoEditButton"><img src="./public/images/update.svg" alt="update"></div>
        <div class="todoBacklog"><img src="./public/images/moveBack.svg" alt="update"></div>
        <div class="todoMoveButton"><img src="./public/images/move.svg" alt="update"></div>
        <div class="todoDeleteButton"><img src="./public/images/delete.svg" alt="update"></div>
        </div>
        </li> `
};
 const createProgressTask = ({title,createDate,update,due})=>{
  return `<li class="progressListItem">
         <div class="progressListDetail">
         <div class="progressTask">${title}</div>
         <div class="progressCreateDate">Created: ${createDate}</div>
          <div class="progressUpdateDate">Update: ${update}</div>
         <div class="progressDueDate">Due: ${due}</div>
         </div>
         <div class="progressIconContainer">
          <div class="progressEditButton"><img src="./public/images/update.svg" alt="update"></div>
         <div class="progressMoveInTodo"><img src="./public/images/moveBack.svg" alt="update"></div>
         <div class="progressMoveButton"><img src="./public/images/move.svg" alt="update"></div>
         <div class="progressDeleteButton"><img src="./public/images/delete.svg" alt="update"></div>
         </div>
         </li>`
   
}
 const createCompletedTask = ({title,createDate,update,due,completedDate})=>{
  return `<li class="completedListItem">
        <div class="completedListDetail">
        <div class="completedTask">${title}</div>
        <div class="completedCreateDate">Created: ${createDate}</div>
           <div class="completedUpdateDate">Update: ${update}</div>
         <div class="completedDueDate">due: ${due}</div>        
        <div class="completedDueDate">Completed: ${completedDate}</div>
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
 const createSignTasks = ({title,createDate,completedDate,signExpiry})=>{
  return `<li class="signListItem">
         <div class="signListDetail">
         <div class="signTask">${title}</div>
          <div class="signExpiryDate">Create: ${createDate}</div>
          <div class="signCompletedDate">Completed: ${completedDate}</div>
         <div class="signExpiryDate">Expiry: ${signExpiry}</div>
          </div>
         <div class="signIconContainer">
          <div class="signMoveInCompleted"><img src="./public/images/moveBack.svg" alt="update"></div>
          <div class="signDeleteButton"><img src="./public/images/delete.svg" alt="update"></div>
         </div>
         </li>
         `
}

 const createBacklogTask = ({ title="",createDate="",update="",due="" })=>{
  return `<li class="delayListItem">
        <div class="backlogListDetail">
        <div class="backlogTask">${title}</div>
         <div class="backlogCreateDate">Created:${createDate}</div>
          <div class="backlogupdateDate">update: ${update}</div>
          <div class="backlogdueDate">Due: ${due}</div>
           </div>  
        <div class="backlogIconContainer"> 
          <div class="backlogEditButton"> <img src="./public/images/update.svg" alt="update"></div> 
        <div class="BacklogMoveTodo"><img src="./public/images/move.svg" alt="update"></div>    
        <div class="delayDeleteButton"> <img src="./public/images/delete.svg" alt="update"></div>        
        </div>
        </li>
        `
      }
