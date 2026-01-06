
var slider = document.querySelector(".taskContainer");

var leftBtn = document.querySelector("#sliderLeftBtn");
var rightBtn = document.querySelector("#sliderRightBtn");

 var backBtn = document.querySelector("#backBtn");
 var todoBtn = document.querySelector("#todoBtn");
 var proBtn = document.querySelector("#proBtn");
 var doneBtn = document.querySelector("#donBtn");
 var expiryBtn = document.querySelector("#expiryBtn");
 var index = 0;
 var STEP = 20;
  // var lengthTaskBox = document.querySelectorAll(".taskBox").length;

  //we have implement login on left button all posible condition and then write code for right btn.
leftBtn.addEventListener("click", function () {
 //it is for desktop left button
  if (window.innerWidth > 770) {
    if (index <= 0) {
      index = 1;
    } else {
      index--;
    }
  }  
  // it is for tablet left button
  else if (window.innerWidth > 480) {
    if (index <= 0) {
      index = 4;
    } else {
      index--;
    }
  }
  slider.style.transform = "translateX(-" + (index * STEP) + "%)";
});
rightBtn.addEventListener("click", function () {
  //it is for desktop right button
  if (window.innerWidth > 770) {
    if (index >= 1) {
      index = 0;
    } else {
      index++;
    }
  }
  // it is for tablet screen right button
  else if (window.innerWidth > 480) {
    if (index >=  4) {
      index = 0;
    } 
    else {
      index++;
    }
  }

  slider.style.transform = "translateX(-" + (index * STEP) + "%)";
});

//it is for mobile screen it work directly click btn
backBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(0%)";
});

todoBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(-20%)";
});

proBtn.addEventListener("click", function () {
   slider.style.transform = "translateX(-40%)";
});

doneBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(-60%)";
});

expiryBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(-80%)";
});
 export {slider,leftBtn,rightBtn,backBtn,todoBtn,proBtn,doneBtn,expiryBtn,index, STEP};


//this logic for slider
// var slider = document.querySelector(".taskContainer");

// var leftBtn = document.querySelector("#sliderLeftBtn");
// var rightBtn = document.querySelector("#sliderRightBtn");

//  var backBtn = document.querySelector("#backBtn");
//  var todoBtn = document.querySelector("#todoBtn");
//  var proBtn = document.querySelector("#proBtn");
//  var doneBtn = document.querySelector("#donBtn");
//  var expiryBtn = document.querySelector("#expiryBtn");
//  var index = 0;
//  var STEP = 20;
//   var lengthTaskBox = document.querySelectorAll(".taskBox").length;

//   //we have implement login on left button all posible condition and then write code for right btn.
//  leftBtn.addEventListener("click", function () {
//  //it is for desktop left button
//   if (window.innerWidth > 770) {
//     if (index <= 0) {
//       index = lengthTaskBox - 4;
//     } else {
//       index--;
//     }
//   }  
//   // it is for tablet left button
//   else if (window.innerWidth > 480) {
//     if (index <= 0) {
//       index = 4;
//     } else {
//       index--;
//     }
//   }
//   slider.style.transform = "translateX(-" + (index * STEP) + "%)";
// });
// rightBtn.addEventListener("click", function () {
//   //it is for desktop right button
//   if (window.innerWidth > 770) {
//     if (index >= lengthTaskBox - 4) {
//       index = 0;
//     } else {
//       index++;
//     }
//   }
//   // it is for tablet screen right button
//   else if (window.innerWidth > 480) {
//     if (index >=  4) {
//       index = 0;
//     } 
//     else {
//       index++;
//     }
//   }

//   slider.style.transform = "translateX(-" + (index * STEP) + "%)";
// });

// //it is for mobile screen it work directly click btn
// backBtn.addEventListener("click", function () {
//     slider.style.transform = "translateX(0%)";
// });

// todoBtn.addEventListener("click", function () {
//     slider.style.transform = "translateX(-20%)";
// });

// proBtn.addEventListener("click", function () {
//    slider.style.transform = "translateX(-40%)";
// });

// doneBtn.addEventListener("click", function () {
//     slider.style.transform = "translateX(-60%)";
// });

// expiryBtn.addEventListener("click", function () {
//     slider.style.transform = "translateX(-80%)";
// });






//  export {slider,leftBtn,rightBtn,backBtn,todoBtn,proBtn,doneBtn,expiryBtn,index, STEP};
  // select elements
// var slider = document.querySelector(".taskContainer");

// var leftBtn = document.querySelector("#sliderLeftBtn");
// var rightBtn = document.querySelector("#sliderRightBtn");

// var backBtn = document.querySelector("#backBtn");
// var todoBtn = document.querySelector("#todoBtn");
// var proBtn = document.querySelector("#proBtn");
// var doneBtn = document.querySelector("#donBtn");
// var expiryBtn = document.querySelector("#expiryBtn");

// // variables
// var index = 0;
// var STEP = 20; // move 20% each click
// var totalBox = document.querySelectorAll(".taskBox").length;

// // LEFT BUTTON
// leftBtn.addEventListener("click", function () {

//   // desktop screen
//   if (window.innerWidth > 900) {
//     if (index == 0) {
//       index = totalBox - 4;
//     } else {
//       index--;
//     }
//   }
//   // tablet screen
//   else if (window.innerWidth > 480) {
//     if (index == 0) {
//       index = 4;
//     } else {
//       index--;
//     }
//   }

//   slider.style.transform = "translateX(-" + (index * STEP) + "%)";
// });


// // RIGHT BUTTON
// rightBtn.addEventListener("click", function () {

//   // desktop screen
//   if (window.innerWidth > 900) {
//     if (index == totalBox - 4) {
//       index = 0;
//     } else {
//       index++;
//     }
//   }
//   // tablet screen
//   else if (window.innerWidth > 480) {
//     if (index == 4) {
//       index = 0;
//     } else {
//       index++;
//     }
//   }

//   slider.style.transform = "translateX(-" + (index * STEP) + "%)";
// });


// // MOBILE DIRECT BUTTONS
// backBtn.addEventListener("click", function () {
//   slider.style.transform = "translateX(0%)";
// });

// todoBtn.addEventListener("click", function () {
//   slider.style.transform = "translateX(-20%)";
// });

// proBtn.addEventListener("click", function () {
//   slider.style.transform = "translateX(-40%)";
// });

// doneBtn.addEventListener("click", function () {
//   slider.style.transform = "translateX(-60%)";
// });

// expiryBtn.addEventListener("click", function () {
//   slider.style.transform = "translateX(-80%)";
// });
