'use strict';

/**
 * @ngdoc function
 * @name geolocationMapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geolocationMapApp
 */
angular.module('geolocationMapApp')
  .controller('AboutCtrl', function ($log, firebasewrap) {
  	var AboutCtrl = this;

	// download the data into a local object
	AboutCtrl.data = firebasewrap.getArray();
	$log.debug("lunghezza: " , AboutCtrl.data.length);
	$log.debug("tutto: ", AboutCtrl.data);
	AboutCtrl.map = { center: { latitude: 45, longitude: -73 }, zoom: 15 };
	


  });
