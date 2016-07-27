var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function () {
         inventory.push(JSON.parse(inventoryLoader.responseText))
         console.log(data)
         callback(inventory);
      });
      inventoryLoader.send();
    }
  };

})(CarLot || {});