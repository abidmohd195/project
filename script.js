/* console.log("hello"); */
let title = document.getElementById("input");
console.log(input.value);
let color = document.getElementById("color");
let text = document.getElementById("text");
let btn = document.getElementById("add");
let bottom = document.getElementById("bottom");
let notes = document.getElementById("notes");

function addNote() {
   if (input.value === "" || text.value === "") {
    alert("Please fill all the fields");
    return;
  }else{ 
    let div1 = document.createElement("div");
    let para1 = document.createElement("p");
    para1.innerText = input.value;
    let div2 = document.createElement("div");
    let para2 = document.createElement("p");
    para2.innerText = text.value;
    let cross = document.createElement("button");
    cross.innerText = "X";
    div2.appendChild(para2);
    div2.appendChild(cross);
    div1.style.backgroundColor = color.value;
    div1.appendChild(para1);
    div1.appendChild(div2);
    bottom.appendChild(div1);
  
    cross.addEventListener("click", function () {
      div1.remove();
    });
  }
}

  


function changeColor() {
    notes.style.backgroundColor=color.value;
    input.style.backgroundColor=color.value;
  
  text.style.backgroundColor = color.value;
}
btn.addEventListener("click", addNote);
color.addEventListener("click", changeColor);
