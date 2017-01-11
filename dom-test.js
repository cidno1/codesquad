// 01 strawberry 아래에 새로운 과일 추가하기 & 삭제하기
// 02 banana 와 orange 사이에 새로운 과일 추가하기
// 03 apple을 grape와 strawberry 사이로 옮기기
// 04 class가 'red'인 노드 삭제
// 05 section 태그의 자손중에 class가 'blue'인 노드가 있다면 , 그 하위에 있는 h2 노드를 삭제

var fruit = document.querySelector("ul");
var apple = document.querySelector("li:first-child");
var orange = document.querySelector("li:nth-child(3)");
var strawberry = document.querySelector("li:last-child");
var newFruit = document.createElement("li");
var newText = document.createTextNode("Lemon");

//01
newFruit.appendChild(newText); // "Lemon"
fruit.appendChild(newFruit); // + <li>Lemon</li>


// 02
fruit.insertBefore(newFruit,orange);

// 03
var appleSave = fruit.removeChild(apple);
fruit.insertBefore(appleSave,strawberry);

// 04
var color = document.querySelector("ul:nth-child(2)");
var red = document.querySelectorAll(".red");

color.removeChild(red[0]);
color.removeChild(red[1]);

//05
// blue의 부모 중 section가 있는지 확인한다.
// section 태그의 자식 중 h2를 삭제한다.

var body = document.querySelector("body")
var section = document.querySelector("section");
var blue = document.querySelector(".blue");
var h2 = document.querySelector("h2");
var childEle = blue;

while(childEle !== body) {
  childEle = childEle.parentElement;
  if(childEle === section) section.removeChild(h2);
}
