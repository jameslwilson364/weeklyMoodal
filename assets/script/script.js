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

var allWater = [];
var allStress = [];
var allMood = [];
var allEnergy = [];
var allSleep = [];
var allDate =[];
var allDay = [];
var allTemp = [];
var allVideo = [];
var cardArray = [allDay, allDate, allMood, allTemp, allVideo, allWater, allStress,allSleep, allEnergy];


day.text(currentDay);
date.text(currentDate);

//Slider Functions
var slider = document.getElementById("stress-slide");
var output = document.getElementById("stress-demo");

output.innerHTML = slider.value + "%";
slider.oninput = function() {
  output.innerHTML = this.value + "%";
};

var sliderA = document.getElementById("energy-slide");
var outputA = document.getElementById("energy-demo");

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
  
  // added localStorage for each item on day 1
  console.log(waterCount.val());
  allWater.push(waterCount.val());
  localStorage.setItem("allWater", allWater);

  console.log(moodInput.val());
  allMood.push(moodInput.val());
  localStorage.setItem("allMood", allMood);
  
  console.log(slider.value);
  allStress.push(slider.value);
  localStorage.setItem("StressIntake", allStress );

  console.log(sliderA.value);
  allEnergy.push(sliderA.value);
  localStorage.setItem("EnergyIntake", allEnergy);

  console.log(sleepCount.val());
  allSleep.push(sleepCount.val());
  localStorage.setItem("SleepIntake", allSleep);

  //added two functions before the createCard

  hideSave();
  createFrame();
  createCard();
});


//10-03
function createCard() {
  //day and date
  var dayStamp = $("#day-saved");
  var dateStamp = $("#date-saved");

  dayStamp.text(currentDay);
  dateStamp.text(currentDate);


  //water display
  console.log(localStorage.getItem("allWater"));
  var waterDisplayFlip1 = $('#water-display');
  waterDisplayFlip1.text("Water: "+allWater[0]+ " units");

  //stress display
  console.log(localStorage.getItem("allStress"));
  var stressDisplayFlip1 = $('#stress-display');
  stressDisplayFlip1.text("Stress Level: "+allStress+"%");

  // sleep
  console.log(localStorage.getItem("allSleep"));
  var sleepDisplayFlip1 = $('#sleep-display');
  sleepDisplayFlip1.text("Slept: "+allSleep+" hours");

  // energy
  console.log(localStorage.getItem("allEnergy"));
  var energyDisplayFlip1 = $('#energy-display');
  energyDisplayFlip1.text("Energy Level: "+allEnergy+"%");

  //mood
  var blockMood = $("#block-mood");

  if (allMood == "happy") {
    blockMood.addClass("happy-back");
  } else if (allMood == "neutral") {
    blockMood.addClass("neutral-back");
  } else if (allMood == "sad") {
    blockMood.addClass("sad-back");
  }  else if (allMood == "angry") {
    blockMood.addClass("stressed-back");
  };

};

// reset button clears all localStorage 
var resetButton = $('#reset');
resetButton.click(function() {
  
  window.localStorage.clear();
  
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

//template literal try
function createFrame() {
  $(".main").append('<div id="flip" class="column card flip"><h2 id="day-saved" class="subtitle is-4 has-text-centered">Flip Day</h2><h2 id="date-saved" class="subtitle is-6 has-text-centered transparent">Flip Date</h2><div id="block-mood" class="block-mood"><p id="mood-flip"></p></div><div class="block-weather"><div class="weather"><p id="weather-flip"><i class="fa-regular fa-sun"></i></p><p id="temp-flip">Temp</p></div></div><div class="block-music"><div class="music"><p><i class="fa-brands fa-youtube make-bigger"></i></p><p id="video-title">Video Title</p><div><a id="video-link" class="has-text-centered"> YouTube Link</a></div></div></div><div class="block-water"><div class="water-display"><p id="water-display">Water ___ units</p></div></div><div class="block-stress"><div class="stress-display"><p id="stress-display">Stress Level:___%</p></div></div><div class="block-sleep"><div class="sleep-display"><p id="sleep-display">Slept ___ hours</p></div></div><div class="block-energy"><div class="energy-display"><p id="energy-display">Energy Level:___%</p></div></div><button id="edit-flip" class="edit button is-link is-light"><i class="fa-solid fa-pen-to-square" style="color: #1148a6;"></i></button> </div>')
  //You may need to stringify this appended text and then you can save that into local storage.  then upon page refresh you can unstringify upon page run?  Possibly with the Create Card function instead?
}

function hideSave() {
  $( saveButton ).addClass( "hidden" );
}

