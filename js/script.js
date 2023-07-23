//business logic
function pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
  this.price = 0
  this.pizzatoppings = ["Pepperoni", "Sausage", "Ham", "Bacon", "Chicken"];
  this.pizzaSize = ["small", "medium", "large"];
  
}
const toppings = document.getElementsByName("toppings")
const pizzaSize = document.getElementsByName("sizes")

pizza.prototype.getPrice = function () {
  let price= 0
  pizzaSize.forEach(pizzaSize => {
    if (this.size ==="small") {
      price += 10;
    }
    else if (this.size ==="medium") {
      price += 14;
    }
    else if (this.size ==="large") {
      price += 18;
      return(pizzaSize)
    }
    console.log(pizza())
  })
  
}


//for (let i = 0; i < toppings.length; i++){
  //  if (toppings[i].checked === true) {
  //   selectedToppings.push(toppings[i].value);
  // }





//for (let i = 0; i < toppings.length; i++) {
 // if (toppings[i].checked === true) {
  //  selectedToppings.push(toppings[i].value);
//}

//}

//const myPizza = new pizza(['Pepperoni', 'Sausage'], 'medium');



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
  const size = document.getElementsByTagName("Option")
  const userPizza = new pizza(toppings,size);
  userPizza.getPrice();
    
  
    // put those into a new array
    //toppings.forEach(function ())


    //toppings.forEach((topping) => {
    // if (topping.checked === true) {
    //   selectedToppings.push(topping.value);
    //  }
    // })

  
  //  const pizzaOutput = document.getElementById('pizzaOutput');
  //  pizzaOutput.innerText(`Your Pizza wil cost ${userPizza.price}. And has ${userPizza.toppings} for toppings`)
  }
