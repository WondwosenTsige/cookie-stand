'use strict';

store.operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

store.tableContent = document.getElementById("Store-list-table");


store.allStoreInfo = [];
store.totalsales = 0;

function store (storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesSoldPerCustomer) {
  
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.totalCookiesPerDay = [];
  this.cookiesPerHr = 0;
  this.allStoreInfo.push(this);

  
}


