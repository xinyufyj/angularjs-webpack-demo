
angular.module('app')
.factory('serviceOne', function() {
  return {
    echo() {
      console.log("this is serviceOne")
    }
  }
})