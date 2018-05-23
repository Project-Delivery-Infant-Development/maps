import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Markers = new Mongo.Collection('markers');
 // Markers.insert({ lat: -37.8136, lng: 144.9631 });
});
