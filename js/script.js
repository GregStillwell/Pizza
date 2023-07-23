//business logic
function pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
  this.price = 0 // this.pizzatop = ["Pepperoni", "Sausage", "Ham", "Bacon", "Chicken"];
 // this.pizzaSiz= ["small", "medium", "large"];
 console.log(toppings)
}
//const toppings = document.getElementsByName("toppings").value
//const pizzaSize = document.getElementsByName("sizes").value

pizza.prototype.getPrice = function () {

    if (this.size ==="small") {
      price += 15;
    }
    else if (this.size ==="medium") {
      price += 18;
    }
    else if (this.size ==="large") {
     price += 24;

    this.price += this.toppings.length
    
    return this.price;
    
   };
    
  }
  



//for (let i = 0; i < toppings.length; i++){
  //if (toppings[i].checked === true) {
  //   selectedToppings.push(toppings[i].value);
  // }
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
  let newPizza = new pizza(toppingSelection, sizeSelection)
  let selectedToppings = [];

  // look at form see which checkboxes are checked
  const toppings = document.getElementsByName("toppings") //array of the HTML elements that have the name toppping
  const size = document.getElementsByName("sizes")
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