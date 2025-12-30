export const createNode = ({title,createDate,update,due})=>{
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