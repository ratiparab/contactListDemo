'use strict';
myApp.controller('ContactListController', function($scope, $http, contact) {
  $scope.contacts = [];
  $scope.showContact = function (){ //To show contact list from api
    $http.get(contact.url).then(function(response){
      $scope.contacts = response.data;
    },
    function(e){
      console.error(e);
    });
  }

  $scope.showContact();

//To save the changes in contact from list and to add new contacts
  $scope.saveRecord = function () { 
    $(".error").hide(); 
    if ($scope.newContact.id == null) {     
      $scope.newContact.id = $scope.newContact.id++;     
      $scope.contacts.push($scope.newContact);     
    } else {     
      for (var i in $scope.contacts) {     
        if ($scope.contacts[i].id == $scope.newContact.id) {     
          $scope.contacts[i] = $scope.newContact;     
        }     
      }  
    }     
    $scope.newContact = {};     
  }

  $scope.delete = function (id) { //To delete contact from list
    for (var i in $scope.contacts) {      
      if ($scope.contacts[i].id == id) {      
        $scope.contacts.splice(i, 1);      
        $scope.newContact = {};      
      }      
    }      
  }
       
  $scope.edit = function (id) {   //To edit contact from list
    for (var i in $scope.contacts) {    
      if ($scope.contacts[i].id == id) {    
        $scope.newContact = angular.copy($scope.contacts[i]);
      }    
    }
  }

});