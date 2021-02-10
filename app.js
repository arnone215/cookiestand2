'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];

function StoreLocation(minBoughtPerHour, maxBoughtPerHour, avgSale, locationName) {
  this.minBoughtPerHour = minBoughtPerHour;
  this.maxBoughtPerHour = maxBoughtPerHour;
  this.avgSale = avgSale;
  this.locationName = locationName;
  this.saleHour = [];
  this.amountCookies = 0;
  allStores.push(this);
}


StoreLocation.prototype.cookieCustomer = function () {
  return Math.floor(Math.random() * (this.maxBoughtPerHour - this.minBoughtPerHour + 1) + this.minBoughtPerHour);
};

StoreLocation.prototype.calcSaleHour = function () {
  var saleHour = Math.ceil(this.cookieCustomer() * this.avgSale);
  return saleHour;
};

StoreLocation.prototype.populateSales = function () {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var cookiesSold = this.calcSaleHour();
    this.saleHour.push(cookiesSold);
    this.amountCookies += cookiesSold;
  }
};
StoreLocation.prototype.render = function () {

  var parentElement = document.getElementsByTagName('table')[0];
  var row = document.createElement('tr');
  var thead = document.createElement('th');
  var outPut = this.locationName;
  thead.textContent = outPut;
  row.appendChild(thead);
  parentElement.appendChild(row);

  for (var i = 0; i < hoursOfOperation.length; i++) {
    var tdata = document.createElement('td');
    tdata.textContent = this.saleHour[i];
    row.appendChild(tdata);
  }
  var tdataone = document.createElement('th');
  tdataone.textContent = this.amountCookies;
  row.appendChild(tdataone);

};
var parentElement = document.getElementsByTagName('table')[0];
var row = document.createElement('tr');
var thead = document.createElement('th');
var outPut = 'Salmon Cookie Sales';
thead.textContent = outPut;
row.appendChild(thead);
parentElement.appendChild(row);

for (var i = 0; i < hoursOfOperation.length; i++) {
  var tdata = document.createElement('th');
  tdata.textContent = this.hoursOfOperation[i];
  row.appendChild(tdata);
}
var totalSale = document.createElement('th');
totalSale.textContent = 'Total sold';
row.appendChild(totalSale);

function renderFooter() {
  var tfoot = document.createElement('tfoot');
  var totals = document.createElement('th');
  totals.textContent = 'totals';
  tfoot.appendChild(totals);
  var grandTotal = 0;

  for (var i = 0; i < hoursOfOperation.length; i++) {
    var totalThisHour = 0;
    for (var j = 0; j < allStores.length; j++) {
      var storeTotal = allStores[j].saleHour[i];
      totalThisHour = totalThisHour + storeTotal;
    }
    var eachHour = document.createElement('th');
    eachHour.textContent = totalThisHour;
    tfoot.appendChild(eachHour);
    grandTotal = grandTotal + totalThisHour;
  }
  var absoluteTotal = document.createElement('th');
  absoluteTotal.textContent = grandTotal;
  tfoot.appendChild(absoluteTotal);
  parentElement.appendChild(tfoot);

}

var seattle = new StoreLocation(23, 65, 6.3, 'seattle');
seattle.populateSales();
seattle.render();
var tokyo = new StoreLocation(3, 24, 1.2, 'tokyo');
tokyo.populateSales();
tokyo.render();
var dubai = new StoreLocation(11, 38, 3.7, 'dubai');
dubai.populateSales();
dubai.render();
var paris = new StoreLocation(20, 38, 2.3, 'paris');
paris.populateSales();
paris.render();
var lima = new StoreLocation(2, 16, 4.6, 'lima');
lima.populateSales();
lima.render();




renderFooter();
