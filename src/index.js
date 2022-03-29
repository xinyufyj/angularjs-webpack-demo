import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import appTpl from './tpl/app.html'

angular
.module('app', [uiRouter])
.config(['$stateProvider', function($stateProvider){
  $stateProvider.state('app', {
    url: '',
    name: 'app',
    views: {
      "comps@app": {
        templateUrl: require('./tpl/comps.lazy.html')
      },
      "": {
        template: appTpl,
        controller: ['$scope', function($scope) {
          $scope.loadImage = function(image) {
            return require('./assets/img/' + image);
          };
          $scope.count = 0
          $scope.addCount = function() {
            $scope.count++
          }
        }]
      }
    },
  })
}])



