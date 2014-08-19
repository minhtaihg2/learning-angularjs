/**
 * Created by taipham.it on 8/18/2014.
 */


'use strict'

angular.module('myApp')
    .controller('DetailCtrl', ['$scope', '$stateParams', 'getData', function ($scope, $stateParams, getData) {
        var _id = $stateParams.id;
        $scope.showEdit = false;
        getData.getDataId('Products', _id).then(function (result) {
            console.log('Data :', _id, result);
            $scope.item = result;
        });


        $scope.updateItem = function (item) {
            item.update(function (err, result) {
                if (!err) {
                    console.log('update conplate', true);
                } else {
                    console.log('err update :', false);
                }
            })
        };

    }])
