// BRAK WYNIKU TESTU!!!
var request = require('request');
getLatestRates = function(callback){
    request('http://data.fixer.io/api/latest?access_key=553f84fa8403997535523336f5567ae6&format=1', function(error, response, body){
        var ratesList = JSON.parse(body);
        return callback(ratesList);
    });
}; 