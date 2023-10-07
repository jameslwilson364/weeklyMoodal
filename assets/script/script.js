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
  fridayText.textContent= (fridayYep);
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
  wednesdayText.textContent= (wednesdayYep.format('MMMM DD, YYYYY'));
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
  saturdayText.textContent= (saturdayYep);
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
  } else if (moodInput == "neutral") {
    moodDisplay.addClass("neutral-back");
  } else if (moodInput == "sad") {
    moodDisplay.addClass("sad-back");
  } else if (moodInput == "angry") {
    moodDisplay.addClass("stressed-back");
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


var continueButton = $('#continue');
var startButton = $('#starting');
var modalEl = $('#modal');
var modalBack = $(".modal-background");


  $(startButton).click(function(event) {
    event.preventDefault();
   $( modalEl ).addClass ("is-active");
});

$(modalBack).click(function(event) {
  event.preventDefault();
  $ (modalEl).removeClass("is-active");
})

$(continueButton).click(function(event) {
  event.preventDefault();
  $(modalEl).removeClass("is-active");
})