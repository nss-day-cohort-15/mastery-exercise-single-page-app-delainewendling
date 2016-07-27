var CarLot = (function(events){

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var container = document.getElementById("carLot");
    console.log("inventory", inventory)
      var cars = inventory.cars;
      console.log("cars", cars)
      cars.forEach(function(car) {
        console.log("car", car)
        container.innerHTML +=createCar(car)
      }); 
    }

function createCar(car) {
   if (car.purchased === false) {
      var purchased = `<span class="forSale"> For Sale! </span>`
   } else {
       var purchased = `<span class="sold"> SOLD </span>`
   }
   return `<div class="name col-sm-4">
        <h2 class="carInfo"> ${car.make} ${car.model} <h2>
        <p class="carYear"> ${car.year} </p>
        <p class="carPrice"> Price: $${car.price} </p>
        <p class="carsColor"> Color: ${car.color} </p>
        <p class="description"> ${car.description} </p>
        ${purchased}
      </div>`
  };
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
// Load the inventory and send a callback function to be
// invoked after the process is complete
  console.log(populatePage)
   CarLot.loadInventory(populatePage);
   return events;
}) (CarLot || {})

