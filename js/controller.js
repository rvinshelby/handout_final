handoutApp.controller('getpostsCtrl', function($scope, $firebaseArray, $state){
    $scope.postQuantity = 5;
    
    $scope.getMorePost = function(){
        $scope.postQuantity += 5;
    }
    
    $scope.isCollapsed = false;
            window.onload = function() {
                WebPullToRefresh.init( {
                    loadingFunction: exampleLoadingFunction
                } );
            };

            // Just an example loading function that returns a
            // promise that WebPullToRefresh can use.
            var exampleLoadingFunction = function() {
                return new Promise( function( resolve, reject ) {
                    // Run some async loading code here

                    if ( true /* if the loading worked */ ) {
                        $state.reload()
                        resolve();
                    } else {
                        reject();
                    }
                } );
            };
    
    
    
$scope.$on('$stateChangeStart', 
function(event){ 
    return
})
    
    var ref = new Firebase("https://handout.firebaseio.com/posts");
    var sync = $firebaseArray(ref);
    $scope.post = sync;
    sync.$loaded(function(){

    });
      $scope.labels = ["Who voted YES", "Who voted No"];
    $scope.colors = ['#4DFF4D', '#FF4D4D'];
  $scope.data = [300, 500]; 
    
    $scope.time = moment('2015-10-18T16:51:27.307Z');
    $scope.timeago = moment($scope.time).fromNow();
});

handoutApp.controller('handoutCtrl', function($scope, $firebaseArray){
    $scope.user = "Rvinn"
});

handoutApp.controller('postCtrl', function($scope){
    $scope.post = {id: '1', user: 'arvin', title: 'mylovewillneverfailyou',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula ac nisi eu elementum. Praesent velit ante, tempor vitae odio sit amet, convallis bibendum tortor. Duis porttitor sem ipsum, vel sodales orci lacinia ut. Fusce libero felis, vehicula interdum luctus fringilla, dapibus eget leo. Nulla vestibulum ligula vitae ante fermentum dictum. Nam id felis pulvinar, placerat magna non, porta mauris. Nullam non ex tincidunt, ornare nisl vitae, volutpat quam. Vestibulum viverra nibh id mauris varius, eget interdum elit facilisis. Nunc quis feugiat risus, at facilisis nunc. Pellentesque ut varius erat.' , time: '1:30am'};
    
  $scope.labels = ["Who voted YES", "Who voted No"];
    $scope.colors = ['#4DFF4D', '#FF4D4D'];
  $scope.data = [300, 500]; 
    
});
handoutApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

handoutApp.controller('splashCtrl', ['$splash', function ($splash) {
  this.openSplash = function () {
    $splash.open({
      title: 'Hi there!',
      message: "This sure is a fine modal, isn't it?"
    });
  };
}]);