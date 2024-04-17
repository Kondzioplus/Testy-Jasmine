// TESTY NIEZALICZONE !!!!!!!!!!!!!!!!!
var app = require('../app/app');
var sinon = require('sinon');

describe('Has Valid Name', function(){

    it('should return true when app name is at least 5 chars long', function() {
        var app = new App();
        spyOn(app,"getName").and.callFake(function(){
            return 'To Do List';//STUB
        });
        var result = hasValidName(getName());
        expect(result).toBeTruthy();
    });
    it('should return false when app name is 3 chars long', function() {
        var app = new App();
        spyOn(app,"getName").and.callFake(function(){
            return 'Int';//STUB
        });
        var result = hasValidName(getName());
        expect(result).toBeFalsy();
    });
});