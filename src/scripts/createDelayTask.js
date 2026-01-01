 export function createBacklogTask ({ title="",createDate="",update="",due="" }){
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