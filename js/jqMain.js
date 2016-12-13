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

// Waiting for the page content to load.
// $ === Jquery Factory method.
$(function(){
  // Find the body element
  var $bodyElement = $("[data-js='body']");
  $bodyElement.append("<h1>Weather</h1>")
    .append("<h2 data-js='zip'>Zip Code</h2>")
    .find("h2")
    .addClass("hot")
    .fadeOut()
    .fadeIn();

  var $listItems = $bodyElement.find("[data-js='listItem']");
  $listItems.on("click", function(e){
    // Wrapping "this" in jquery's factor... allowing us to
    //   access all of the magic
    var $this = $(this);
    $this.toggleClass("hot");
  });

  var $zipElement = $("[data-js='zip']");
  $zipElement.on("click", function(e){
    var $this = $(this);
    $this.toggleClass("hot");
  });


});
