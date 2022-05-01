    var myApp = angular.module('contact', ['ngRoute']);
    myApp.constant('contact',{
        url: 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts'
    })
    myApp.config(function ($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/contactslist.html',
            controller: 'ContactListController'                    
        })
        .when('/contactlist', {
            templateUrl: 'views/contactslist.html',
            controller: 'ContactListController'                    
        })
        .otherwise({
            redirectTo: "/"
        })            
    });