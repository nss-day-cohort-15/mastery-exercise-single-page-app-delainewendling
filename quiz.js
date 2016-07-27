var CarLot = (function(populate){

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var container = document.getElementById("carLot");
    console.log("inventory", inventory)
      var cars = inventory.cars;
      console.log("cars", cars)
      cars.forEach(function(car) {
        if (car.purchased === false) {
         var purchased = `<span class="forSale"> For Sale! </span>`
         } else {
             var purchased = `<span class="sold"> SOLD </span>`
         }
        container.innerHTML += `<div class="col-sm-4" >
          <div class="col-sm-12 carCard" style= 'border: 3px solid ${car.color}'>
          <h2 class="carInfo"> ${car.make} ${car.model} <h2>
          <p class="description"> ${car.description} </p>
          <p class="carYear"> ${car.year} </p>
          <p class="carsColor"> Color: ${car.color} </p>
          <p class="carPrice"> Price: $${car.price} </p>
           ${purchased}
         </div>
        </div>`
      });
    //   var border = document.querySelectorAll('.carCard');
    //   border.forEach((card)=>{
    //     var cars = inventory.cars
    //     console.log("cars", cars)
    //     console.log("border color", cars.color)
    //     card.style.border = `1px solid ${cars.color}`
    // })
    //   borderColor(inventory);
    activateEvents()
  }
  function activateEvents (inventory){
    var cards = document.querySelectorAll(".carCard");
    cards.forEach((card)=>{
      card.addEventListener("click", (e)=>{
        console.log(e)
        var input = document.getElementById("inputText");
        input.value = "";
        console.log("clicked")
        input.focus();
        // var carCard = e.target.offsetParent;
        console.log(e.target.offsetParent.style.cssText)
        events(borderChange(e.target.offsetParent, car.color))
      })
    })
  }
  // Now that the DOM is loaded, establish all the event listeners needed
   carLot.activateEvents(populatePage);
   CarLot.loadInventory(populatePage);
   return populate;
}) (CarLot || {})

