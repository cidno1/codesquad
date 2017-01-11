// 01 strawberry 아래에 새로운 과일 추가하기 & 삭제하기
// 02 banana 와 orange 사이에 새로운 과일 추가하기
// 03 apple을 grape와 strawberry 사이로 옮기기
// 04 class가 'red'인 노드 삭제

var fruit = document.querySelector("ul");
var apple = document.querySelector("li:first-child");
var orange = document.querySelector("li:nth-child(3)");
var strawberry = document.querySelector("li:last-child");
var newFruit = document.createElement("li");
var newText = document.createTextNode("Lemon");
var color = document.querySelector("ul:nth-child(2)");
var red = document.querySelectorAll(".red");

// 01
newFruit.appendChild(newText); // "Lemon"
fruit.appendChild(newFruit); // + <li>Lemon</li>


// 02
fruit.insertBefore(newFruit,orange);

// 03
var appleSave = fruit.removeChild(apple);
fruit.insertBefore(appleSave,strawberry);

// 04
color.removeChild(red[0]);
color.removeChild(red[1]);
