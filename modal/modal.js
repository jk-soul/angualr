/**
 * Created by Lannister on 15-3-31.
 */
var myApp = angular.module('myApp', [
    'ngGrid',
    'ui.bootstrap'
]);


angular.module('myApp').controller('MyCtrl', ['$scope', function ($scope) {
    $scope.doc = {};
    $scope.doc.myData = [
        {name: "Moroni", age: 50, height: 176},
        {name: "Tiancum", age: 43, height: 175},
        {name: "Jacob", age: 27, height: 173},
        {name: "Nephi", age: 29, height: 175},
        {name: "Enos", age: 34, height: 171}
    ];
    $scope.mySelections = [];
    $scope.gridOptions = {
        data: 'doc.myData',
        columnDefs: [
            {field: 'name', displayName: 'Name', pinned: true},
            {
                field: 'age',
                displayName: 'Age'
            },
            {field: 'height', displayName: 'Height'}
        ],
        enablePinning: true,//是否可移动
        enableCellSelection: true,//标记整个一行
        showGroupPanel: true,//标题头，可拖动分组
        selectedItems: $scope.mySelections,//记录选中的一行
        multiSelect: false
    };
}]);