let url = "https://jsonplaceholder.typicode.com/todos";
var inputField = document.querySelector("#taskInput");
var Btn = document.querySelector("#addBtn");
var inputField = document.querySelector("#taskInput");
var list = document.querySelector("ol");
 var incr = 20;

   fetch(url,{
    method:"GET"   
   })
   .then(res=>res.json())
   .then((data)=>{
    for(let item of data){
      if(item.id < incr){
      console.log("task title is : " + item.title)
        list.insertAdjacentHTML("beforeend",`
    <div class="taskDetail">
    <li>${item.title} <li>
      <span class="upd">update</span>
      <span class="del">delete</span>
</div>  `)
    }  }   
  })
   .catch("error");
// add task in the list.
Btn.addEventListener("click",addTask)
function addTask()
{
  var taskTitle = inputField.value;
  if(taskTitle == ""){
    return;
  }
  let newTask = {
   "title": taskTitle 
  }

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newTask)
}
)
.then(res=>res.json())
.then((data)=>{
  
    list.insertAdjacentHTML("beforeend",`
    <div class="taskDetail">
    <li>${data.title} <li>
      <span class="upd">update</span>
      <span class="del">delete</span>
</div>  `)
 inputField.value ="";
console.log("data submit")
 incr ++;
})
.catch(err => console.log(err));
};
