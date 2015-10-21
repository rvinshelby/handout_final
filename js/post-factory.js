handoutApp.factory('POSTS', ['$firebaseArray', function($firebaseArray){

  var ref = new Firebase("https://handout.firebaseio.com/posts");
  var posts = $firebaseArray(ref);
    
  return {
    GetAll: function(){
      return posts;
    },
    GetPostBy$ID: function(id){
      console.log(posts);
      for(var i = 0; i < posts.length; i++){
        if(posts[i].$id == id){
          return posts[i];
        }
      }
      return undefined;
    }
  }
  /*
  USERS.GetPostBy$ID('-K23947SDKLJFWER0');
  //return OBJECT
  */
  
}]);