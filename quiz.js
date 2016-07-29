var CarLot = (function(populate){

populate.populatePage = function(inventory) {
  // Loop over the inventory and populate the page
  var container = document.getElementById("carLot");
      inventory.forEach(function(car, index) {
        //Create a green For Sale box or a red SOLD box depending on the availability of the car
        if (car.purchased === false) {
         var purchased = `<span class="forSale"> For Sale! </span>`
         } else {
             var purchased = `<span class="sold"> SOLD </span>`
         }
        container.innerHTML += `<div class="col-sm-4 carCard">
          <div class="col-sm-12" style= 'border: 3px solid ${car.color}'>
          <h2 class="carInfo"> ${car.make} ${car.model} </h2>
          <p class="description" id="car-${index}"> ${car.description} </p>
          <p class="carYear"> ${car.year} </p>
          <p class="carsColor"> Color: ${car.color} </p>
          <p class="carPrice"> Price: $${car.price} </p>
           ${purchased}
         </div>
        </div>`
      });
    populate.activateEvents(inventory)
  }
  //Grab all cards and put an event listener on each one. When one is clicked the input text is cleared and focused on. The border change function is also called.
  populate.activateEvents= function(inventory){
    //Add event listeners to cards
    var targetIndex;
    var targetDescription;
    var targetParent;
    var cards = document.querySelectorAll(".carCard");
    cards.forEach((card)=>{
      card.addEventListener("click", (e)=>{
        //Target Parent is the outer div
        targetParent = e.target.offsetParent
        //This is the description div of the card clicked on
        targetDescription = e.target.offsetParent.children[1];
        targetIndex = targetDescription.id.split("-")[1];
        console.log("from click", targetIndex)
        // console.log("id", targetDescription.id)
        var input = document.getElementById("inputText");
        input.removeAttribute("disabled")
        //places description of the car in the input for editing
        input.value= ""
        input.value = targetDescription.innerText;
        //Focuses on the end of the description rather than the beginning
        input.focus();
        input.setSelectionRange(input.value.length,input.value.length);
        //calls the functions that will change the border of the clicked div and add text to the appropriate description
        populate.borderChange(e);
        })
      })
    //Add event listeners to button and text input
    var button = document.querySelector(".submit");
    var input = document.getElementById("inputText");
    input.addEventListener("keypress", (e)=>{
    var key = e.which || e.keyCode;
    if (key === 13) {
        console.log("from enter", targetIndex)
        populate.replaceDescription(targetParent,input,  targetIndex, inventory)
      }
    })
    button.addEventListener("click", (e)=>{
        populate.replaceDescription(targetParent, input, targetIndex, inventory)
    })
  }

  populate.replaceDescription = function(targetParent, input, targetIndex, inventory){
        console.log("the array", inventory)
        inventory[targetIndex].description = `${input.value}`;
        // console.log("target object", inventory[targetIndex].description)
        // console.log("new inventory", inventory)
        input.value= ""
        input.blur();
        input.setAttribute("disabled", true)
        var carCards = document.querySelectorAll(".carCard");
        carCards.forEach((card)=>{
          card.remove()
        })
        populate.colorReset(targetParent)
        populate.populatePage(inventory)
  }
  // Now that the DOM is loaded, establish all the event listeners needed
   // CarLot.activateEvents(populatePage);
   CarLot.loadInventory(populate.populatePage);
   return populate;
}) (CarLot || {})

