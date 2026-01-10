let url = "https://jsonplaceholder.typicode.com/todos";
var inputField = document.querySelector("#taskInput");
var Btn = document.querySelector("#addBtn");
var inputField = document.querySelector("#taskInput");
var list = document.querySelector("ol");
 
   fetch(url,{
    method:"GET"   
   })
   .then(res=>res.json())
   .then((data)=>{
    for(let item of data){
      if(item.id < 20){
      console.log("task title is : " + item.title)
        list.insertAdjacentHTML("beforeend",`
    <div class="taskDetail">
    <li>${item.title} <li>
      <span class="upd">update</span>
      <span class="del">delete</span>
</div>  `)
    }
  }
   
  })
   .catch("error");