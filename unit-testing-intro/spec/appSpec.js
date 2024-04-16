
var app = require('../app/app');
//SETUP beforeEach wykonujemy przed każdym testem (znajduja się w nim nasze dane).
describe('App', function(){
    var toDoList;

    beforeEach(function(){
        toDoList = new app(1, 'ToDoList');
        //console.log('beforeEach()');
    });
    it('getName() method should return app name when called on App instance', function() {
        expect(toDoList.getName()).toEqual('ToDoList');
    });
    it('getID() method should return app ID when called on App instance', function() {
        expect(toDoList.getID()).toEqual(1);
    });
});