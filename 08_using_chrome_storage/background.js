console.log('hello')

let input = document.getElementById("input-word");
input.addEventListener("input", inputHandler);

function inputHandler() {
  console.log('changed')
}
