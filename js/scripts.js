//SIDR PLUGIN

// Sidr Drawer
// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
});

// GET THAT WEATHER

// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

//CURRENT LOCATION

navigator.geolocation.getCurrentPosition(function(position) {
  
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
      $('#current-location .city').text(weather.city);
      $('#current-location .state').text(weather.region);
      $('#current-location i').addClass( 'icon-' + weather.code);
      $('#current-location .currently').text(weather.currently);
      $('#current-location .temp').text(weather.temp + '°');
      $('#current-location .high').text(weather.high + '°');
      $('#current-location .low').text(weather.low + '°');
        
//    2Display Data : Day 1
    $('#current-location .forecast figure:nth-child(1) .next-day').text(weather.forecast[1].day);
    $('#current-location .forecast figure:nth-child(1) .low').text(weather.forecast[1].low);
    $('#current-location .forecast figure:nth-child(1) .high').text(weather.forecast[1].high);
    $('#current-location .forecast figure:nth-child(1) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 2
    $('#current-location .forecast figure:nth-child(2) .next-day').text(weather.forecast[2].day);
    $('#current-location .forecast figure:nth-child(2) .low').text(weather.forecast[2].low);
    $('#current-location .forecast figure:nth-child(2) .high').text(weather.forecast[2].high);
    $('#current-location .forecast figure:nth-child(2) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 3
    $('#current-location .forecast figure:nth-child(3) .next-day').text(weather.forecast[3].day);
    $('#current-location .forecast figure:nth-child(3) .low').text(weather.forecast[3].low);
    $('#current-location .forecast figure:nth-child(3) .high').text(weather.forecast[3].high);
    $('#current-location .forecast figure:nth-child(3) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 4
    $('#current-location .forecast figure:nth-child(4) .next-day').text(weather.forecast[4].day);
    $('#current-location .forecast figure:nth-child(4) .low').text(weather.forecast[4].low);
    $('#current-location .forecast figure:nth-child(4) .high').text(weather.forecast[4].high);
    $('#current-location .forecast figure:nth-child(4) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 5
    $('#current-location .forecast figure:nth-child(5) .next-day').text(weather.forecast[5].day);
    $('#current-location .forecast figure:nth-child(5) .low').text(weather.forecast[5].low);
    $('#current-location .forecast figure:nth-child(5) .high').text(weather.forecast[5].high);
    $('#current-location .forecast figure:nth-child(5) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 6
    $('#current-location .forecast figure:nth-child(6) .next-day').text(weather.forecast[6].day);
    $('#current-location .forecast figure:nth-child(6) .low').text(weather.forecast[6].low);
    $('#current-location .forecast figure:nth-child(6) .high').text(weather.forecast[6].high);
    $('#current-location .forecast figure:nth-child(6) img').attr('src', weather.forecast[6].image);

    // Display Data : Day 7
    $('#current-location .forecast figure:nth-child(7) .next-day').text(weather.forecast[7].day);
    $('#current-location .forecast figure:nth-child(7) .low').text(weather.forecast[7].low);
    $('#current-location .forecast figure:nth-child(7) .high').text(weather.forecast[7].high);
    $('#current-location .forecast figure:nth-child(7) img').attr('src', weather.forecast[7].image);
        
    // Change icon with condition code
    var iconCode1 = 'icon-' + weather.forecast[1].code;
    var iconCode2 = 'icon-' + weather.forecast[2].code;
    var iconCode3 = 'icon-' + weather.forecast[3].code;
    var iconCode4 = 'icon-' + weather.forecast[4].code;
    var iconCode5 = 'icon-' + weather.forecast[5].code;
    var iconCode6 = 'icon-' + weather.forecast[6].code;
    var iconCode7 = 'icon-' + weather.forecast[7].code;
        
    $('#current-location .forecast .day1 i').attr('class', iconCode1 );
    $('#current-location .forecast .day2 i').attr('class', iconCode2 );
    $('#current-location .forecast .day3 i').attr('class', iconCode3 );
    $('#current-location .forecast .day4 i').attr('class', iconCode4 );
    $('#current-location .forecast .day5 i').attr('class', iconCode5 );
    $('#current-location .forecast .day6 i').attr('class', iconCode6 );
    $('#current-location .forecast .day7 i').attr('class', iconCode7 );
        
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
    
};

// SEATTLE WEATHER

$.simpleWeather({
    location: 98101,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#seattle .city').text(weather.city);
      $('#seattle .state').text(weather.region);
      $('#seattle i').addClass( 'icon-' + weather.code);
      $('#seattle .currently').text(weather.currently);
      $('#seattle .temp').text(weather.temp + '°');
      $('#seattle .high').text(weather.high + '°');
      $('#seattle .low').text(weather.low + '°');
        
//    2Display Data : Day 1
    $('#seattle .forecast figure:nth-child(1) .next-day').text(weather.forecast[1].day);
    $('#seattle .forecast figure:nth-child(1) .low').text(weather.forecast[1].low);
    $('#seattle .forecast figure:nth-child(1) .high').text(weather.forecast[1].high);
    $('#seattle .forecast figure:nth-child(1) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 2
    $('#seattle .forecast figure:nth-child(2) .next-day').text(weather.forecast[2].day);
    $('#seattle .forecast figure:nth-child(2) .low').text(weather.forecast[2].low);
    $('#seattle .forecast figure:nth-child(2) .high').text(weather.forecast[2].high);
    $('#seattle .forecast figure:nth-child(2) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 3
    $('#seattle .forecast figure:nth-child(3) .next-day').text(weather.forecast[3].day);
    $('#seattle .forecast figure:nth-child(3) .low').text(weather.forecast[3].low);
    $('#seattle .forecast figure:nth-child(3) .high').text(weather.forecast[3].high);
    $('#seattle .forecast figure:nth-child(3) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 4
    $('#seattle .forecast figure:nth-child(4) .next-day').text(weather.forecast[4].day);
    $('#seattle .forecast figure:nth-child(4) .low').text(weather.forecast[4].low);
    $('#seattle .forecast figure:nth-child(4) .high').text(weather.forecast[4].high);
    $('#seattle .forecast figure:nth-child(4) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 5
    $('#seattle .forecast figure:nth-child(5) .next-day').text(weather.forecast[5].day);
    $('#seattle .forecast figure:nth-child(5) .low').text(weather.forecast[5].low);
    $('#seattle .forecast figure:nth-child(5) .high').text(weather.forecast[5].high);
    $('#seattle .forecast figure:nth-child(5) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 6
    $('#seattle .forecast figure:nth-child(6) .next-day').text(weather.forecast[6].day);
    $('#seattle .forecast figure:nth-child(6) .low').text(weather.forecast[6].low);
    $('#seattle .forecast figure:nth-child(6) .high').text(weather.forecast[6].high);
    $('#seattle .forecast figure:nth-child(6) img').attr('src', weather.forecast[6].image);

    // Display Data : Day 7
    $('#seattle .forecast figure:nth-child(7) .next-day').text(weather.forecast[7].day);
    $('#seattle .forecast figure:nth-child(7) .low').text(weather.forecast[7].low);
    $('#seattle .forecast figure:nth-child(7) .high').text(weather.forecast[7].high);
    $('#seattle .forecast figure:nth-child(7) img').attr('src', weather.forecast[7].image);
        
    // Change icon with condition code
    var iconCode1 = 'icon-' + weather.forecast[1].code;
    var iconCode2 = 'icon-' + weather.forecast[2].code;
    var iconCode3 = 'icon-' + weather.forecast[3].code;
    var iconCode4 = 'icon-' + weather.forecast[4].code;
    var iconCode5 = 'icon-' + weather.forecast[5].code;
    var iconCode6 = 'icon-' + weather.forecast[6].code;
    var iconCode7 = 'icon-' + weather.forecast[7].code;
        
    $('#seattle .forecast .day1 i').attr('class', iconCode1 );
    $('#seattle .forecast .day2 i').attr('class', iconCode2 );
    $('#seattle .forecast .day3 i').attr('class', iconCode3 );
    $('#seattle .forecast .day4 i').attr('class', iconCode4 );
    $('#seattle .forecast .day5 i').attr('class', iconCode5 );
    $('#seattle .forecast .day6 i').attr('class', iconCode6 );
    $('#seattle .forecast .day7 i').attr('class', iconCode7 );
        
              // Condition Code
      // Reference Condition Codes
      // https://developer.yahoo.com/weather/documentation.html#codes
      console.log(weather.code);
      
      // If Sunny `code` between 31 and 36       
      if (weather.code >= 31 && weather.code <= 36 ) {
        
        $('#seattle').addClass('sunny');
        
      }
      
       // If Cloudy `code` between 31 and 36       
      if (weather.code >= 26 && weather.code <= 30 ) {
        
        $('#seattle').addClass('cloudy');
        
      }
      
      // If Rainy `code` between 31 and 36       
      if (weather.code >= 5 && weather.code <= 14 ) {
        
        $('#seattle').addClass('rainy');
          
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
});

// PHOENIX WEATHER

$.simpleWeather({
    location: 85001,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#phoenix .city').text(weather.city);
      $('#phoenix .state').text(weather.region);
      $('#phoenix i').addClass( 'icon-' + weather.code);
      $('#phoenix .currently').text(weather.currently);
      $('#phoenix .temp').text(weather.temp + '°');
      $('#phoenix .high').text(weather.high + '°');
      $('#phoenix .low').text(weather.low + '°');
        
//    2Display Data : Day 1
    $('#phoenix .forecast figure:nth-child(1) .next-day').text(weather.forecast[1].day);
    $('#phoenix .forecast figure:nth-child(1) .low').text(weather.forecast[1].low);
    $('#phoenix .forecast figure:nth-child(1) .high').text(weather.forecast[1].high);
    $('#phoenix .forecast figure:nth-child(1) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 2
    $('#phoenix .forecast figure:nth-child(2) .next-day').text(weather.forecast[2].day);
    $('#phoenix .forecast figure:nth-child(2) .low').text(weather.forecast[2].low);
    $('#phoenix .forecast figure:nth-child(2) .high').text(weather.forecast[2].high);
    $('#phoenix .forecast figure:nth-child(2) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 3
    $('#phoenix .forecast figure:nth-child(3) .next-day').text(weather.forecast[3].day);
    $('#phoenix .forecast figure:nth-child(3) .low').text(weather.forecast[3].low);
    $('#phoenix .forecast figure:nth-child(3) .high').text(weather.forecast[3].high);
    $('#phoenix .forecast figure:nth-child(3) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 4
    $('#phoenix .forecast figure:nth-child(4) .next-day').text(weather.forecast[4].day);
    $('#phoenix .forecast figure:nth-child(4) .low').text(weather.forecast[4].low);
    $('#phoenix .forecast figure:nth-child(4) .high').text(weather.forecast[4].high);
    $('#phoenix .forecast figure:nth-child(4) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 5
    $('#phoenix .forecast figure:nth-child(5) .next-day').text(weather.forecast[5].day);
    $('#phoenix .forecast figure:nth-child(5) .low').text(weather.forecast[5].low);
    $('#phoenix .forecast figure:nth-child(5) .high').text(weather.forecast[5].high);
    $('#phoenix .forecast figure:nth-child(5) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 6
    $('#phoenix .forecast figure:nth-child(6) .next-day').text(weather.forecast[6].day);
    $('#phoenix .forecast figure:nth-child(6) .low').text(weather.forecast[6].low);
    $('#phoenix .forecast figure:nth-child(6) .high').text(weather.forecast[6].high);
    $('#phoenix .forecast figure:nth-child(6) img').attr('src', weather.forecast[6].image);

    // Display Data : Day 7
    $('#phoenix .forecast figure:nth-child(7) .next-day').text(weather.forecast[7].day);
    $('#phoenix .forecast figure:nth-child(7) .low').text(weather.forecast[7].low);
    $('#phoenix .forecast figure:nth-child(7) .high').text(weather.forecast[7].high);
    $('#phoenix .forecast figure:nth-child(7) img').attr('src', weather.forecast[7].image);
        
    // Change icon with condition code
    var iconCode1 = 'icon-' + weather.forecast[1].code;
    var iconCode2 = 'icon-' + weather.forecast[2].code;
    var iconCode3 = 'icon-' + weather.forecast[3].code;
    var iconCode4 = 'icon-' + weather.forecast[4].code;
    var iconCode5 = 'icon-' + weather.forecast[5].code;
    var iconCode6 = 'icon-' + weather.forecast[6].code;
    var iconCode7 = 'icon-' + weather.forecast[7].code;
        
    $('#phoenix .forecast .day1 i').attr('class', iconCode1 );
    $('#phoenix .forecast .day2 i').attr('class', iconCode2 );
    $('#phoenix .forecast .day3 i').attr('class', iconCode3 );
    $('#phoenix .forecast .day4 i').attr('class', iconCode4 );
    $('#phoenix .forecast .day5 i').attr('class', iconCode5 );
    $('#phoenix .forecast .day6 i').attr('class', iconCode6 );
    $('#phoenix .forecast .day7 i').attr('class', iconCode7 );
        
              // Condition Code
      // Reference Condition Codes
      // https://developer.yahoo.com/weather/documentation.html#codes
      console.log(weather.code);
      
      // If Sunny `code` between 31 and 36       
      if (weather.code >= 31 && weather.code <= 36 ) {
        
        $('#phoenix').addClass('sunny');
        
      }
      
       // If Cloudy `code` between 31 and 36       
      if (weather.code >= 26 && weather.code <= 30 ) {
        
        $('#phoenix').addClass('cloudy');
        
      }
      
      // If Rainy `code` between 31 and 36       
      if (weather.code >= 5 && weather.code <= 14 ) {
        
        $('#phoenix').addClass('rainy');
          
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
});
