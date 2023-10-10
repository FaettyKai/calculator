container = document.querySelector("#container")
container.setAttribute("style", "width: 7em; height: 10em;")
display = document.querySelector("#display")

array = [1,2,3,"+",4,5,6,"-",7,8,9,"/",".",0,"=","x"]
firstValue = " "
secondValue = " "
operator = " "

buttons = () => {
  array.forEach((label) => {
    button = document.createElement("button");
    button.setAttribute("style", "height: 2em; width: 2em;");
    button.classList.add("content");
    button.textContent = label.toString();
    container.appendChild(button);
    button.addEventListener("click", () => {
    	if(typeof label === "number" || label === ".") {
      	x = display.textContent = firstValue += label
      		if(label === "x" || label === "/" || label === "+" || label === "-" || label === "=") {
          	clear(firstValue)
            x2 = display.textContent = secondValue += label 
            console.log(Number(x2))
          }   		
      else if(label === "x")
      	multiply(firstValue, secondValue, operator)
      else if(label === "/")
      	divide(firstValue, secondValue, operator)
      else if(label === "-")
      	subtract(firstValue, secondValue, operator)
     	else if(label === "+")
      	addition(firstValue, secondValue, operator)
      else if(label === "=")
      	result(firstValue, secondValue)
      console.log(Number(x))
		}
    })
    multiply = (firstValue, secondValue, operator) => {

    }
    divide = (firstValue, secondValue, operator) => {
 
    }
    subtract = (firstValue, secondValue, operator) => {

    }
    addition = (firstValue, secondValue, operator) => {

    }
    clear = (firstValue) => {
			firstValue = " "
      return firstValue
    }
    result = (firstValue, secondValue, operator) => {
    	
    }
  })
}
buttons()
