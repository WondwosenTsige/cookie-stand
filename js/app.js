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

function Store (storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesPurchasedPerCustomer) {
  
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPurchasedPerCustomer = avgCookiesPurchasedPerCustomer;
  this.totalCookiesPerDay = [];
  this.cookiesPerHour = 0;
  this.customerPerHour =[];
  Store.allStoreInfo.push(this);
  this.getCookiesPerHour();
  
};

Store.prototype.getCustomerPerHour = function () {


    for (var i = 0; i < operationHours.length; i++) {
        var randomNumberOfCustomers = getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
        this.customerPerHour.push(randomNumberOfCustomers);


  };
    Store.prototype.getCookiesPerHour =function () {

        for (var i = 0; i < operationHours.length; i++) {

            for (var i = 0; i < operationHours.length; i++) {
                var cookiesSoldEachHour = this.customerPerHour[i] * this.avgCookiesPurchasedPerCustomer;
                this.cookiesPerHour.push(Math.round(cookiesSoldEachHour));                              
                this.totalCookiesPerDay = this.totalCookiesPerDay + Math.round (cookiesSoldEachHour); 
            
            /*var cookiesSoldEachHour = this.customerPerHour[i] * this.avgCookiesSoldPerCustomer;
            this.cookiesPerHour.push(Math.round(cookiesSoldEachHour));
            this.cookiesPerHour+=cookiesSoldEachHour;                              
            this.totalCookiesPerDay = this.totalCookiesPerDay + Math.round (cookiesSoldEachHour); */
        }

}

var renderHeaderRow = function() {
var tableRowElement = document.createElement('tr');
var tableHeaderElement = document.createElement('th');
tableHeaderElement.textContent ='Location';
tableRowElement.appendChild(tableHeaderElement);

for (var i=0; i<operationHours.length; i++){
    var tabledataElement = document.createElement('td');
    tabledataElement.textContent = operationHours[i];
    tableRowElement.appendChild(tabledataElement);
}

var tabledataElement = document.createElement('td');
tabledataElement.textContent = 'Total';
tableRowElement.appendChild(tabledataElement);
tableContent.appendChild(tableRowElement);

};

renderHeaderRow();


Store.prototype.getcookiesPerHr = function (){
    var tableRowElement = document.createElement('tr');
    var tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = this.storeLocation;
    tableRowElement.appendChild(tableHeaderElement)
    
    for (var i = 0 ; i < this.totalCookiesPerDay.length; i++){
    var tabledataElement = document.createElement('td')
      tabledataElement.textContent = this.totalCookiesPerDay[i];
      tableRowElement.appendChild(tabledataElement);
    }
   var tabledataElement = document.createElement('td');
      tabledataElement.textContent = this.cookiesPerHr;
      tableRowElement.appendChild(tabledataElement);
      Store.tabledata.appendChild(tableRowElement);

   };

var footerRow = function () {
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
  };
}
}

console.log(Store.allStoreInfo);

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

