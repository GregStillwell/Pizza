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
    
    } else if (this.size ==="medium") {
      this.price += 18;
    
    } else if (this.size ==="large") {
      this.price += 24;

    this.price += this.toppings.length;
    }; 
    console.log(this.price)

    return this.price;
    
   
   
}
  

//ui logic
window.onload = function () {
  const form = document.getElementById("pizzatoppings")
  form.addEventListener("submit", handleFormSubmit)
  

  function handleFormSubmit(e) {
    e.preventDefault();
    const toppingSelection = document.querySelectorAll("input[name= 'toppings']:checked");
    const sizeSelection = document.querySelector("input[name= 'size']:checked");
  
    
    let newPizza = new pizza(toppingSelection, sizeSelection.value)
    newPizza.getPrice();
    
  
    
    const p = document.createElement("p");
    p.append(newPizza.price);
    document.body.append(p);
  }
}


