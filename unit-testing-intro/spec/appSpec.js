// importowanie funkcji
var app = require('../app/app');

// tworzymy pierwszy test

describe('Value Checker', function(){
    it('should return OK when value is 1', function(){
        expect(checkValue('1')).toEqual('OK');
    });
    it('should return OK when value is 999', function(){
        expect(checkValue('999')).toEqual('OK');
    });
    it('should return INVALID when value is 0', function(){
        expect(checkValue('0')).toEqual('INVALID');
    });
    it('should return INVALID when value is 1000', function(){
        expect(checkValue('1000')).toEqual('INVALID');
    });
    it('should return OK when value is 324', function(){
        expect(checkValue('324')).toEqual('OK');
    });
});