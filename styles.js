var CarLot = (function createCar(populate) {


populate.colorReset = function(e){
   e.target.offsetParent.style.borderWidth ="3px"
   e.target.offsetParent.style.backgroundColor ="white"
}

populate.borderChange= function(e){
  e.target.offsetParent.style.borderWidth ="10px"
  e.target.offsetParent.style.backgroundColor = "#fff8dc"
}
return populate
}) (CarLot || {})