let button = document.getElementById("start");
let text = document.getElementById("count");

function textEdit() {
    text.innerHTML = "Test";
}

button.addEventListener("click", textEdit)