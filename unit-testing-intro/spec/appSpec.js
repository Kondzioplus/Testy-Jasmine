// importowanie funkcji
var app = require('../app/app');



describe('String Checker', function(){
    //pierwszy scenariusz - jeśli podano string o długosci 5 bedzie zaliczony.
    it('should return 5 when string kursy is given', function(){
        expect(checkString('kursy')).toEqual(5);
    });
    //drugi scenariusz - jeśli podano inna wartość niż STRING to wyskoczy błąd.
    it('should throw error when invalid string is given', function(){
        expect(function(){checkString({name: 'kursy'});}).toThrow();
    });//musze objąć anonimową funkcją zeby nie wyskakiwał błąd przed ukończeniem testu
});