//Get values from the input
//Start or controller function
function getValues(){
  //Get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //Ensure that input value are integers, and not strings
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //Check to see if text was given in the input field
  if(Number.isInteger(startValue) && Number.isInteger(endValue)){
    //Call generateNumbers
    numbers = generateNumbers(startValue, endValue);

    //Call displayNumbers
    displayNumbers(numbers);

  } else {
    alert("You must enter integers for both fields");
  }


}

//Generate numbers from start value to end value
//logics functions
function generateNumbers(sValue, eValue){
  let numbers = [];

  //Get all numbers from start to end
  for (let index = sValue; index <= eValue; index++) {
    
    //Add values to array "numbers"
    numbers.push(index);
    
  }

  return numbers;
  

}

//Display even numbers in bold
//display or view functions
function displayNumbers(numbers){
  
  let templateRows = "";

  for (let index = 0; index < numbers.length; index++) {
    let className = "even";

    //Identify individual number in the array
    let number = numbers[index];

    //Check if value is even
    //If the result of value/2 is equal to 0, then value is even
    if(number % 2 == 0){
      className = "even";

    } else {
      className = "odd";

    }

    //Create HTML code with corresponding class names for even and odd
    templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    
  }

  document.getElementById("results").innerHTML = templateRows;

}