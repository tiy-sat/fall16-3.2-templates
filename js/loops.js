// Loops js

var fullName = "Jason Vanderslice";

// Remove all the "a"s

// Convert the string into an array
var fullNameArray = fullName.split("");

for(var i = 0; i < fullNameArray.length; i++){
  var letterItem = fullNameArray[i];

  if(letterItem === "a") {
    // remove the index of a
    fullNameArray.splice(i, 1);
  }
}

var fullNameJoined = fullNameArray.join("");
console.log(fullNameJoined);
