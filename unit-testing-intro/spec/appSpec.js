// importowanie funkcji
var app = require('../app/app');

// tworzymy pierwszy test

describe('Math', function(){
    it('should return 10 when 5 and 5 are given', function(){
        expect(sum(5,5)).toEqual(10);
    });
    it('should return true', function(){
        expect(returnTrue()).toBeTruthy();
    });
    it('should return undefined', function(){
        expect(returnUndefined()).toBeUndefined();
    });
    
});