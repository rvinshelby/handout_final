  var geocoder;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng)
}

function errorFunction(){
    setTimeout(alertFunc, 2500);
        function alertFunc(){
var r = confirm("There is no internet connection detected press ok to try again");
if (r == true) {
    location.reload();
} else {
    return;
}
    }
}
    geocoder = new google.maps.Geocoder();

  function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
//      console.log(results)
        if (results[1]) {

//         alert(results[0].address_components[1].long_name + " " + "City")
         localStorage.setItem('current_loc', results[0].address_components[2].long_name + " " + "City")
function online(event) {
//  statusElem.className = navigator.onLine ? 'online' : 'offline';
//  statusElem.innerHTML = navigator.onLine ? 'online' : 'offline';
//  state.innerHTML += '<li>New event: ' + event.type + '</li>';
    
    if(navigator.onLine)
        {
            setTimeout(loginpage, 1000);
            function loginpage(){
            if(localStorage.getItem('logined')=='true')
                {
                    location.href="home.html";
                }
            else
                {
                    location.href="login.html"
                }
                }
        }
}

//addEvent(window, 'online', online);
//addEvent(window, 'offline', online);
online({ type: 'ready' });


             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {


                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }