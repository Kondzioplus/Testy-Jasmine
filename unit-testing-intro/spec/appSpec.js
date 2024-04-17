// TESTY NIEZALICZONE !!!!!!!!!!!!!!!!!
var app = require('../app/app');

describe('Create App', function(){

    it('should call saveApp() when name is at least 5 chars long', function() {
        
        var app = new App();
        spyOn(app, 'saveApp');
        app.createApp('To Do List');
        expect(app.saveApp).toHaveBeenCalled();
        });
    it('should NOT call saveApp() when name is 3 chars long', function() {
        
        var app = new App();
        spyOn(app, 'saveApp');
        app.createApp('ABC');
        expect(app.saveApp).not.toHaveBeenCalled();
        });
    });