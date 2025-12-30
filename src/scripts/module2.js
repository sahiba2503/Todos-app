
// var storedTodo = localStorage.getItem("TODO");
  if (storedTodo !== null) {  todoListData = JSON.parse(storedTodo);  }

  //show all progress tasks after reopen and refresh the browser.
  var storedProgress = localStorage.getItem("PROGRESS");
  if (storedProgress !== null) {    progressListData = JSON.parse(storedProgress);  }

  //show all completed tasks after reopen and refresh the browser.
  var storedCompletd = localStorage.getItem("COMPLETED");
  if (storedCompletd !== null) {    completedListData = JSON.parse(storedCompletd);  }

  //show all sign tasks after reopen and refresh the browser.
  var storedSign = localStorage.getItem("SIGN");
  if (storedSign !== null) {    signListData = JSON.parse(storedSign);  }

  //show all backlog tasks after reopen and refresh the browser.
  var storedBacklog = localStorage.getItem("BACKLOG");
  if (storedBacklog !== null) {    delayListData 
  = JSON.parse(storedBacklog);  }
       