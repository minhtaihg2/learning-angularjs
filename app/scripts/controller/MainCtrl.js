/**
 * Created by taipham.it on 8/18/2014.
 */

'use strict'

angular.module('myApp')
    .controller('MainCtrl', ['$scope', '$http', 'appConfig', 'ServiceResource', 'getData', function ($scope, $http, appConfig, ServiceResource, getData) {

        getData.getDataTable('Products').then(function (result) {
            console.log('result :',result);
            $scope.listProducts = result.data;
        })
    }])
