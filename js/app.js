'use strict';

function getRandomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min +1) +min);

}


var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tableContent = document.getElementById("Store-list-table");
var allStoreInfo = [];

function Store (storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesPurchasedPerCustomer) {
  
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPurchasedPerCustomer = avgCookiesPurchasedPerCustomer;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHour = [];
  this.customerPerHour =[];
  allStoreInfo.push(this);

  
};

Store.prototype.getCustomerPerHour = function () {


  for (var i = 0; i < operationHours.length; i++) {
      var randomNumberOfCustomers = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);
      this.customerPerHour.push(randomNumberOfCustomers);


  };
}
  
  Store.prototype.getCookiesPerHour =function () {

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

var tabledataElement = document.createElement('td');
tabledataElement.textContent = this.storeLocation;
tableRowElement.appendChild(tabledataElement);

for (var i=0; i<this.cookiesPerHour.length; i++){
    var tabledataElement = document.createElement('td');
    tabledataElement.textContent = this.cookiesPerHour[i];
    tableRowElement.appendChild(tabledataElement);
}

tabledataElement = document.createElement('td');
tabledataElement.textContent = Math.round(this.totalCookiesPerDay);
tableRowElement.appendChild(tabledataElement);

};

function generateHeaderRow (){
tableContent = document.getElementById('Store-list-table');

var tableRowElement = document.createElement('tr');
tableContent.appendChild(tableRowElement);

var tableHeaderElement = document.createElement('th');
tableHeaderElement.textContent = 'Location';
tableRowElement.appendChild(tableHeaderElement);

for (var i=0; i<operationHours.length; i++);{
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = operationHours[i];
  tableRowElement.appendChild(tableHeaderElement);
}

}


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

for (var i=0; i<allStoreInfo.length; i++){
  allStoreInfo[i].getCustomerPerHour();
  allStoreInfo[i].getCookiesPerHour();
  allStoreInfo[i].render();


}
/*var footerRow = function () {
    var tableRowElement = document.createElement('tr');
    var tabledataElement = document.createElement('td');
    tabledataElement.textContent = 'Total per hour: ' ;
    tableRowElement.appendChild(tabledataElement);

    for (var i = 0; i<operationHours.length; i++) {
      
      var hourlyTotal = 0;
      var tableData = document.createElement('td');
      
      for (var j = 0; j < Store.allStoreInfo.length; j++){
        hourlyTotal +=  Store.allStoreInfo[j].totalCookiesPerDay[i];

      }
        tableData.textContent = hourlyTotal;
        tableRowElement.appendChild(tableData);
    } 

    var tabledataElement = document.createElement('td')
    tabledataElement.textContent = Store.totalSales;
    tableRowElement.appendChild(tabledataElement);
  Store.tableContent.appendChild(tableRowElement);
  };*/






