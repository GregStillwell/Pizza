//business logic
function pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0; 
 console.log(toppings)
}

pizza.prototype.getPrice = function () {
    if (this.size ==="small") {
      this.price += 15;
    }
    else if (this.size ==="medium") {
      this.price += 18;
    }
    else if (this.size ==="large") {
      this.price += 24;

    this.price += this.toppings.length;
    
    return this.price;
    
   };
   console.log(this.price) 
}
  



//for (let i = 0; i < toppings.length; i++){
  //if (toppings[i].checked === true) {
  //   selectedToppings.push(toppings[i].value);
  // }
 // }


//const myPizza = new pizza(['Pepperoni', 'Sausage'], 'medium');



//ui logic
window.onload = function () {
  const form = document.getElementById("pizzatoppings")
  form.addEventListener("submit", handleFormSubmit)
}
function handleFormSubmit(e) {
  e.preventDefault();
  const toppingSelection = document.querySelectorAll("input[name= 'toppings']:checked");
  const sizeSelection = document.querySelector("input[name= 'size']:checked");
  
 // let selectedToppings = [];
  let newPizza = new pizza(toppingSelection, sizeSelection.value)
  newPizza.getPrice();
  
  const toppings = document.getElementsByName("toppings") //array of the HTML elements that have the name toppping
  const size = document.getElementsByName("sizes")
  //const userPizza = new pizza(toppings,size);
 // userPizza.getPrice();
    
 window.onload = function () {
  const form = document.getElementById("pizzatoppings")
  form.addEventListener("submit", handleFormSubmit)
    // put those into a new array
    //toppings.forEach(function ())


    //toppings.forEach((topping) => {
    // if (topping.checked === true) {
    //   selectedToppings.push(topping.value);
    //  }
    // })

  
  //  const pizzaOutput = document.getElementById('pizzaOutput');
  //  pizzaOutput.innerText(`Your Pizza wil cost ${userPizza.price}. And has ${userPizza.toppings} for toppings`)
 }}