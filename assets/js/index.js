// ` => backtick
// () = parathesis
// [] = brancket
// {} = braces

// when user clicks the button
// then start counting everytime the user clicks on the button
// the button text will change based on the number, counted

// -- Variable
// 'let' creates a mutable variable
// 'const' create a immutable variable
// "const until you can't"
// ---

// Variable holding the number of times clicked
let numberClicked = 0

// Get the button element by it's ID
const btnElement = document.querySelector('#btn')
const msgElement = document.querySelector('#msg')

// add 1 to numberClicked
// update btnElement innerText to numberClicked
function addOne() {
  // add 1 to numberClicked
  numberClicked = numberClicked + 1

  // update btnElement innerText to numberClicked
  btnElement.innerText = numberClicked

  if (numberClicked > 10) {
    // If the number is greater than 10, say "keep going!"
    msgElement.innerText = 'keep going!'
  } else if (numberClicked > 20) {
    // If the number is greater than 20, say "stop!"
    msgElement.innerText = 'stop!'
  } else if (numberClicked > 30) {
    // If the number is greater than 30, say "Keep going again."
    msgElement.innerText = 'Keep going again.'
  } else if (numberClicked > 40) {
    // If the number is greater than 40, say "You got the best finger in the universe"
    msgElement.innerText = 'You got the best finger in the universe'
  } else if (numberClicked > 50) {
    // If the number is greater than 50, say "The last statement was a lie"
    msgElement.innerText = 'You got the best finger in the universe'
  } else if (numberClicked > 100) {
    // If the number is greater than 100, say "Outside the box"
    msgElement.innerText = 'Outside the box'
  } else {
    msgElement.innerText = 'How many times can you click?'
  }
}

btnElement.addEventListener('click', addOne)
