var operationHours= ['6am','7am','8am','9am','10am','11am','12pm','1pm', '2pm', '3pm','4pm','5pm','6pm', '7pm'];
var SeattleStore=document.getElementById('Seattle');
var Seattle= {
    minCustomerPerHour: 23,
    maxCustomerPerHour: 65,
    avgCookieSale: 6.3,

    
    cookiesPerHour: [],
    totalCookiesPerDay: 0,

   
   getCustomerPerHour: function (){

   
    /* function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);                               //The maximum is inclusive and the minimum is inclusive 
        max = Math.floor(max);*/
    return Math.floor(Math.random()*(this.maxCustomerPerHour-this.minCustomerPerHour +1) +this.minCustomerPerHour); 

    },

    getRandomCookies: function(){
        for (var i=0; i<operationHours.length; i++){
        var cookies = this.getCustomerPerHour() * this.avgCookieSale
        this.cookiesPerHour.push(Math.round(cookies));
    }
    }
}
