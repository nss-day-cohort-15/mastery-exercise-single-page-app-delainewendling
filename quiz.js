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
    var card;
    var cards = document.querySelectorAll(".carCard");
    cards.forEach((card)=>{
      populate.colorReset(card)
      card.addEventListener("click", (e)=>{
        console.log(">?",e.currentTarget)
        //Target Parent is the outer div
        card = e.currentTarget
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
        populate.addText(targetDescription, card)
      }
    })
    button.addEventListener("click", (e)=>{
        populate.addText(targetDescription, card)
    })
  }

  populate.addText = function(targetDescription, card){
      var input = document.getElementById("inputText");
        targetDescription.innerHTML = input.value
        input.value= ""
        input.blur();
        input.setAttribute("disabled", true)
        populate.colorReset(card)
  }
  // Now that the DOM is loaded, establish all the event listeners needed
   // CarLot.activateEvents(populatePage);
   CarLot.loadInventory(populate.populatePage);
   return populate;
}) (CarLot || {})

