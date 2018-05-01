var map_zoom = 10;

Meteor.startup(function(){
  GoogleMaps.load();
});

Template.map.helpers({
  geolocationError: function(){
    var error = Geolocation.error();
    return error && error.mesage;
  },
  mapOptions: function(){
    var latLng = Geolocation.latLng();
    if(GoogleMaps.loaded() && latLng){
      return{
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: map_zoom
      };
    }
  }
});

Template.map.onCreated(function(){
  GoogleMaps.ready('map',function(map){
    var latLng = Geolocation.latLng();
    var marker = new google.maps.Marker({
position: new google.maps.LatLng(latLng.lat, latLng.lng),
map:map.instance,
label:'Your Location'
    });

    var LGA1 = new google.maps.Marker({
      //We can enter Latitude and Longitude of a specific location to add LGAs
      position: new google.maps.LatLng(-37.8253897,144.9509223),
      map:map.instance,
      label:'Melbourne Exhibition Centre Hub'
    });
    var LGA2 = new google.maps.Marker({
      //We can enter Latitude and Longitude of a specific location to add LGAs
      position: new google.maps.LatLng(-37.8467361,145.1129242),
      map:map.instance,
      label:'Deakin University Hub'
    });
  });
});