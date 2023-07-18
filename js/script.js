//business logic
function pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
  this.price = 0
}

pizza.prototype.getPrice()	{
  // based off of the the amount of toppings
  // added to the size price
  // this.price
}

const myPizza = new pizza(['Pepperoni', 'Sausage'], 'medium');



//ui logic
window.onload = function () {
  const form = document.getElementById("pizzatoppings")
	form.addEventListener("submit", handleFormSubmit) 
};


function handleFormSubmit(e) {
  e.preventDefault();


  let selectedToppings = [];
  // look at form see which checkboxes are checked
  const toppings = document.getElementsByName("toppings") //array of the HTML elements that have the name toppping

  // put those into a new array
  //toppings.forEach(function ())
  
  for (let i = 0; i < toppings.length; i++){
    if (toppings[i].checked === true) {
      selectedToppings.push(toppings[i].value);
    }
  }

  toppings.forEach((topping) => {
    if (topping.checked === true) {
      selectedToppings.push(topping.value);
    }
  })

  
  const userPizza = new pizza(selectedToppings, 'large');
  userPizza.getPrice();

  const pizzaOutput = document.getElementById('pizzaOutput');

  pizzaOutput.innerText(`Your Pizza wil cost ${userPizza.price}. And has ${userPizza.toppings} for toppings`)

}


