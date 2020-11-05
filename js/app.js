'use strict';


function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min +1) +min);
}

var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var tableContent = document.getElementById("Store-list-table");


Store.allStoreInfo = [];

Store.totalSales = 0;

function Store (storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesSoldPerCustomer) {
  
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHour = [];
  this.customerPerHour =[];
  Store.allStoreInfo.push(this);
  this.getCookiesPerHour();  
  
};

Store.prototype.getCustomerPerHour = function () {


    for (var i = 0; i < operationHours.length; i++) {
        var randomNumberOfCustomers = getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
        this.customerPerHour.push(randomNumberOfCustomers);

    };
}
    Store.prototype.getCookiesPerHour =function () {

        for (var i = 0; i < operationHours.length; i++) {
            var cookiesSoldEachHour = this.customerPerHour[i] * this.avgCookiesSoldPerCustomer;
            this.cookiesPerHour.push(Math.round(cookiesSoldEachHour));                              
            this.totalCookiesPerDay = this.totalCookiesPerDay + Math.round (cookiesSoldEachHour); 
        }

}

var renderRowHeader = function() {
var tableRowElement = document.createElement('tr');
var tableHeaderElement = document.createElement('th');
tableRowElement.appendChild(tableHeaderElement);

for (var i=0; i<operationHours.length; i++){
    var tabledataElement = document.createElement('td');
    tabledataElement.textContent = operationHours[i];
    tableRowElement.appendChild(tabledataElement);
}

var tdElm = document.createElement('td');
tdElm.textContent = 'Total';
tableRowElement.appendChild(tdElm);
tableContent.appendChild(tableRowElement);

};


renderRowHeader();

/*var seattle = new Store('Seattle', 23, 65, 6.3);
seattle.getCustomerPerHour();
seattle.getCookiesPerHour();

var tokyo = new Store('Tokyo', 28, 71, 4.3);
tokyo.getCustomerPerHour();
tokyo.getCookiesPerHour();*/

