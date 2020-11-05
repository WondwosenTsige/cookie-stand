'use strict';

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min +1) +min);
}

store.operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

store.tableContent = document.getElementById("Store-list-table");


store.allStoreInfo = [];

function store (storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesSoldPerCustomer) {
  
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHr = [];
  store.allStoreInfo.push(this);

  
};

store.prototype.getCustomerPerHour = function () {


    for (var i = 0; i < operationHours.length; i++) {
        var randomNumberOfCustomers = getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
        this.customerPerHour.push(randomNumberOfCustomers);

    }

}

