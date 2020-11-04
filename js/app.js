'use strict'

var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentTable = document.getElementById('thead');
function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min +1) +min);
}

var seattleStore = {

    city: 'Seattle',                    // Object literals for seattle
    minCustomerPerHour: 23,
    maxCustomerPerHour: 65,
    avgCookieSale: 6.3,

    customerPerHour: [],
    cookiesPerHour: [],
    totalCookiesPerDay: 0,


    getCustomerPerHour: function () {


        for (var i = 0; i < operationHours.length; i++) {
            var randomNumberOfCustomers = getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
            this.customerPerHour.push(randomNumberOfCustomers);

        }

    },

    getCookiesPerHour: function () {

        for (var i = 0; i < operationHours.length; i++) {
            var cookiesSoldEachHour = this.customerPerHour[i] * this.avgCookieSale;
            this.cookiesPerHour.push(Math.round(cookiesSoldEachHour));                              // The Math.round is just doing number rounding


            this.totalCookiesPerDay = this.totalCookiesPerDay + Math.round (cookiesSoldEachHour);  //equivalent-> this.totalCookiesPerDay +=cookies;
        }
    },

    render: function () {

        var seattleInfo = document.getElementById('Seattle');
        var createUl = document.createElement('ul');                          // Creating <ul>
        createUl.textContent = this.city;                                     // filling the above created list with content. in this case 'Seattle'
        seattleInfo.appendChild(createUl);                                    // appending(add as an attachment) the above content it to the DOM

        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            var createLi = document.createElement('li');
            createLi.textContent = `${operationHours[i]} :${this.cookiesPerHour[i]} cookies.`;  //concatnation using template literal (` and $ sign)
            seattleInfo.appendChild(createLi);
        }
        
    }

    
}


seattleStore.getCustomerPerHour();
seattleStore.getCookiesPerHour();
seattleStore.render();