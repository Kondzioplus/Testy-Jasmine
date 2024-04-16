
var app = require('../app/app');
//unkiamy używania LOGIKI w testach!!!
/*describe('Check String', function(){
  it('should return string length when valid string is given', function(){//powinno być zaliczone jeśliw tablicy są 3 elementy(ARANŻACJA).
    var string = 'kursy';
    if (!(typeof string === 'string')){
        expect(checkString(string)).toBeFalsy();
    } else {
        expect(checkString(string)).toEqual(5);
    }
    
  });
});*/

describe('Check String', function(){
    it('should return string length when valid string is given', function(){
        var string = 'kursy';
        expect(checkString(string)).toEqual(5);
    });
    it('should return false length when invalid string is given', function(){
        var string = {name: 'kursy'};
        expect(checkString(string)).toBeFalsy();
    });
})