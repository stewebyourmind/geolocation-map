'use strict';

/**
 * @ngdoc function
 * @name geolocationMapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geolocationMapApp
 */
angular.module('geolocationMapApp')
  .controller('AboutCtrl', function ($firebaseObject, FBURL, $log, $timeout) {
  	var AboutCtrl = this;
    /*AboutCtrl.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
*/

	var ref = new Firebase(FBURL);
	// download the data into a local object
	AboutCtrl.data = $firebaseObject(ref);


	AboutCtrl.map = { center: { latitude: 45, longitude: -73 }, zoom: 15 };
	
	$timeout(function(){
		$log.debug("Data length ["+AboutCtrl.data.length+"] - last item: ", AboutCtrl.data[AboutCtrl.data.length-1]);
	}, 5000);
	
  });
