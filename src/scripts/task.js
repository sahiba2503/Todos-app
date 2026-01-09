let url = "https://jsonplaceholder.typicode.com/todos";
var inputField = document.querySelector("#taskInput");
var Btn = document.querySelector("#addBtn");
var inputField = document.querySelector("#taskInput");
var list = document.querySelector("ol");
 

Btn.addEventListener("click",addTask);
function addTask(){
  var taskData = inputField.value;
  var newtask = {
    title:taskData
   }
   if(taskData == ""){
    return;
   }
   
  
   else{
     fetch(url,{
    method:"POST",
    body: JSON.stringify(newtask),
   headers:{
      "Content-Type":"application/json"
   }
   })
   .then(data=>data.json())
   .then((data)=>{
    console.log(data)
    inputField.value = "";
    createTaskItem(data);
      })
   .catch("error");
   }

};
function createTaskItem(data){
  list.insertAdjacentHTML("beforeend",`
    <div class="taskDetail">
    <li>${data.title} <li>
      <span class="upd">update</span>
      <span class="del">delete</span>
</div>
    `)
   
}

