// GET THAT WEATHER

// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com



navigator.geolocation.getCurrentPosition( 
  
  function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  console.log( lat, long); 

  getWeather( lat + ',' + long );
});

// Show geolocated weather
var getWeather = function(location) {

$.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.city').text(weather.city);
      $('.state').text(weather.region);
      $('i').addClass( 'icon-' + weather.code);
      $('.currently').text(weather.currently);
      $('.temp').text(weather.temp + '°');
      $('.high').text(weather.high + '°');
      $('.low').text(weather.low + '°');
        
//    2Display Data : Day 1
    $('.forecast figure:nth-child(1) .next-day').text(weather.forecast[1].day);
    $('.forecast figure:nth-child(1) .low').text(weather.forecast[1].low);
    $('.forecast figure:nth-child(1) .high').text(weather.forecast[1].high);
    $('.forecast figure:nth-child(1) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 2
    $('.forecast figure:nth-child(2) .next-day').text(weather.forecast[2].day);
    $('.forecast figure:nth-child(2) .low').text(weather.forecast[2].low);
    $('.forecast figure:nth-child(2) .high').text(weather.forecast[2].high);
    $('.forecast figure:nth-child(2) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 3
    $('.forecast figure:nth-child(3) .next-day').text(weather.forecast[3].day);
    $('.forecast figure:nth-child(3) .low').text(weather.forecast[3].low);
    $('.forecast figure:nth-child(3) .high').text(weather.forecast[3].high);
    $('.forecast figure:nth-child(3) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 4
    $('.forecast figure:nth-child(4) .next-day').text(weather.forecast[4].day);
    $('.forecast figure:nth-child(4) .low').text(weather.forecast[4].low);
    $('.forecast figure:nth-child(4) .high').text(weather.forecast[4].high);
    $('.forecast figure:nth-child(4) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 5
    $('.forecast figure:nth-child(5) .next-day').text(weather.forecast[5].day);
    $('.forecast figure:nth-child(5) .low').text(weather.forecast[5].low);
    $('.forecast figure:nth-child(5) .high').text(weather.forecast[5].high);
    $('.forecast figure:nth-child(5) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 6
    $('.forecast figure:nth-child(6) .next-day').text(weather.forecast[6].day);
    $('.forecast figure:nth-child(6) .low').text(weather.forecast[6].low);
    $('.forecast figure:nth-child(6) .high').text(weather.forecast[6].high);
    $('.forecast figure:nth-child(6) img').attr('src', weather.forecast[6].image);

    // Display Data : Day 7
    $('.forecast figure:nth-child(7) .next-day').text(weather.forecast[7].day);
    $('.forecast figure:nth-child(7) .low').text(weather.forecast[7].low);
    $('.forecast figure:nth-child(7) .high').text(weather.forecast[7].high);
    $('.forecast figure:nth-child(7) img').attr('src', weather.forecast[7].image);
        
    // Change icon with condition code
    var iconCode1 = 'icon-' + weather.forecast[1].code;
    var iconCode2 = 'icon-' + weather.forecast[2].code;
    var iconCode3 = 'icon-' + weather.forecast[3].code;
    var iconCode4 = 'icon-' + weather.forecast[4].code;
    var iconCode5 = 'icon-' + weather.forecast[5].code;
    var iconCode6 = 'icon-' + weather.forecast[6].code;
    var iconCode7 = 'icon-' + weather.forecast[7].code;
        
    $('.forecast .day1 i').attr('class', iconCode1 );
    $('.forecast .day2 i').attr('class', iconCode2 );
    $('.forecast .day3 i').attr('class', iconCode3 );
    $('.forecast .day4 i').attr('class', iconCode4 );
    $('.forecast .day5 i').attr('class', iconCode5 );
    $('.forecast .day6 i').attr('class', iconCode6 );
    $('.forecast .day7 i').attr('class', iconCode7 );
        
              // Condition Code
      // Reference Condition Codes
      // https://developer.yahoo.com/weather/documentation.html#codes
      console.log(weather.code);
      
      // If Sunny `code` between 31 and 36       
      if (weather.code >= 31 && weather.code <= 36 ) {
        
        $('body').addClass('sunny');
        
      }
      
       // If Cloudy `code` between 31 and 36       
      if (weather.code >= 26 && weather.code <= 30 ) {
        
        $('body').addClass('cloudy');
        
      }
      
      // If Rainy `code` between 31 and 36       
      if (weather.code >= 5 && weather.code <= 14 ) {
        
        $('body').addClass('rainy');
          
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
    
}