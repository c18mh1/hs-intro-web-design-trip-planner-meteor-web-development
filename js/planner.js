// Code Your Solution Here

var name = prompt ("What is your name?");
var age = prompt ("How old are you?");
var trip_destination = prompt ("What is your trip destination?");
var number_of_travelers = prompt ("How many people are traveling on this trip?");
var type_of_trip = prompt ("What type of trip is this? (relaxing, adventure, etc)");

if (type_of_trip == "relaxing" || type_of_trip == "Relaxing")
  {
 alert (name + "," + age + ", will be visiting the beautiful " + trip_destination + " with " + number_of_travelers + " other people for a " + type_of_trip + " trip! Might we suggest a nice quick stop at the beach for this relaxing trip?");
  }

else if (type_of_trip == "adventure" || type_of_trip == "Adventure")
  {
 alert (name + "," + age + ", will be visiting the beautiful " + trip_destination + " with " + number_of_travelers + " other people for a " + type_of_trip + " trip! Might we suggest a fun hike for this adventurous trip?");
  }