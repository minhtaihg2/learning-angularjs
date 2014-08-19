/**
 * Created by taipham.it on 8/19/2014.
 */

'use strict'

angular.module('myApp')
    .factory('getData', ['ServiceResource', 'baseModel', '$q', function (ServiceResource, baseModel, $q) {

        var fetData = {
            getDataTable: function (tableName) {
                var defer = $q.defer();
                ServiceResource.get({table: tableName}, function (data) {
                    defer.resolve(data);
                }, function (err) {
                    defer.reject(err)
                })
                return defer.promise;
            },
            getDataId: function (tableName, id) {
                var defer = $q.defer();
                ServiceResource.get({table: tableName, id: id}, function (result) {
                    var data = new baseModel(tableName, result.data);
                    defer.resolve(data);
                }, function (err) {
                    defer.reject(err);
                })
                return defer.promise;
            }
        }
        return fetData;
    }])
