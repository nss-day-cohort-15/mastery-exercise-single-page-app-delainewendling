var CarLot = (function(populate){

populate.populatePage = function(inventory) {
  // Loop over the inventory and populate the page
  var container = document.getElementById("carLot");
    console.log("inventory", inventory)
      inventory.forEach(function(car) {
        //Create a green For Sale box or a red SOLD box depending on the availability of the car
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
    populate.activateEvents(inventory)
  }
  //Grab all cards 
  populate.activateEvents = function(inventory){
    var cards = document.querySelectorAll(".carCard");
    cards.forEach((card)=>{
      card.addEventListener("click", (e)=>{
        console.log(e)
        var input = document.getElementById("inputText");
        input.value = "";
        input.focus();
        populate.borderChange(e);
      })
    })
  }
  // Now that the DOM is loaded, establish all the event listeners needed
   // CarLot.activateEvents(populatePage);
   CarLot.loadInventory(populate.populatePage);
   return populate;
}) (CarLot || {})

