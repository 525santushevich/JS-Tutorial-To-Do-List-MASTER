// CODE EXPLAINED channel
//elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
//names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
//date
const options = {
    weekday: "long",
    month: "short",
    day: "numeric"
  };
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString("en-us", options);
  //to do function
  function addToDo(toDo, id, done, trash) {
    if (trash) {
      return;
    }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `<li class="item">
                  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                  `;

    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
  }

   //enter key
let LIST, id;
let data = localStorage.getItem("TODO");
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST); 
} else {
  LIST = [];
  id = 0;
}
function loadList(array) {
  array.forEach(function(item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}
clear.addEventListener("click", function(){
  localStorage.clear;
  location.reload();
});
