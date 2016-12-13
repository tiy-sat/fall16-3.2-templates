// Main javascript


// Stubbing out data to use

var weatherData = {
  cityName: "San Antonio",
  zipcode: 78209,
  currentTemp: 61,
  fiveDay: {
    14: {
      high: 50,
      low: 42
    },
    15: {
      high: 60,
      low: 58
    },
    16: {
      high: 70,
      low: 30
    }
  }
};




// Waits for the page content to be loaded
//   before any code looks for said content
document.addEventListener("DOMContentLoaded", function(){
  // Inside of this callback...
  //   we know that the content is available for finding/modifying
  var bodyElement = document.querySelector("[data-js='body']");
  var currentTempClass = isHotColdClass(weatherData.currentTemp);

  var cityNameHeadingString = `<h1> ${weatherData.cityName} </h1>`;
  var currentTempString = `<h2 class="${currentTempClass}"> ${weatherData.currentTemp} </h2>`;
  var zipCodeString = `<p> ${weatherData.zipcode} </p>`;

  bodyElement.innerHTML += zipCodeString;
  bodyElement.innerHTML += cityNameHeadingString;
  bodyElement.innerHTML += currentTempString;

  var daysHTML = buildFiveDayHTML();
  bodyElement.innerHTML += daysHTML;

});

// Return "hot" if 60 or above return "cold" is below 60
// Helper method to return string...
function isHotColdClass(temp){
  if(temp >= 60){
    return "hot";
  }else if(temp < 60){
    return "cold";
  }else{
    return "";
  }
}

function buildFiveDayHTML(){
  // With a for...in loop we are give a variable equal to the KEY of the object
  //   we must then use the key to grab each item inside.
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  // console.log(Object.keys(weatherDay.fiveDay));

  // A placeholder variable to concat and return later
  var allDaysHTML = "";

  for(var dayKey in weatherData.fiveDay){
    var dayData = weatherData.fiveDay[dayKey];

    var isWarmClassName = isHotColdClass(dayData.high);
    var isColdClassName = isHotColdClass(dayData.low);

    var dayHTML = `
      <li class="weather__day">
        <h3 class="${isWarmClassName}"> high: ${dayData.high} </h3>
        <h4 class="${isColdClassName}"> low: ${dayData.low} </h4>
      </li>
    `;
    allDaysHTML += dayHTML;
  }

  return allDaysHTML;
}
