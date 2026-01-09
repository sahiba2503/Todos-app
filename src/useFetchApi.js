var url = "https://jsonplaceholder.typicode.com/todos";
//prent all task what ever present in the server
  fetch(url)
  .then(res=> res.json())
  .then(data=>console.log(data))
  .catch("error");

//target on specific target to console
  fetch(url)
  .then(res=> res.json())
  .then(data=>
   console.log("this is title of the object which is present in the third position on the server - "+ data[3].title)
     
)  
  .catch("error");

// console all task id and title
  fetch(url)
  .then(res=> res.json())
  .then((data)=>{
  for(let x in data){
      console.log("id is = " + data[x].id + " title is = " + data[x].title)
  }
     
})  
  .catch("error");

//to check is available or not id = 5
fetch(url)
  .then(res => res.json())
  .then(data => {
    for (let item of data) {
      if (item.title === 5) {
        console.log("Yes, we got id = " + item.id);
        return; // stop loop once found
      }
    }
    console.log("Sorry, id = 5 not found");
  })
  .catch(error => console.log(error));

//to delete the object which id is five
fetch("https://jsonplaceholder.typicode.com/todos/5",{
   method:"DELETE"
})
  .then(res => res.json())
  .then(() => {console.log("id 5 is deleted");
  })
  .catch(error => console.log(error));

//now i want to see is available or not id five
  fetch(url)
  .then(res => res.json())
  .then(data => {
    for (let item of data) {
      if (item.title === 5) {
        console.log("Yes, we got id = " + item.id);
        return; // stop loop once found
      }
    }
    console.log("Sorry, id = 5 not found");
  })
  .catch(error => console.log(error));

//add task data on the server
var todoTask = {
   title:"update new feature",
   createDate : "22-1-26",
   update:"",
   due:"25-1-26"
};
  fetch(url,{
   method:"POST",
  body: JSON.stringify(todoTask),
   headers:{
      "Content-Type":"application/json"
   }

  })
  .then(res=>res.json())
  .then((data)=>console.log("data is added in the server" + data.id))
  .catch(()=>console.log("error"));

//get  data to read
  fetch(url,{
   method:"GET"
  })
  .then(res=>res.json())
  .then((data)=>{
    for (let item of data) {
      if (item.id === 20) {
        console.log("Yes, we got id = " + item.id);
        console.log("this is title of that id - " + item.title);
        break;
      }
    }
    console.log("Sorry, i did not find");
  })
  .catch(error => console.log(error));

//update a specific task's all detail. 
let newTask = {
  "id": 5,
  "title": "Learn JS",
  "completed": false,
  "due": "25-01-26"
}
fetch("https://jsonplaceholder.typicode.com/todos/5", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newTask)
}
)
.then(res=>res.json())
.then((data)=>console.log(data))
.catch(err => console.log(err));

let newTaskup = {
   "title": "Learn JS first"
}
//update only specific index value of the object.
fetch("https://jsonplaceholder.typicode.com/todos/5", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newTaskup)
}
)
.then(res=>res.json())
.then((data)=>console.log(data))
.catch(err => console.log(err));

