'use strict';

angular.module('geolocationMapApp')
.factory("firebasewrap", ['$firebaseArray', '$firebaseObject', 'FBURL', '$log',  function($firebaseArray, $firebaseObject, FBURL, $log) {
    var ref = new Firebase(FBURL);

    // this uses AngularFire to create the synchronized array
    //return $firebaseArray(ref);

    return {
    	getArray : function(){
    		return $firebaseArray(ref);
    	},
    	getObject : function(){
    		return $firebaseObject(ref);
    	}    	
    };
  }
]);
