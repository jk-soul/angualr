/**
 * Created by Lannister on 2015/6/12.
 */
angular.module('sod',['angularFileUpload'])
.controller('FileCtrl',['$scope','$upload',function ($scope,$upload) {

        $scope.onFileSelect = function ($files,item) {
            var file = $files[0];
            $scope.upload = $upload.upload({
                url: '/libs/control/system/file.con.php?q=add',
                method: 'POST',
                file: file,
                sendFieldsAs: 'form'
            }).progress(function (evt) {
                console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function (data, status, headers, config) {
                item = data[0];
            }).error(function (res) {
                console.log(res)
            })
        };

        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });

        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    $upload.upload({
                        url: 'upload/url',
                        fields: {'username': $scope.username},
                        file: file
                    }).progress(function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                    }).success(function (data, status, headers, config) {
                        console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    });
                }
            }
        };




    }])