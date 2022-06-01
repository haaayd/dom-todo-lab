/*------------------------ Cached Element References ------------------------*/
const input = document.querySelector("input")
const pushButton = document.querySelector("button")
const ul = document.querySelector("ul")

/*----------------------------- Event Listeners -----------------------------*/
pushButton.addEventListener("click", function(event){
  const newToDo = document.createElement("li")
  newToDo.textContent = input.value
  ul.appendChild(newToDo)
  input.value = ""
  
  

})
console.log()

// when button is clicked 
// create a new li element 
//set the text of the newly created li element to the text that the user has entered into the input element. 
//reset the text in the input field to an empty string
// add the new li element to the page inside the ul element 
