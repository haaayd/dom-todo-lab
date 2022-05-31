/*------------------------ Cached Element References ------------------------*/
const input = document.querySelector("input")
const button = document.querySelector("submit-button")
const ul = document.querySelector("ul")

/*----------------------------- Event Listeners -----------------------------*/
button.addEventListener("submit", function(int){
  int.preventDefault()
console.log(input)
})

// when button is clicked 
// create a new li element 
//set the text of the newly created li element to the text that the user has entered into the input element. 
//reset the text in the input field to an empty string
// add the new li element to the page inside the ul element 
