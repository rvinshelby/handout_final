handoutApp.controller('getPostCtrl', ['$scope', 'POSTS', '$stateParams', function($scope, POSTS, $stateParams){
    
    //$scope.posts = POSTS.GetAll();
    
    var current_id = $stateParams.id;
    
    POSTS.GetAll().$loaded().then(function(){
      $scope.post = POSTS.GetPostBy$ID(current_id);
      console.log($scope.post);
    })
  
  
}]);    //end controller