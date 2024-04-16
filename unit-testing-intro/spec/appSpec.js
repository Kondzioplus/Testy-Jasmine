
var app = require('../app/app');
//musi wypaść 5 z generatora żeby zaliczyło test.
describe('Random number generator', function(){
    it('should return 5 when called', function(){
        expect(generateRandInt()).toEqual(5);
    });
});