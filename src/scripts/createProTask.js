export function createProgressTask ({title,createDate,update,due}){
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