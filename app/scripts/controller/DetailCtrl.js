/**
 * Created by taipham.it on 8/18/2014.
 */


'use strict'

angular.module('myApp')
    .controller('DetailCtrl', ['$scope', '$stateParams', 'getData','dataStorage', function ($scope, $stateParams, getData,dataStorage) {
        var _id = $stateParams.id;
        $scope.showEdit = false;
        if (dataStorage.Products.size() > 0) {
            $scope.item =  dataStorage.Products.get(_id);
        }
        else{
            getData.getDataId('Products', _id).then(function (result) {
                console.log('Data :', _id, result);
                $scope.item = result;
            });

        }

        $scope.quickEdit = false;

        $scope.updateItem = function (item) {

            var bttn = document.getElementById('notification-trigger');
            // simulate loading (for demo purposes only)
            classie.add(bttn, 'active');
            item.update(function (err, result) {
                if (!err) {
                    classie.remove(bttn, 'active');

                    // create the notification
                    var notification = new NotificationFx({
                        wrapper: document.body,
                        message: '<div class="ns-thumb"><img src="../images/user1.jpg"/></div><div class="ns-content"><p><a href="#">Thông báo</a> đăng sản phẩm thành công.</p></div>',
                        layout: 'other',
                        ttl: 4000,
                        effect: 'thumbslider',
                        type: 'notice', // notice, warning, error or success
                        onClose: function () {
                            bttn.disabled = false;
                        }
                    });

                    notification.show();
                    console.log('update conplate', true);
                } else {
                    console.log('err update :', false);
                }
            })
        };

    }])
