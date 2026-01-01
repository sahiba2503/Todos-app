 export function createCompletedTask ({title,createDate,update,due,completedDate}){
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