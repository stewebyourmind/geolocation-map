'use strict';

angular.module('geolocationMapApp')
.factory("firebaseref", ['$firebaseArray', 'FBURL', '$log',  function($firebaseArray, FBURL, $log) {
    var ref = new Firebase(FBURL);

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
]);


$firebaseObject, FBURL, $log