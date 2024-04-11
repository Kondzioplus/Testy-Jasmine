// importowanie funkcji
var app = require('../app/app');

// tworzymy pierwszy test

describe('DialCodeFinder', function(){
    it('should return 48 when Poland is given', function(){
        expect(findPrefixCode('Poland')).toEqual(48);
    });
    it('should return Unknow country when Unknow is given', function(){
        expect(findPrefixCode('Unknow')).toEqual('Unknow country');
    });
});