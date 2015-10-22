handoutApp.factory('ACCOUNTS', function($firebaseArray){
  
  var ref = new Firebase('https://handout.firebaseio.com/accounts');
  var accounts = $firebaseArray(ref);
  
  return{
    GetAll: function(){
      return accounts;
    },
    Add: function(obj){
      accounts.$add(obj);
    }
  }
});