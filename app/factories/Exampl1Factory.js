/* Factory - exampl1Factory */
/*
 * @module  exampl1Factory
 * @author  Esteban López A
 * @param   
 * @created 08/09/2013
*/
app.factory('exampl1Factory', function () {
    var factory = {};
    var list = [
       { id: 1, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916'},
	    { id: 2, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916'},
	    { id: 3, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916'},
	    { id: 4, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916'},
	    { id: 5, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916'},
	    { id: 6, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916'},
	    { id: 7, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916' },
	    { id: 8, name: 'Esteban Lopez', ocupation: 'Developer', location: 'San Jose, Costa Rica', nationality: 'Colombian', 
		email: 'digitalparadox.dev@gmail.com', phone : '(+506) 70112916'}
    ];
   
    factory.getList = function () {     
        return list;
    };
    factory.postList = function (instance) {
        list.push(instance);
    };
    factory.listGetNextId = function () {
        return list.length + 1;  
    };

    return factory;

});