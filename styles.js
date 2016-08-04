var CarLot = (function createCar(populate) {


populate.colorReset = function(){
  var cards = document.querySelectorAll(".carCard");
  cards.forEach((card)=>{
    card.style.borderWidth ="3px"
    card.style.backgroundColor ="white"
  })
}

populate.borderChange= function(e){
  console.log(e)
  e.currentTarget.style.borderWidth ="10px"
  e.currentTarget.style.backgroundColor = "#fff8dc"
}
return populate
}) (CarLot || {})