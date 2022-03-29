
angular.module('app')
.factory('serviceTwo', function() {
  return {
    echo() {
      console.log("this is serviceTwo")
    }
  }
})