let addToDoButton = document.getElementById("AddToDo");
let toDoContainer = document.getElementById("toDoContainer")
let inputText = document.getElementById("inputText");
let ClearToDo = document.getElementById("ClearToDo");

addToDoButton.addEventListener("click" , function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";


    paragraph.addEventListener("click" , function(){
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph)
    });


    ClearToDo.addEventListener("click", function(){
        paragraph.style.display = "none";
    })
})