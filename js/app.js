'use strict';

function getRandomNumber(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}


var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tableContent = document.getElementById("Store-list-table");
var allStoreInfo = [];
var totalSales = 0;

function Store(storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesPurchasedPerCustomer) {

  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPurchasedPerCustomer = avgCookiesPurchasedPerCustomer;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHour = [];
  this.customerPerHour = [];
  allStoreInfo.push(this);


};

Store.prototype.getCustomerPerHour = function () {


  for (var i = 0; i < operationHours.length; i++) {
    var randomNumberOfCustomers = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);
    this.customerPerHour.push(randomNumberOfCustomers);


  };
}

Store.prototype.getCookiesPerHour = function () {

  for (var i = 0; i < this.customerPerHour.length; i++) {
    var cookiesSoldEachHour = this.customerPerHour[i] * this.avgCookiesPurchasedPerCustomer;
    this.cookiesPerHour.push(Math.round(cookiesSoldEachHour));

    this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesSoldEachHour;   // Math.round (cookiesSoldEachHour);        
  }

}

Store.prototype.render = function () {

  tableContent = document.getElementById('Store-list-table')

  var tableRowElement = document.createElement('tr');
  tableContent.appendChild(tableRowElement);

  tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.storeLocation;
  tableRowElement.appendChild(tableDataElement);

  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesPerHour[i];
    tableRowElement.appendChild(tableDataElement);
  }

  tableDataElement = document.createElement('td');
  tableDataElement.textContent = Math.round(this.totalCookiesPerDay);
  tableRowElement.appendChild(tableDataElement);

};

function generateHeaderRow() {
  tableContent = document.getElementById('Store-list-table');

  var tableRowElement = document.createElement('tr');
  tableContent.appendChild(tableRowElement);

  var tableHeaderElement = document.createElement('th');
  //tableHeaderElement.textContent = 'Location';
  tableRowElement.appendChild(tableHeaderElement);

  for (var i = 0; i < operationHours.length; i++) {
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = operationHours[i];
    tableRowElement.appendChild(tableHeaderElement);
  }

  var tableDataElement = document.createElement('th');
  tableDataElement.textContent = 'Total';
  tableRowElement.appendChild(tableDataElement);

  new Store('Seattle', 23, 65, 6.3);
  new Store('Tokyo', 3, 24, 1.2);
  new Store('Dubai', 11, 38, 3.7);
  new Store('Paris', 20, 38, 2.3);
  new Store('Lima', 2, 16, 4.6);

}
function generateFooterRow() {

  //tableContent = document.getElementById('Store-list-table');
  var tableRowElement = document.createElement('tr');
  tableContent.appendChild(tableRowElement);

  var tableDataElement = document.createElement('td');
  tableDataElement.textContent = 'Totals';
  tableRowElement.appendChild(tableDataElement);

  for (var i = 0; i < operationHours.length; i++) {

    var hourlyTotal = 0;

    for (var j = 0; j < allStoreInfo.length; j++) {
      hourlyTotal += allStoreInfo[j].cookiesPerHour[i]; //..............
      totalSales += allStoreInfo[j].cookiesPerHour[i];
    }

    tableDataElement = document.createElement('td');
    tableDataElement.textContent = hourlyTotal;
    tableRowElement.appendChild(tableDataElement);

    

  }

  tableDataElement = document.createElement('td');
  tableDataElement.textContent = totalSales;
  tableRowElement.appendChild(tableDataElement);
}

generateHeaderRow();



for (var i = 0; i < allStoreInfo.length; i++) {
  allStoreInfo[i].getCustomerPerHour();
  allStoreInfo[i].getCookiesPerHour();
  allStoreInfo[i].render();


}
generateFooterRow();

var addStore = document.getElementById('add-a-store');
addStore.addEventListener('submit',handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  console.log('clicked');

  var minCust = event.target.mincustomer.value;
  var maxCust = event.target.maxcustomer.value;
  var avgCookie = event.target.avgcookiepercus.value;
  var location = event.target.location.value;

  /*if (minCust < 0){
    return alert('It has to be a postive number');
  }
  if (maxCust < 0){
    return alert('It has to be a postive number');
  }
  if (avgCookie < 0){
    return alert('It has to be a postive number');
  }
  if (location === Number ){
    return alert('It has to be a string');
  }
  if(minCust > maxCust){
    return alert('minimum must be less than maximum');
  }
  if(maxCust < minCust){
    return alert('maximum must be greater than maximum');
  }*/
  

  new Store(location, minCust, maxCust, avgCookie);
  generateFooterRow();

}





