//Wzorzec AAA.
//Aranżacja - przygotowanie wartości wejsciowych.
//Działanie(Action)- uruchomienie funkcji.
//Asercja - sprawdzamy czy wynik jest zgodny z oczekiwaniami.



// importowanie funkcji
var app = require('../app/app');

describe('Array Length', function(){
  it('should return 3 when array with 3 elements is given', function(){//powinno być zaliczone jeśliw tablicy są 3 elementy(ARANŻACJA).
    var arr = [23,55,44];
    expect(getArrLength(arr)).toEqual(3);//spodziewanie się 3 elementów.(ASERCJA)
  });
});