// importowanie funkcji
var app = require('../app/app');

// tworzymy pierwszy test

describe('Math', function(){
    //sprawdza sumowanie
    it('should return 10 when 5 and 5 are given', function(){
        expect(sum(5,5)).toEqual(10);
    });
    //sprawdza zwrot TRUE
    it('should return true', function(){
        expect(returnTrue()).toBeTruthy();
    });
    //sprawdza zwrot UNDEFINED
    it('should return undefined', function(){
        expect(returnUndefined()).toBeUndefined();// "not" przed ".toBe" jest zaprzeczeniem.
    });
    //sprawdza identyczność
    it('should compare two objects', function(){
        var a = {};
        var b = {};
        expect(a).toEqual(b);//używając toBe nie zaliczy testu
    });
    
});