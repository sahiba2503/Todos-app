 export function createSignTasks ({title,createDate,completedDate,signExpiry}){
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