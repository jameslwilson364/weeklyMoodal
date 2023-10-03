// initial script file 7:46pm

// variables to match the drawing

// water intake stored as a variable
// maybe we can do a visual where cups of water fill on the page as the user rolls over or clicks them???
// plus/minus clicks (store the variable as a number)
// var dailyWaterIntake = 0;
// function onClickPlus() {
//  clicks += 1;
//  document.getElementById("water").innerHTML = clicks;
//  };
// function onClickMinus() {
//  clicks -= 1;
//  document.getElementById("water").innerHTML = clicks;
//  };

var currentDate = dayjs().format('MMMM DD, YYYY');
var currentDay = dayjs().format("dddd");

var day = $("#day");
var date = $("#date");

day.text(currentDay);
date.text(currentDate);

//Slider Functions
var slider = document.getElementById("stress-slide");
var output = document.getElementById("stress-demo");

output.innerHTML = slider.value + "%";
slider.oninput = function() {
  output.innerHTML = this.value + "%";
};

var sliderA = document.getElementById("anxiety-slide");
var outputA = document.getElementById("anxiety-demo");

outputA.innerHTML = sliderA.value + "%";
sliderA.oninput = function() {
  outputA.innerHTML = this.value + "%";
};
// End Slider functions

var saveButton = $("#save");

saveButton.click(function(event) {
  event.preventDefault();

  var waterCount = $("#water-counter");
  var moodInput = $("input[name=mood]:radio:checked");
  var sleepCount = $('#hours-sleep').find(":selected");
  

  console.log(waterCount.val());
  console.log(moodInput.val());
  console.log(slider.value);
  console.log(sliderA.value);
  console.log(sleepCount.val());
});

// checkboxes for moods stored as a variable (do we want to have the user to be able to check multiple boxes)
// happy, sad, angry, neutral

// numeric value that corresponds to a slider bar stored as a number

// drop down for sleep ranges 
// drop down should include the following values stored as a variable
// 0-3 hours
// 4-6 hours
// 7-9 hours
// 10-12 hours
// I slept all day!

// api to pull in weather data for day one 
// day one value auto populates in each day's location field with weather data auto populated underneath
// allow the user to edit their location in each card



// submit button to capture all user inputs 
// check to see if user entered all fields
// treat the moods differently as a boolean value 
// function that scores the users inputs for a running tally
// function captures user inputs on the flip card and in localStorage
// localStorage arrays for each day
// edit button to refresh the current card and allow the user to reinput their data (also clears that card data from localStorage)
// when the final submit is clicked and all 7 cards have completed data sets (must check for it) the user is assigned a score value



// need to determine how to score those, weighted for mood??
// the user receives a summary modal that..
// how they did this week mentally
// how they did this week physically
// conditional recommendations for activities to help improve mental/physical health
// YouTube API for playlists
// YouTube API for videos

//possibly write a function to split the day of the week off to write this as a single function for all stress sliders


// var slider = document.getElementById("stress-slide");
// var output = document.getElementById("stress-demo");
// output.innerHTML = slider.value + "%"; // Display the default slider value


// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value + "%";
// };



