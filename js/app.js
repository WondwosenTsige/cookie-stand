'use strict'

var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min +1) +min);
}
var seattle = {

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

    getRandomCookies: function () {

        for (var i = 0; i < operationHours.length; i++) {
            var cookies = this.customerPerHour[i] * this.avgCookieSale;
            this.cookiesPerHour.push(Math.round(cookies));


            this.totalCookiesPerDay = this.totalCookiesPerDay + Math.round (cookies);          // The short form an be -> this.totalCookiesPerDay+=cookies;
        }
    },

    render: function () {

        var seattleStore = document.getElementById('Seattle');
        var ulSeattle = document.createElement('ul');
        ulSeattle.textContent = this.city;
        seattleStore.appendChild(ulSeattle);

        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            var createList = document.createElement('li');
            createList.textContent = `total:${this.cookiesPerHour[i]} cookies.`;
            seattleStore.appendChild(createList);
        }
    }
}

seattle.getCustomerPerHour();
seattle.getRandomCookies();
seattle.render();