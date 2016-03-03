/**
 * Created by Lannister on 2014/4/22.
 */
routeApp.controller('RouteListCtl',function($scope) {
});
routeApp.controller('RouteDetailCtl',function($scope, $routeParams) {
    $scope.id = $routeParams.id;
});