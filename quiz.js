var CarLot = (function(events){

function populatePage(inventory) {
  // Loop over the inventory and populate the page
    var cars = getInventory();
    for (var i = 0; i<cars.length; i++){
      var container = document.getElementById("carLot");
      container.innerHTML += createCar(car);
    }
  };

function createCar(car) {
  return `<div class="row cars">
      <div class="name col-sm-4">
        <h2 class="carInfo"> ${car.make} ${cars.model} <h2>
        <p class="carYear"> ${car.year} </p>
        <p class="carPrice"> Price: ${car.price} </p>
        <p class="carsColor"> Color: ${car.color} </p>
        <p class="carPurchased"> Purchased? ${car.purchased} </p>
        <p class="description"> ${car.description}
      </div>`
};
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
   CarLot.loadInventory();
}) (CarLot || {})



// function getJSON (url, callback) {
//   var xhr = new XMLHttpRequest()
//   xhr.open('GET', url)
//   xhr.addEventListener('load', function() {
//     var data = JSON.parse(xhr.responseText)
//     callback(data)
//   })
//   xhr.send()
// }

// getJSON('inventory.json', function(data){
//   var cContainer = document.getElementById("carLot");
//   var cars = data.cars;
//   cars.forEach(function(car) {
//     cContainer.innerHTML += createCar(car)
//   });
// });
