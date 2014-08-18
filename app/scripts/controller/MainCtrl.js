/**
 * Created by taipham.it on 8/18/2014.
 */

'use strict'

angular.module('myApp')
    .controller('MainCtrl', ['$scope','$http','appConfig', function ($scope,$http,appConfig) {
        $http.get(appConfig.apiHost+'/api/Products').success(function(data){
           $scope.listProducts = data.data;
            console.log('load ',true);
        }).error(function(err){
            console.log('err : ',err);
        })
    }])
