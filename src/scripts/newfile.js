// const URL = "https://cat-fact.herokuapp.com/facts"
// var btn = document.querySelector("#clickBtn");
// var factPara = document.querySelector("#detail");


// function getFacts() {
//   let p = fetch(URL);

//     p.then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);        
//          factPara.innerText = data[1].text;
//     })
//     .catch(() => {
//       console.log("error");
//     });
// }

// btn.addEventListener("click",getFacts );
// const URL = "https://cat-fact.herokuapp.com/facts";
// var btn = document.querySelector("#clickBtn");
// var factPara = document.querySelector("#detail");

// function getFacts() {
//   let p = fetch(URL);

//   p.then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     // correct data access
//     factPara.innerText = data.data[1].text;
//   })
//   .catch(() => {
//     console.log("error");
//   });
// }

// btn.addEventListener("click", getFacts);
//we can use these api link. fetch("https://formatjsononline.com/api/users"),fetch("https://jsonplaceholder.typicode.com/users")

 fetch("https://www.boredapi.com/api/activity")
   .then((response) => {
    return response.json();
  })
    .then((data) => {
    console.log(data);
     
  })
    .catch(() => {
    console.log(" some error");
  });





     

  



