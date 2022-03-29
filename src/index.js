import "angular";
import uiRouter from "@uirouter/angularjs";

angular
.module('app', [uiRouter])

function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('./services/', true, /\.js$/));

import appTpl from './tpl/app.html'
import compsTpl from './tpl/comps.html'


angular.module('app')
.config(['$stateProvider', function($stateProvider){
  $stateProvider.state('app', {
    url: '',
    name: 'app',
    views: {
      "comps@app": {
        template: compsTpl
      },
      "": {
        template: appTpl,
        controller: ['$scope', function($scope) {
          $scope.loadImage = function(image) {
            return require('./assets/img/' + image);
          };
        }]
      }
    },
  })
}])



