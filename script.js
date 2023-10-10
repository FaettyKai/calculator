container = document.querySelector("#container")
display = document.querySelector("#display")

array = [1,2,3,"+",4,5,6,"-",7,8,9,"/",".",0,"=","x"]
firstValue = " "
secondValue = " "
operator = " "

buttons = []

for(let i = 0; i < array.length; i++) {
 	button = document.createElement("button")
 	container.appendChild(button)
	button.classList.add("content") 
    button.textContent = array[i]
    button.setAttribute("style", "height: 2em; width: 2em;")
 	buttons.push(button)
  button.addEventListener("click", () => {
  	 number1 = firstValue += array[i]
     console.log(number1)
     display.classList.add("content")
     display.textContent = number1
  })
  }
