// initial script file 7:46pm

var currentDate = dayjs().format('dddd, MMMM DD, YYYY');
// var currentDay = dayjs().format("");

function getDates() {
var currentDate = dayjs();
var sundayText = document.getElementById('date0');
var sundayFlipText = document.getElementById('day-saved0');
var sundayFlipDate = document.getElementById('date-saved0');
var mondayText = document.getElementById('date1');
var mondayFlipText = document.getElementById('day-saved1');
var mondayFlipDate = document.getElementById('date-saved1');
var tuesdayText = document.getElementById('date2');
var tuesdayFlipText = document.getElementById('day-saved2');
var tuesdayFlipDate = document.getElementById('date-saved2');
var wednesdayText = document.getElementById('date3');
var wednesdayFlipText = document.getElementById('day-saved3');
var wednesdayFlipDate = document.getElementById('date-saved3');
var thursdayText = document.getElementById('date4');
var thursdayFlipText = document.getElementById('day-saved4');
var thursdayFlipDate = document.getElementById('date-saved4');
var fridayText = document.getElementById('date5');
var fridayFlipText = document.getElementById('day-saved5');
var fridayFlipDate = document.getElementById('date-saved5');
var saturdayText = document.getElementById('date6');
var saturdayFlipText = document.getElementById('day-saved6');
var saturdayFlipDate = document.getElementById('date-saved6');

if (dayjs().day() === 0) {
  var sundayYep = currentDate;
  sundayText.textContent= (sundayYep.format('MMMM DD, YYYY'));
  sundayFlipText.textContent= (sundayYep.format('dddd'));
  sundayFlipDate.textContent= (sundayYep.format('MMMM DD, YYYY'));
  var mondayYep = dayjs(currentDate).add(1, 'day');
  mondayText.textContent= (mondayYep.format('MMMM DD, YYYY'));
  mondayFlipText.textContent= (mondayYep.format('dddd'));
  mondayFlipDate.textContent= (mondayYep.format('MMMM DD, YYYY'));
  var tuesdayYep = dayjs(currentDate).add(2, 'day');
  tuesdayText.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  tuesdayFlipText.textContent= (tuesdayYep.format('dddd'));
  tuesdayFlipDate.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  var wednesdayYep = dayjs(currentDate).add(3, 'day');
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  wednesdayFlipText.textContent= (wednesdayYep.format('dddd'));
  wednesdayFlipDate.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  var thursdayYep = dayjs(currentDate).add(4, 'day');
  thursdayText.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  thursdayFlipText.textContent= (thursdayYep.format('dddd'));
  thursdayFlipDate.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  var fridayYep = dayjs(currentDate).add(5, 'day');
  fridayText.textContent= (fridayYep.format('MMMM DD, YYYY'));
  fridayFlipText.textContent= (fridayYep.format('dddd'));
  fridayFlipDate.textContent= (fridayYep.format('MMMM DD, YYYY'));
  var saturdayYep = dayjs(currentDate).add(6, 'day');
  saturdayText.textContent= (saturdayYep.format('MMMM DD, YYYY'));
  saturdayFlipText.textContent= (saturdayYep.format('dddd'));
  saturdayFlipDate.textContent= (saturdayYep.format('MMMM DD, YYYY'));
}   else if (dayjs().day() === 1) {
  var sundayYep = dayjs(currentDate).add(-1, 'day');
  sundayText.textContent= (sundayYep.format('MMMM DD, YYYY'));
  sundayFlipText.textContent= (sundayYep.format('dddd'));
  sundayFlipDate.textContent= (sundayYep.format('MMMM DD, YYYY'));
  var mondayYep = currentDate;
  mondayText.textContent= (mondayYep.format('MMMM DD, YYYY'));
  mondayFlipText.textContent= (mondayYep.format('dddd'));
  mondayFlipDate.textContent= (mondayYep.format('MMMM DD, YYYY'));
  var tuesdayYep = dayjs(currentDate).add(1, 'day');
  tuesdayText.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  tuesdayFlipText.textContent= (tuesdayYep.format('dddd'));
  tuesdayFlipDate.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  var wednesdayYep = dayjs(currentDate).add(2, 'day');
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  wednesdayFlipText.textContent= (wednesdayYep.format('dddd'));
  wednesdayFlipDate.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  var thursdayYep = dayjs(currentDate).add(3, 'day');
  thursdayText.textContent= (thursdayYep.format('MMMM DD, YYYYY'));
  thursdayFlipText.textContent= (thursdayYep.format('dddd'));
  thursdayFlipDate.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  var fridayYep = dayjs(currentDate).add(4, 'day');
  fridayText.textContent= (fridayYep.format('MMMM DD, YYYY'));
  fridayFlipText.textContent= (fridayYep.format('dddd'));
  fridayFlipDate.textContent= (fridayYep.format('MMMM DD, YYYY'));
  var saturdayYep = dayjs(currentDate).add(5, 'day');
  saturdayText.textContent= (saturdayYep.format('MMMM DD, YYYY'));
  saturdayFlipText.textContent= (saturdayYep.format('dddd'));
  saturdayFlipDate.textContent= (saturdayYep.format('MMMM DD, YYYY'));
} else if (dayjs().day() === 2) {
  var sundayYep = dayjs(currentDate).add(-2, 'day');
  sundayText.textContent= (sundayYep.format('MMMM DD, YYYY'));
  sundayFlipText.textContent= (sundayYep.format('dddd'));
  sundayFlipDate.textContent= (sundayYep.format('MMMM DD, YYYY'));
  var mondayYep = dayjs(currentDate).add(-1, 'day');
  mondayText.textContent= (mondayYep.format('MMMM DD, YYYY'));
  mondayFlipText.textContent= (mondayYep.format('dddd'));
  mondayFlipDate.textContent= (mondayYep.format('MMMM DD, YYYY'));
  var tuesdayYep = currentDate;
  tuesdayText.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  tuesdayFlipText.textContent= (tuesdayYep.format('dddd'));
  tuesdayFlipDate.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  var wednesdayYep = dayjs(currentDate).add(1, 'day');
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  wednesdayFlipText.textContent= (wednesdayYep.format('dddd'));
  wednesdayFlipDate.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  var thursdayYep = dayjs(currentDate).add(2, 'day');
  thursdayText.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  thursdayFlipText.textContent= (thursdayYep.format('dddd'));
  thursdayFlipDate.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  var fridayYep = dayjs(currentDate).add(3, 'day');
  fridayText.textContent= (fridayYep.format('MMMM DD, YYYY'));
  fridayFlipText.textContent= (fridayYep.format('dddd'));
  fridayFlipDate.textContent= (fridayYep.format('MMMM DD, YYYY'));
  var saturdayYep = dayjs(currentDate).add(4, 'day');
  saturdayText.textContent= (saturdayYep.format('MMMM DD, YYYY'));
  saturdayFlipText.textContent= (saturdayYep.format('dddd'));
  saturdayFlipDate.textContent= (saturdayYep.format('MMMM DD, YYYY'));
}   else if (dayjs().day() === 3) {
  var sundayYep = dayjs(currentDate).add(-3, 'day').format('MMMM DD, YYYY');
  sundayText.textContent= (sundayYep);
  sundayFlipText.textContent= (sundayYep.format('dddd'));
  sundayFlipDate.textContent= (sundayYep.format('MMMM DD, YYYY'));
  var mondayYep = dayjs(currentDate).add(-2, 'day');
  mondayText.textContent= (mondayYep.format('MMMM DD, YYYY'));
  mondayFlipText.textContent= (mondayYep.format('dddd'));
  mondayFlipDate.textContent= (mondayYep.format('MMMM DD, YYYY'));
  var tuesdayYep = dayjs(currentDate).add(-1, 'day'); 
  tuesdayText.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  tuesdayFlipText.textContent= (tuesdayYep.format('dddd'));
  tuesdayFlipDate.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  var wednesdayYep = currentDate;
  console.log(wednesdayYep);
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  wednesdayFlipText.textContent= (wednesdayYep.format('dddd'));
  wednesdayFlipDate.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  var thursdayYep = dayjs(currentDate).add(1, 'day');
  thursdayText.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  thursdayFlipText.textContent= (thursdayYep.format('dddd'));
  thursdayFlipDate.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  var fridayYep = dayjs(currentDate).add(2, 'day');
  fridayText.textContent= (fridayYep.format('MMMM DD, YYYY'));
  fridayFlipText.textContent= (fridayYep.format('dddd'));
  fridayFlipDate.textContent= (fridayYep.format('MMMM DD, YYYY'));
  var saturdayYep = dayjs(currentDate).add(3, 'day');
  saturdayText.textContent= (saturdayYep.format('MMMM DD, YYYY'));
  saturdayFlipText.textContent= (saturdayYep.format('dddd'));
  saturdayFlipDate.textContent= (saturdayYep.format('MMMM DD, YYYY'));
}   else if (dayjs().day() === 4) {
  var sundayYep = dayjs(currentDate).add(-4, 'day');
  sundayText.textContent= (sundayYep.format('MMMM DD, YYYY'));
  sundayFlipText.textContent= (sundayYep.format('dddd'));
  sundayFlipDate.textContent= (sundayYep.format('MMMM DD, YYYY'));
  var mondayYep = dayjs(currentDate).add(-3, 'day');
  mondayText.textContent= (mondayYep.format('MMMM DD, YYYY'));
  mondayFlipText.textContent= (mondayYep.format('dddd'));
  mondayFlipDate.textContent= (mondayYep.format('MMMM DD, YYYY'));
  var tuesdayYep = dayjs(currentDate).add(-2, 'day'); 
  tuesdayText.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  tuesdayFlipText.textContent= (tuesdayYep.format('dddd'));
  tuesdayFlipDate.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  var wednesdayYep =  dayjs(currentDate).add(-1, 'day'); 
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  wednesdayFlipText.textContent= (wednesdayYep.format('dddd'));
  wednesdayFlipDate.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  var thursdayYep = currentDate;
  thursdayText.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  thursdayFlipText.textContent= (thursdayYep.format('dddd'));
  thursdayFlipDate.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  var fridayYep = dayjs(currentDate).add(1, 'day');
  fridayText.textContent= (fridayYep.format('MMMM DD, YYYY'));
  fridayFlipText.textContent= (fridayYep.format('dddd'));
  fridayFlipDate.textContent= (fridayYep.format('MMMM DD, YYYY'));
  var saturdayYep = dayjs(currentDate).add(2, 'day');
  saturdayText.textContent= (saturdayYep.format('MMMM DD, YYYY'));
  saturdayFlipText.textContent= (saturdayYep.format('dddd'));
  saturdayFlipDate.textContent= (saturdayYep.format('MMMM DD, YYYY'));
}   else if (dayjs().day() === 5) {
  var sundayYep = dayjs(currentDate).add(-5, 'day');
  sundayText.textContent= (sundayYep.format('MMMM DD, YYYY'));
  sundayFlipText.textContent= (sundayYep.format('dddd'));
  sundayFlipDate.textContent= (sundayYep.format('MMMM DD, YYYY'));
  var mondayYep = dayjs(currentDate).add(-4, 'day');
  mondayText.textContent= (mondayYep.format('MMMM DD, YYYY'));
  mondayFlipText.textContent= (mondayYep.format('dddd'));
  mondayFlipDate.textContent= (mondayYep.format('MMMM DD, YYYY'));
  var tuesdayYep = dayjs(currentDate).add(-3, 'day'); 
  tuesdayText.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  tuesdayFlipText.textContent= (tuesdayYep.format('dddd'));
  tuesdayFlipDate.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  var wednesdayYep =  dayjs(currentDate).add(-2, 'day'); 
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  wednesdayFlipText.textContent= (wednesdayYep.format('dddd'));
  wednesdayFlipDate.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  var thursdayYep = dayjs(currentDate).add(-1, 'day');
  thursdayText.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  thursdayFlipText.textContent= (thursdayYep.format('dddd'));
  thursdayFlipDate.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  var fridayYep = currentDate;
  fridayText.textContent= (fridayYep.format('MMMM DD, YYYY'));
  fridayFlipText.textContent= (fridayYep.format('dddd'));
  fridayFlipDate.textContent= (fridayYep.format('MMMM DD, YYYY'));
  var saturdayYep = dayjs(currentDate).add(1, 'day');
  saturdayText.textContent= (saturdayYep.format('MMMM DD, YYYY'));
  saturdayFlipText.textContent= (saturdayYep.format('dddd'));
  saturdayFlipDate.textContent= (saturdayYep.format('MMMM DD, YYYY'));
}  else if (dayjs().day() === 6) {
  var sundayYep = dayjs(currentDate).add(-6, 'day');
  sundayText.textContent= (sundayYep.format('MMMM DD, YYYY'));
  sundayFlipText.textContent= (sundayYep.format('dddd'));
  sundayFlipDate.textContent= (sundayYep.format('MMMM DD, YYYY'));
  var mondayYep = dayjs(currentDate).add(-5, 'day');
  mondayText.textContent= (mondayYep.format('MMMM DD, YYYY'));
  mondayFlipText.textContent= (mondayYep.format('dddd'));
  mondayFlipDate.textContent= (mondayYep.format('MMMM DD, YYYY'));
  var tuesdayYep = dayjs(currentDate).add(-4, 'day'); 
  tuesdayText.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  tuesdayFlipText.textContent= (tuesdayYep.format('dddd'));
  tuesdayFlipDate.textContent= (tuesdayYep.format('MMMM DD, YYYY'));
  var wednesdayYep =  dayjs(currentDate).add(-3, 'day'); 
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  wednesdayFlipText.textContent= (wednesdayYep.format('dddd'));
  wednesdayFlipDate.textContent= (wednesdayYep.format('MMMM DD, YYYY'));
  var thursdayYep = dayjs(currentDate).add(-2, 'day');
  thursdayText.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  thursdayFlipText.textContent= (thursdayYep.format('dddd'));
  thursdayFlipDate.textContent= (thursdayYep.format('MMMM DD, YYYY'));
  var fridayYep = dayjs(currentDate).add(-1, 'day'); 
  fridayText.textContent= (fridayYep.format('MMMM DD, YYYY'));
  fridayFlipText.textContent= (fridayYep.format('dddd'));
  fridayFlipDate.textContent= (fridayYep.format('MMMM DD, YYYY'));
  var saturdayYep = currentDate;
  saturdayText.textContent= (saturdayYep.format('MMMM DD, YYYY'));
  saturdayFlipText.textContent= (saturdayYep.format('dddd'));
  saturdayFlipDate.textContent= (saturdayYep.format('MMMM DD, YYYY'));
}
}


getDates();

// reset button clears all localStorage 
var resetButton = $('#reset');
resetButton.click(function() {
  
  window.localStorage.clear();
  location.reload(); //refreshes the page
  
});


//slider functions
$('#sunday .energy-percent').html($("#sunday .energy-percent").siblings().children(".energy-slide").val() + "%");
$('#sunday .stress-percent').html($("#sunday .stress-percent").siblings().children(".stress-slide").val() + "%");
$(document).on('input', '.energy-slide', function() {
  $('#sunday .energy-percent').html($("#sunday .energy-percent").siblings().children(".energy-slide").val() + "%");
});
$(document).on('input', '.stress-slide', function() {
  $('#sunday .stress-percent').html($("#sunday .stress-percent").siblings().children(".stress-slide").val() + "%");
});

$('#monday .energy-percent').html($("#monday .energy-percent").siblings().children(".energy-slide").val() + "%");
$('#monday .stress-percent').html($("#monday .stress-percent").siblings().children(".stress-slide").val() + "%");
$(document).on('input', '.energy-slide', function() {
  $('#monday .energy-percent').html($("#monday .energy-percent").siblings().children(".energy-slide").val() + "%");
});
$(document).on('input', '.stress-slide', function() {
  $('#monday .stress-percent').html($("#monday .stress-percent").siblings().children(".stress-slide").val() + "%");
});

$('#tuesday .energy-percent').html($("#tuesday .energy-percent").siblings().children(".energy-slide").val() + "%");
$('#tuesday .stress-percent').html($("#tuesday .stress-percent").siblings().children(".stress-slide").val() + "%");
$(document).on('input', '.energy-slide', function() {
  $('#tuesday .energy-percent').html($("#tuesday .energy-percent").siblings().children(".energy-slide").val() + "%");
});
$(document).on('input', '.stress-slide', function() {
  $('#tuesday .stress-percent').html($("#tuesday .stress-percent").siblings().children(".stress-slide").val() + "%");
});

$('#wednesday .energy-percent').html($("#wednesday .energy-percent").siblings().children(".energy-slide").val() + "%");
$('#wednesday .stress-percent').html($("#wednesday .stress-percent").siblings().children(".stress-slide").val() + "%");
$(document).on('input', '.energy-slide', function() {
  $('#wednesday .energy-percent').html($("#wednesday .energy-percent").siblings().children(".energy-slide").val() + "%");
});
$(document).on('input', '.stress-slide', function() {
  $('#wednesday .stress-percent').html($("#wednesday .stress-percent").siblings().children(".stress-slide").val() + "%");
});

$('#thursday .energy-percent').html($("#thursday .energy-percent").siblings().children(".energy-slide").val() + "%");
$('#thursday .stress-percent').html($("#thursday .stress-percent").siblings().children(".stress-slide").val() + "%");
$(document).on('input', '.energy-slide', function() {
  $('#thursday .energy-percent').html($("#thursday .energy-percent").siblings().children(".energy-slide").val() + "%");
});
$(document).on('input', '.stress-slide', function() {
  $('#thursday .stress-percent').html($("#thursday .stress-percent").siblings().children(".stress-slide").val() + "%");
});

$('#friday .energy-percent').html($("#friday .energy-percent").siblings().children(".energy-slide").val() + "%");
$('#friday .stress-percent').html($("#friday .stress-percent").siblings().children(".stress-slide").val() + "%");
$(document).on('input', '.energy-slide', function() {
  $('#friday .energy-percent').html($("#friday .energy-percent").siblings().children(".energy-slide").val() + "%");
});
$(document).on('input', '.stress-slide', function() {
  $('#friday .stress-percent').html($("#friday .stress-percent").siblings().children(".stress-slide").val() + "%");
});

$('#saturday .energy-percent').html($("#saturday .energy-percent").siblings().children(".energy-slide").val() + "%");
$('#saturday .stress-percent').html($("#saturday .stress-percent").siblings().children(".stress-slide").val() + "%");
$(document).on('input', '.energy-slide', function() {
  $('#saturday .energy-percent').html($("#saturday .energy-percent").siblings().children(".energy-slide").val() + "%");
});
$(document).on('input', '.stress-slide', function() {
  $('#saturday .stress-percent').html($("#saturday .stress-percent").siblings().children(".stress-slide").val() + "%");
});


//SAVE BUTTON FUNCTIONALITY
$(".save").click(function(event) {
  event.preventDefault();
  var inputArray = [];
  var videoArray = [];
  var thumbArray = [];

  var dayData = $(this).parent().parent().attr("id");

  var flip = $(this).parent().parent().siblings(); //the flip
  var form = $(this).parent().parent(); //the form

  var waterInput = $(this).siblings().children().children(".water-qty").val();
  var stressInput = $(this).siblings().children().children(".stress-slide").val();
  var moodInput = $(this).siblings().children().children().children("input[name=mood]:radio:checked").val();
  var energyInput = $(this).siblings().children().children(".energy-slide").val();
  var sleepInput = $(this).siblings().children(".hours-sleep").find(":selected").val();

  var waterDisplay = $(this).parent().parent().siblings().children().children().children(".water-display");
  var stressDisplay = $(this).parent().parent().siblings().children().children().children(".stress-display");
  var sleepDisplay = $(this).parent().parent().siblings().children().children().children(".sleep-display");
  var energyDisplay = $(this).parent().parent().siblings().children().children().children(".energy-display");
  var moodDisplay = $(this).parent().parent().siblings().children(".block-mood");

  var setLink = $(this).parent().parent().siblings().children().children().children().children(".youtube-link");
  var setImg = $(this).parent().parent().siblings().children(".block-music");

  inputArray.push(waterInput, stressInput, moodInput, energyInput, sleepInput);
  localStorage.setItem(dayData, JSON.stringify(inputArray));

  flip.css("display", "block");
  form.css("display", "none");

  if (moodInput == "happy") {
    moodDisplay.addClass("happy-back");
    moodDisplay.removeClass("neutral-back");
    moodDisplay.removeClass("sad-back");
    moodDisplay.removeClass("stressed-back");
  } else if (moodInput == "neutral") {
    moodDisplay.addClass("neutral-back");
    moodDisplay.removeClass("happy-back");
    moodDisplay.removeClass("sad-back");
    moodDisplay.removeClass("stressed-back");
  } else if (moodInput == "sad") {
    moodDisplay.addClass("sad-back");
    moodDisplay.removeClass("neutral-back");
    moodDisplay.removeClass("happpy-back");
    moodDisplay.removeClass("stressed-back");
  } else if (moodInput == "angry") {
    moodDisplay.addClass("stressed-back");
    moodDisplay.removeClass("neutral-back");
    moodDisplay.removeClass("sad-back");
    moodDisplay.removeClass("happy-back");
  };

  waterDisplay.text("Water: " + waterInput + " units");
  stressDisplay.text("Stress Level: " + stressInput + "%");
  sleepDisplay.text("Slept " + sleepInput + " hours");
  energyDisplay.text("Energy Level: " + energyInput + "%");

  //yt api stuff

  var apiKey = "&key=AIzaSyBTgwqLQXrNGV8cBN_dax-0Sh54ihhk-_A";
  var requestPlaylist = "https://youtube.googleapis.com/youtube/v3/playlists?max_results=20&part=snippet&channelId=UCwba4_oWoLr5T5Qeqx-YGNw" + apiKey;

  fetch(requestPlaylist).then(function(response) {
  return response.json();
}).then(function(data) {
  var playlist;

for (var i = 0; i < data.items.length; i++) {
if (data.items[i].snippet.title == "Mood:Happy") {
  if (moodInput == "happy") {
    playlist = data.items[i].id;
  };
} else if (data.items[i].snippet.title == "Mood:Neutral") {
  if (moodInput == "neutral") {
    playlist = data.items[i].id;
  };
} else if (data.items[i].snippet.title == "Mood:Sad") {
  if (moodInput == "sad") {
    playlist = data.items[i].id;
  };
}  else if (data.items[i].snippet.title == "Mood:Angry") {
  if (moodInput == "angry") {
    playlist = data.items[i].id;
  };
};
}; //this for loop goes through the data of playlists and selects one based on MOOD

var requestVideo = "https://youtube.googleapis.com/youtube/v3/playlistItems?max_results=20&part=snippet&playlistId=" + playlist + apiKey;

fetch(requestVideo).then(function(response) {
  return response.json();
}).then(function(data) {

  for (var i = 0; i < Math.floor(Math.random() * data.items.length + 1); i++) {
      var video = data.items[i].snippet.resourceId.videoId;

      setLink.attr("href", "https://www.youtube.com/watch?v=" + video + "&list=" + playlist);
      setLink.attr("target", "_blank");
      setImg.css("background-image", "url(" + data.items[i].snippet.thumbnails.medium.url + ")"); //pulls thumbnail and sets bg image           
      };

      videoArray.push(setLink.attr("href"));
      thumbArray.push(setImg.css("background-image"));
      localStorage.setItem(dayData + "-video", JSON.stringify(videoArray));
      localStorage.setItem(dayData + "-thumbnail", JSON.stringify(thumbArray));

  });
});
  weatherGrab();
  checkTrue();

});

//EDIT BUTTON
$(".edit").click(function(event) {
  event.preventDefault();

  var flip = $(this).parent(); //the flip
  var form = $(this).parent().siblings(); //the form

  flip.css("display", "none");
  form.css("display", "block");

});

//LOCAL STORAGE------------------------------------------------------------------

//SUNDAY
var sundayString = localStorage.getItem("sunday");
var sundayData = JSON.parse(sundayString);

var sundayVidString = localStorage.getItem("sunday-video");
var sundayVideoData = JSON.parse(sundayVidString);

var sundayThumbString = localStorage.getItem("sunday-thumbnail");
var sundayThumbData = JSON.parse(sundayThumbString);

if (sundayString) {
  $("#sunday").css("display", "none");
  $("#flip-sunday").css("display", "block");

  $("#flip-sunday .water-display").text("Water: " + sundayData[0] + " units");
  $("#flip-sunday .stress-display").text("Stress Level: " + sundayData[1] + "%");

  if (sundayData[2] == "happy") {
    $("#flip-sunday .block-mood").addClass("happy-back");
  } else if (sundayData[2] == "neutral") {
    $("#flip-sunday .block-mood").addClass("neutral-back");
  } else if (sundayData[2] == "sad") {
    $("#flip-sunday .block-mood").addClass("sad-back");
  } else if (sundayData[2] == "angry") {
    $("#flip-sunday .block-mood").addClass("stressed-back");
  };

  $("#flip-sunday .energy-display").text("Energy Level: " + sundayData[3] + "%");
  $("#flip-sunday .sleep-display").text("Slept " + sundayData[4] + " hours");

  $("#flip-sunday .youtube-link").attr("href", sundayVideoData);
  $("#flip-sunday .block-music").css("background-image", sundayThumbData);
};

//MONDAY
var mondayString = localStorage.getItem("monday");
var mondayData = JSON.parse(mondayString);

var mondayVidString = localStorage.getItem("monday-video");
var mondayVideoData = JSON.parse(mondayVidString);

var mondayThumbString = localStorage.getItem("monday-thumbnail");
var mondayThumbData = JSON.parse(mondayThumbString);

if (mondayString) {
  $("#monday").css("display", "none");
  $("#flip-monday").css("display", "block");

  $("#flip-monday .water-display").text("Water: " + mondayData[0] + " units");
  $("#flip-monday .stress-display").text("Stress Level: " + mondayData[1] + "%");

  if (mondayData[2] == "happy") {
    $("#flip-monday .block-mood").addClass("happy-back");
  } else if (mondayData[2] == "neutral") {
    $("#flip-monday .block-mood").addClass("neutral-back");
  } else if (mondayData[2] == "sad") {
    $("#flip-monday .block-mood").addClass("sad-back");
  } else if (mondayData[2] == "angry") {
    $("#flip-monday .block-mood").addClass("stressed-back");
  };

  $("#flip-monday .energy-display").text("Energy Level: " + mondayData[3] + "%");
  $("#flip-monday .sleep-display").text("Slept " + mondayData[4] + " hours");

  $("#flip-monday .youtube-link").attr("href", mondayVideoData);
  $("#flip-monday .block-music").css("background-image", mondayThumbData);
};

//TUESDAY
var tuesdayString = localStorage.getItem("tuesday");
var tuesdayData = JSON.parse(tuesdayString);

var tuesdayVidString = localStorage.getItem("tuesday-video");
var tuesdayVideoData = JSON.parse(tuesdayVidString);

var tuesdayThumbString = localStorage.getItem("tuesday-thumbnail");
var tuesdayThumbData = JSON.parse(tuesdayThumbString);

if (tuesdayString) {
  $("#tuesday").css("display", "none");
  $("#flip-tuesday").css("display", "block");

  $("#flip-tuesday .water-display").text("Water: " + tuesdayData[0] + " units");
  $("#flip-tuesday .stress-display").text("Stress Level: " + tuesdayData[1] + "%");

  if (tuesdayData[2] == "happy") {
    $("#flip-tuesday .block-mood").addClass("happy-back");
  } else if (tuesdayData[2] == "neutral") {
    $("#flip-tuesday .block-mood").addClass("neutral-back");
  } else if (tuesdayData[2] == "sad") {
    $("#flip-tuesday .block-mood").addClass("sad-back");
  } else if (tuesdayData[2] == "angry") {
    $("#flip-tuesday .block-mood").addClass("stressed-back");
  };

  $("#flip-tuesday .energy-display").text("Energy Level: " + tuesdayData[3] + "%");
  $("#flip-tuesday .sleep-display").text("Slept " + tuesdayData[4] + " hours");

  $("#flip-tuesday .youtube-link").attr("href", tuesdayVideoData);
  $("#flip-tuesday .block-music").css("background-image", tuesdayThumbData);
};

//WEDNESDAY
var wednesdayString = localStorage.getItem("wednesday");
var wednesdayData = JSON.parse(wednesdayString);

var wednesdayVidString = localStorage.getItem("wednesday-video");
var wednesdayVideoData = JSON.parse(wednesdayVidString);

var wednesdayThumbString = localStorage.getItem("wednesday-thumbnail");
var wednesdayThumbData = JSON.parse(wednesdayThumbString);

if (wednesdayString) {
  $("#wednesday").css("display", "none");
  $("#flip-wednesday").css("display", "block");

  $("#flip-wednesday .water-display").text("Water: " + wednesdayData[0] + " units");
  $("#flip-wednesday .stress-display").text("Stress Level: " + wednesdayData[1] + "%");

  if (wednesdayData[2] == "happy") {
    $("#flip-wednesday .block-mood").addClass("happy-back");
  } else if (wednesdayData[2] == "neutral") {
    $("#flip-wednesday .block-mood").addClass("neutral-back");
  } else if (wednesdayData[2] == "sad") {
    $("#flip-wednesday .block-mood").addClass("sad-back");
  } else if (wednesdayData[2] == "angry") {
    $("#flip-wednesday .block-mood").addClass("stressed-back");
  };

  $("#flip-wednesday .energy-display").text("Energy Level: " + wednesdayData[3] + "%");
  $("#flip-wednesday .sleep-display").text("Slept " + wednesdayData[4] + " hours");

  $("#flip-wednesday .youtube-link").attr("href", wednesdayVideoData);
  $("#flip-wednesday .block-music").css("background-image", wednesdayThumbData);
};

//THURSDAY
var thursdayString = localStorage.getItem("thursday");
var thursdayData = JSON.parse(thursdayString);

var thursdayVidString = localStorage.getItem("thursday-video");
var thursdayVideoData = JSON.parse(thursdayVidString);

var thursdayThumbString = localStorage.getItem("thursday-thumbnail");
var thursdayThumbData = JSON.parse(thursdayThumbString);

if (thursdayString) {
  $("#thursday").css("display", "none");
  $("#flip-thursday").css("display", "block");

  $("#flip-thursday .water-display").text("Water: " + thursdayData[0] + " units");
  $("#flip-thursday .stress-display").text("Stress Level: " + thursdayData[1] + "%");

  if (thursdayData[2] == "happy") {
    $("#flip-thursday .block-mood").addClass("happy-back");
  } else if (thursdayData[2] == "neutral") {
    $("#flip-thursday .block-mood").addClass("neutral-back");
  } else if (thursdayData[2] == "sad") {
    $("#flip-thursday .block-mood").addClass("sad-back");
  } else if (thursdayData[2] == "angry") {
    $("#flip-thursday .block-mood").addClass("stressed-back");
  };

  $("#flip-thursday .energy-display").text("Energy Level: " + thursdayData[3] + "%");
  $("#flip-thursday .sleep-display").text("Slept " + thursdayData[4] + " hours");

  $("#flip-thursday .youtube-link").attr("href", thursdayVideoData);
  $("#flip-thursday .block-music").css("background-image", thursdayThumbData);
};

//FRIDAY
var fridayString = localStorage.getItem("friday");
var fridayData = JSON.parse(fridayString);

var fridayVidString = localStorage.getItem("friday-video");
var fridayVideoData = JSON.parse(fridayVidString);

var fridayThumbString = localStorage.getItem("friday-thumbnail");
var fridayThumbData = JSON.parse(fridayThumbString);

if (fridayString) {
  $("#friday").css("display", "none");
  $("#flip-friday").css("display", "block");

  $("#flip-friday .water-display").text("Water: " + fridayData[0] + " units");
  $("#flip-friday .stress-display").text("Stress Level: " + fridayData[1] + "%");

  if (fridayData[2] == "happy") {
    $("#flip-friday .block-mood").addClass("happy-back");
  } else if (fridayData[2] == "neutral") {
    $("#flip-friday .block-mood").addClass("neutral-back");
  } else if (fridayData[2] == "sad") {
    $("#flip-friday .block-mood").addClass("sad-back");
  } else if (fridayData[2] == "angry") {
    $("#flip-friday .block-mood").addClass("stressed-back");
  };

  $("#flip-friday .energy-display").text("Energy Level: " + fridayData[3] + "%");
  $("#flip-friday .sleep-display").text("Slept " + fridayData[4] + " hours");

  $("#flip-friday .youtube-link").attr("href", fridayVideoData);
  $("#flip-friday .block-music").css("background-image", fridayThumbData);
};

//SATURDAY
var saturdayString = localStorage.getItem("saturday");
var saturdayData = JSON.parse(saturdayString);

var saturdayVidString = localStorage.getItem("saturday-video");
var saturdayVideoData = JSON.parse(saturdayVidString);

var saturdayThumbString = localStorage.getItem("saturday-thumbnail");
var saturdayThumbData = JSON.parse(saturdayThumbString);

if (saturdayString) {
  $("#saturday").css("display", "none");
  $("#flip-saturday").css("display", "block");

  $("#flip-saturday .water-display").text("Water: " + saturdayData[0] + " units");
  $("#flip-saturday .stress-display").text("Stress Level: " + saturdayData[1] + "%");

  if (saturdayData[2] == "happy") {
    $("#flip-saturday .block-mood").addClass("happy-back");
  } else if (saturdayData[2] == "neutral") {
    $("#flip-saturday .block-mood").addClass("neutral-back");
  } else if (saturdayData[2] == "sad") {
    $("#flip-saturday .block-mood").addClass("sad-back");
  } else if (saturdayData[2] == "angry") {
    $("#flip-saturday .block-mood").addClass("stressed-back");
  };

  $("#flip-saturday .energy-display").text("Energy Level: " + saturdayData[3] + "%");
  $("#flip-saturday .sleep-display").text("Slept " + saturdayData[4] + " hours");

  $("#flip-saturday .youtube-link").attr("href", saturdayVideoData);
  $("#flip-saturday .block-music").css("background-image", saturdayThumbData);
};

//////////////////////modal buttons and functions

var xButton = $(".modal-close");
var continueButton = $(".continue");
var updateButton = $(".continue2")
var startButton = $('#starting');
var conditionalButton = $('#mistake');
var closeButton = $('#close')
var modalEl = $('#modal');
var modalBack = $(".modal-background");
var endButton = $('#ending');
var modalEndEl = $('#modal-wrap');
var modalSorryEl = $('#modal-conditional');



  $(startButton).click(function(event) {
    event.preventDefault();
   $( modalEl ).addClass ("is-active");
   $(xButton).removeClass("hidden");
});

$(modalBack).click(function(event) {
  event.preventDefault();
  $ (modalEl).removeClass("is-active");
  $ (modalEndEl).removeClass("is-active");
  $ (xButton).toggleClass("hidden");
})

$(continueButton).click(function(event) {
  event.preventDefault();
  $(modalEl).removeClass("is-active");
  $(modalEndEl).removeClass("is-active");
  $ (xButton).toggleClass("hidden");
  
})

$(updateButton).click(function(event){
  event.preventDefault();
  $(modalSorryEl).removeClass("is-active");
  $(xButton).toggleClass("hidden");
})

$(conditionalButton).click(function(event) {
  event.preventDefault();
 $( modalSorryEl ).addClass ("is-active");
 $(xButton).removeClass("hidden");
});

$(xButton).click(function(event) {
  event.preventDefault();
  $(modalEl).removeClass("is-active");
  $(modalEndEl).removeClass("is-active");
  $(modalSorryEl).removeClass("is-active");
  $ (xButton).addClass("hidden");
})

$(closeButton).click(function(event) {
  event.preventDefault();
  $(modalEl).removeClass("is-active");
  $(modalEndEl).removeClass("is-active");
  $(modalSorryEl).removeClass("is-active");
  $(endButton).removeClass("hidden");
  $ (xButton).addClass("hidden");

})

$(endButton).click(function(event) {
  event.preventDefault();
 $( modalEndEl ).addClass ("is-active");
 $(xButton).removeClass("hidden");
});

//////////end Modal functions
var storedWeather = JSON.parse(localStorage.getItem("Weather Code")) || [];
// weatherGrab
function weatherGrab () {
  var userLocationInput = document.getElementById('userLocation');
  console.log();
  var currentLocation = userLocationInput.value;
  // var flip2 = $(this).parent().parent().siblings();
  // var forecastCurrentCity = $(this).parent().parent().siblings().children(".block-weather");
  // var forecastTempFlip = $(this).parent().parent().siblings().children().children().children().children(".temp-flip");
  var forecastCurrentCity = $('.block-weather');
  var forecastWeatherFlip = $('.weather');
  console.log(forecastCurrentCity);
  var targetDate = dayjs(currentDate).unix();
  // var storedWeather = JSON.parse(localStorage.getItem("Weather Code")) || [];
  console.log(targetDate);

  // fetch request
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+currentLocation+',us&APPID=e59d5aba827db96109ea6ce009719b60&units=imperial&dt='+targetDate)
      .then(function (response) {
          console.log(response);
          if (response.ok != true) {
            var modal = $('#modal');
            modal.addClass('is-active');
            var userCity = $('#userCity');
            userCity.text("Please re-enter your city");
            return;
          } else {
          return response.json();
          }
      })
      .then(function (data) {
          console.log(data);
          console.log(currentLocation);
          console.log(data.weather[0].description);
          var dailyWeather = (data.weather[0].id);
          console.log(dailyWeather);
          storedWeather.push(dailyWeather);
          localStorage.setItem("Weather Code", JSON.stringify(storedWeather));
          weatherLocalStorage();

});
}

// weather local storage
function weatherLocalStorage() {
  var blockWeatherSunday = $('#block-weather-sunday');
  var weatherSunday = $('#weather-Sunday');
  if (storedWeather[0] == 800) {
  blockWeatherSunday.attr("style","background-image:url(./assets/images/sunny.png)");
  weatherSunday.hide();
  
} else if (storedWeather[0] > 800 && storedWeather[0] < 805) {
  blockWeatherSunday.attr("style","background-image:url(./assets/images/cloudy.png)");
  weatherSunday.hide();
  
} else if (storedWeather[0] > 499 && storedWeather[0] < 521) {
  blockWeatherSunday.attr("style","background-image:url(./assets/images/rain.png)");
  weatherSunday.hide();
  
} else if (storedWeather[0] > 199 && storedWeather[0] < 233) {
  blockWeatherSunday.attr("style","background-image:url(./assets/images/storm.png)");
  weatherSunday.hide();
  
} else if (storedWeather[0] > 599 && storedWeather[0] < 623) {
  blockWeatherSunday.attr("style","background-image:url(./assets/images/snow.png)");
  weatherSunday.hide();
  
} else if (storedWeather[0] === 741) {
  blockWeatherSunday.attr("style","background-image:url(./assets/images/fog.png)");
  weatherSunday.hide();
  
} else {
  blockWeatherSunday.attr("style","background-image:url(./assets/images/weatherback.jpg)");   
}

// monday weather
var blockWeatherMonday = $('#block-weather-monday');
var weatherMonday = $('#weather-Monday');
if (storedWeather[1] == 800) {
  blockWeatherMonday.attr("style","background-image:url(./assets/images/sunny.png)");
  weatherMonday.hide();
  
} else if (storedWeather[1] > 800 && storedWeather[1] < 805) {
  blockWeatherMonday.attr("style","background-image:url(./assets/images/cloudy.png)");
  weatherMonday.hide();
  
} else if (storedWeather[1] > 499 && storedWeather[1] < 521) {
  blockWeatherMonday.attr("style","background-image:url(./assets/images/rain.png)");
  weatherMonday.hide();
  
} else if (storedWeather[1] > 199 && storedWeather[1] < 233) {
  blockWeatherMonday.attr("style","background-image:url(./assets/images/storm.png)");
  weatherMonday.hide();
  
} else if (storedWeather[1] > 599 && storedWeather[1] < 623) {
  blockWeatherMonday.attr("style","background-image:url(./assets/images/snow.png)");
  weatherMonday.hide();
  
} else if (storedWeather[1] === 741) {
  blockWeatherMonday.attr("style","background-image:url(./assets/images/fog.png)");
  weatherMonday.hide();
  
} else {
  blockWeatherMonday.attr("style","background-image:url(./assets/images/weatherback.jpg)");   
}

// tuesday weather
var blockWeatherTuesday = $('#block-weather-tuesday');
var weatherTuesday = $('#weather-Tuesday');
if (storedWeather[2] == 800) {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/sunny.png)");
  weatherTuesday.hide();
  
} else if (storedWeather[2] > 800 && storedWeather[2] < 805) {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/cloudy.png)");
  weatherTuesday.hide();
  
} else if (storedWeather[2] > 499 && storedWeather[2] < 521) {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/rain.png)");
  weatherTuesday.hide();
  
} else if (storedWeather[2] > 199 && storedWeather[2] < 233) {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/storm.png)");
  weatherTuesday.hide();
  
} else if (storedWeather[2] > 599 && storedWeather[2] < 623) {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/snow.png)");
  weatherTuesday.hide();
  
} else if (storedWeather[2] === 741) {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/fog.png)");
  weatherTuesday.hide();
  
} else {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/weatherback.jpg)");   
}

// wednesday weather
var blockWeatherWednesday = $('#block-weather-wednesday');
var weatherWednesday = $('#weather-Wednesday');
if (storedWeather[3] == 800) {
  blockWeatherWednesday.attr("style","background-image:url(./assets/images/sunny.png)");
  weatherWednesday.hide();
  
} else if (storedWeather[3] > 800 && storedWeather[3] < 805) {
  blockWeatherWednesday.attr("style","background-image:url(./assets/images/cloudy.png)");
  weatherWednesday.hide();
  
} else if (storedWeather[3] > 499 && storedWeather[3] < 521) {
  blockWeatherWednesday.attr("style","background-image:url(./assets/images/rain.png)");
  weatherWednesday.hide();
  
} else if (storedWeather[3] > 199 && storedWeather[3] < 233) {
  blockWeatherWednesday.attr("style","background-image:url(./assets/images/storm.png)");
  weatherWednesday.hide();
  
} else if (storedWeather[3] > 599 && storedWeather[3] < 623) {
  blockWeatherWednesday.attr("style","background-image:url(./assets/images/snow.png)");
  weatherWednesday.hide();
  
} else if (storedWeather[3] === 741) {
  blockWeatherTuesday.attr("style","background-image:url(./assets/images/fog.png)");
  weatherWednesday.hide();
  
} else {
  blockWeatherWednesday.attr("style","background-image:url(./assets/images/weatherback.jpg)");   
}

// thursday weather
var blockWeatherThursday = $('#block-weather-thursday');
var weatherThursday = $('#weather-Thursday');
if (storedWeather[4] == 800) {
  blockWeatherThursday.attr("style","background-image:url(./assets/images/sunny.png)");
  weatherThursday.hide();
  
} else if (storedWeather[4] > 800 && storedWeather[4] < 805) {
  blockWeatherThursday.attr("style","background-image:url(./assets/images/cloudy.png)");
  weatherThursday.hide();
  
} else if (storedWeather[4] > 499 && storedWeather[4] < 521) {
  blockWeatherThursday.attr("style","background-image:url(./assets/images/rain.png)");
  weatherThursday.hide();
  
} else if (storedWeather[4] > 199 && storedWeather[4] < 233) {
  blockWeatherThursday.attr("style","background-image:url(./assets/images/storm.png)");
  weatherThursday.hide();
  
} else if (storedWeather[4] > 599 && storedWeather[4] < 623) {
  blockWeatherThursday.attr("style","background-image:url(./assets/images/snow.png)");
  weatherThursday.hide();
  
} else if (storedWeather[4] === 741) {
  blockWeatherThursday.attr("style","background-image:url(./assets/images/fog.png)");
  weatherThursday.hide();
  
} else {
  blockWeatherThursday.attr("style","background-image:url(./assets/images/weatherback.jpg)");     
}

// friday weather
var blockWeatherFriday = $('#block-weather-friday');
var weatherFriday = $('#weather-Friday');
if (storedWeather[5] == 800) {
  blockWeatherFriday.attr("style","background-image:url(./assets/images/sunny.png)");
  weatherFriday.hide();
  
} else if (storedWeather[5] > 800 && storedWeather[5] < 805) {
  blockWeatherFriday.attr("style","background-image:url(./assets/images/cloudy.png)");
  weatherFriday.hide();
  
} else if (storedWeather[5] > 499 && storedWeather[5] < 521) {
  blockWeatherFriday.attr("style","background-image:url(./assets/images/rain.png)");
  weatherFriday.hide();
  
} else if (storedWeather[5] > 199 && storedWeather[5] < 233) {
  blockWeatherFriday.attr("style","background-image:url(./assets/images/storm.png)");
  weatherFriday.hide();
  
} else if (storedWeather[5] > 599 && storedWeather[5] < 623) {
  blockWeatherFriday.attr("style","background-image:url(./assets/images/snow.png)");
  weatherFriday.hide();
  
} else if (storedWeather[5] === 741) {
  blockWeatherFriday.attr("style","background-image:url(./assets/images/fog.png)");
  weatherFriday.hide();
  
} else {
  blockWeatherFriday.attr("style","background-image:url(./assets/images/weatherback.jpg)");   
}

// saturday weather
var blockWeatherSaturday = $('#block-weather-saturday');
var weatherSaturday = $('#weather-Saturday');
if (storedWeather[6] == 800) {
  blockWeatherSaturday.attr("style","background-image:url(./assets/images/sunny.png)");
  weatherSaturday.hide();
  
} else if (storedWeather[6] > 800 && storedWeather[6] < 805) {
  blockWeatherSaturday.attr("style","background-image:url(./assets/images/cloudy.png)");
  weatherSaturday.hide();
  
} else if (storedWeather[6] > 499 && storedWeather[6] < 521) {
  blockWeatherSaturday.attr("style","background-image:url(./assets/images/rain.png)");
  weatherSaturday.hide();
  
} else if (storedWeather[6] > 199 && storedWeather[6] < 233) {
  blockWeatherSaturday.attr("style","background-image:url(./assets/images/storm.png)");
  weatherSaturday.hide();
  
} else if (storedWeather[6] > 599 && storedWeather[6] < 623) {
  blockWeatherSaturday.attr("style","background-image:url(./assets/images/snow.png)");
  weatherSaturday.hide();
  
} else if (storedWeather[6] === 741) {
  blockWeatherSaturday.attr("style","background-image:url(./assets/images/fog.png)");
  weatherSaturday.hide();
  
} else {
  blockWeatherSaturday.attr("style","background-image:url(./assets/images/weatherback.jpg)");   
}

// weather average for the week
var weatherFinal = $('#weather-final');
var weatherFinalText = $('#weather-final-text');
console.log(storedWeather.length);

if (storedWeather.length === 7) {
  var weatherCount = {};
  storedWeather.forEach(function(number){
    weatherCount[number] = (weatherCount[number] || 0) + 1;
  });
  console.log(weatherCount);
  var moodMostCommon = null;
  var moodOccurrences = 0;
  for (var number in weatherCount) {
    if (weatherCount[number] > moodOccurrences) {
      moodOccurrences = weatherCount[number];
      moodMostCommon = number;
    }
  }
  if (moodOccurrences > storedWeather.length / 2) {
    console.log(moodMostCommon);
    if (moodMostCommon == 800) {
      weatherFinal.attr("style","background-image:url(./assets/images/sunny.png)");
      weatherFinalText.hide();
    } else if (moodMostCommon > 800 && moodMostCommon < 805) {
      weatherFinal.attr("style","background-image:url(./assets/images/cloudy.png)");
      weatherFinalText.hide();
    } else if (moodMostCommon > 499 && moodMostCommon < 521) {
      weatherFinal.attr("style","background-image:url(./assets/images/rain.png)");
      weatherFinalText.hide();
    } else if (moodMostCommon > 199 && moodMostCommon < 233) {
      weatherFinal.attr("style","background-image:url(./assets/images/storm.png)");
      weatherFinalText.hide();
    } else if (moodMostCommon > 599 && moodMostCommon < 623) {
      weatherFinal.attr("style","background-image:url(./assets/images/snow.png)");
      weatherFinalText.hide();
    } else if (moodMostCommon === 741) {
      weatherFinal.attr("style","background-image:url(./assets/images/fog.png)");
      weatherFinalText.hide();
    }else {
      weatherFinal.attr("style","background-image:url(./assets/images/weatherback.jpg)");
      weatherFinalText.hide();
    } 
  } 

}
}


//checks for any data in the local storage
function checkTrue() {
  if (localStorage.getItem("sunday") && localStorage.getItem("monday") && localStorage.getItem("tuesday") && localStorage.getItem("wednesday") && localStorage.getItem("thursday") && localStorage.getItem("friday") && localStorage.getItem("saturday")) {
    finalModal(); //then pulls the final stats
  };
};

function finalModal() {
  modalEndEl.addClass ("is-active");
  xButton.removeClass("hidden");

  var sundayFinal = localStorage.getItem("sunday");
  var sundayStuff = JSON.parse(sundayFinal);

  var mondayFinal = localStorage.getItem("monday");
  var mondayStuff = JSON.parse(mondayFinal);

  var tuesdayFinal = localStorage.getItem("tuesday");
  var tuesdayStuff = JSON.parse(tuesdayFinal);

  var wednesdayFinal = localStorage.getItem("wednesday");
  var wednesdayStuff = JSON.parse(wednesdayFinal);

  var thursdayFinal = localStorage.getItem("thursday");
  var thursdayStuff = JSON.parse(thursdayFinal);

  var fridayFinal = localStorage.getItem("friday");
  var fridayStuff = JSON.parse(fridayFinal);

  var saturdayFinal = localStorage.getItem("saturday");
  var saturdayStuff = JSON.parse(saturdayFinal);


  //water total
  var finalWater = parseInt(sundayStuff[0]) + parseInt(mondayStuff[0]) + parseInt(tuesdayStuff[0]) + parseInt(wednesdayStuff[0]) + parseInt(thursdayStuff[0]) + parseInt(fridayStuff[0]) + parseInt(saturdayStuff[0]);
  var finalWaterEl = $("#final-water-count");
  finalWaterEl.text(finalWater);

  //stress average
  var finalStress = (parseInt(sundayStuff[1]) + parseInt(mondayStuff[1]) + parseInt(tuesdayStuff[1]) + parseInt(wednesdayStuff[1]) + parseInt(thursdayStuff[1]) + parseInt(fridayStuff[1]) + parseInt(saturdayStuff[1])) / 7;
  var finalStressEl = $("#final-stress-level");
  finalStressEl.text(Math.round(finalStress) + "%");

  //energy average
  var finalEnergy = (parseInt(sundayStuff[3]) + parseInt(mondayStuff[3]) + parseInt(tuesdayStuff[3]) + parseInt(wednesdayStuff[3]) + parseInt(thursdayStuff[3]) + parseInt(fridayStuff[3]) + parseInt(saturdayStuff[3])) / 7;
  var finalEnergyEl = $("#final-energy-level");
  finalEnergyEl.text(Math.round(finalEnergy) + "%");

  //sleep pattern
  var finalSleep = ((parseInt(sundayStuff[4]) + parseInt(mondayStuff[4]) + parseInt(tuesdayStuff[4]) + parseInt(wednesdayStuff[4]) + parseInt(thursdayStuff[4]) + parseInt(fridayStuff[4]) + parseInt(saturdayStuff[4])) / 7).toFixed(2);
  var finalSleepRating = $("#final-sleep-rating");
  var lineTwo = $("#final-sleep-rating-2");

  if (finalSleep < 6) {
    finalSleepRating.text(finalSleep + " hours!");
    lineTwo.text("You should Sleep more!");
  } else if (finalSleep = 6 || finalSleep > 6) {
    finalSleepRating.text(finalSleep + " hours!");
    lineTwo.text("Great job!  You have an excellent Sleep Pattern!");
  } else if (finalSleep > 8) {
    finalSleepRating.text(finalSleep + " hours!");
    lineTwo.text("You should get a little less Sleep!");
  };

  //mood overall
  var blockMood = $(".mood-wrap");

  var moodArray = [sundayStuff[2], mondayStuff[2], tuesdayStuff[2], wednesdayStuff[2], thursdayStuff[2], fridayStuff[2], saturdayStuff[2]]

  if (moodArray.length === 7) {
    var moodCount = {};
    moodArray.forEach(function(number){
      moodCount[number] = (moodCount[number] || 0) + 1;
    });
    console.log(moodCount);
    var moodMostCommon = null;
    var moodOccurrences = 0;
    for (var number in moodCount) {
      if (moodCount[number] > moodOccurrences) {
        moodOccurrences = moodCount[number];
        moodMostCommon = number;

        if (moodMostCommon == "happy") {
          blockMood.addClass("happy-back");
        } else if (moodMostCommon == "neutral") {
          blockMood.addClass("neutral-back");
        } else if (moodMostCommon == "sad") {
          blockMood.addClass("sad-back");
        } else if (moodMostCommon == "angry") {
          blockMood.addClass("stressed-back");
        };
      }
    }
    console.log(moodMostCommon);
  };



  //display end of week vid

  var apiKey = "&key=AIzaSyBTgwqLQXrNGV8cBN_dax-0Sh54ihhk-_A";
  var requestPlaylist = "https://youtube.googleapis.com/youtube/v3/playlists?max_results=20&part=snippet&channelId=UCwba4_oWoLr5T5Qeqx-YGNw" + apiKey;

  fetch(requestPlaylist).then(function(response) {
  return response.json();
}).then(function(data) {
  var playlist;

  for (var i = 0; i < data.items.length; i++) {
    if (data.items[i].snippet.title == "Mood:Happy") {
      if (moodMostCommon == "happy") {
        playlist = data.items[i].id;
      };
    } else if (data.items[i].snippet.title == "Mood:Neutral") {
      if (moodMostCommon == "neutral") {
        playlist = data.items[i].id;
      };
    } else if (data.items[i].snippet.title == "Mood:Sad") {
      if (moodMostCommon == "sad") {
        playlist = data.items[i].id;
      };
    }  else if (data.items[i].snippet.title == "Mood:Angry") {
      if (moodMostCommon == "angry") {
        playlist = data.items[i].id;
      };
    };
    };

var requestVideo = "https://youtube.googleapis.com/youtube/v3/playlistItems?max_results=20&part=snippet&playlistId=" + playlist + apiKey;

fetch(requestVideo).then(function(response) {
  return response.json();
}).then(function(data) {

  for (var i = 0; i < Math.floor(Math.random() * data.items.length + 1); i++) {
      var video = data.items[i].snippet.resourceId.videoId;

      $("#final-link").attr("href", "https://www.youtube.com/watch?v=" + video + "&list=" + playlist);
      $("#final-link").attr("target", "_blank");
      $(".video-display").css("background-image", "url(" + data.items[i].snippet.thumbnails.medium.url + ")"); //pulls thumbnail and sets bg image           
      };


  });
});

};



// start screenshot code here:
// Get the modal element
// Get the modal element
function capture() {
  var modal = $('#modal-wrap');

// Create a canvas element
var canvas = document.createElement('canvas');

// Set the canvas size to the size of the modal
canvas.width = modal.width();
canvas.height = modal.height();

// Get the canvas context
var ctx = canvas.getContext('2d');

// Render the modal to the canvas
html2canvas(modal, {
  canvas: canvas,
  onrendered: function() {
    // Create a new tab
    var newTab = window.open();

    // Set the new tab's document body to the canvas
    newTab.document.body.innerHTML = canvas.toDataURL();
  }
});
}

// audio
$('.button').on('click', function () { 
  var obj = document.createElement('audio');
  obj.src = './assets/audio/click2.wav'; 
  obj.play(); 
});

$('#close').on('click', function() {
  var obj = document.createElement('audio');
  obj.src = './assets/audio/click.wav';
  obj.play();
})