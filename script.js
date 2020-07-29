// Lets get started

// Pull elements 

// Set Todays Date
nowIs = moment(new Date()).format("MM/DD/YYYY");
nowTime = moment(new Date()).format("HH");

console.log("Now is" + nowTime);

$("#todayIs").text(nowIs);

// Calculate Number of slots
var startHour = 7; // 7 AM
var endHour = 21; // 9 PM

// Lets generate blocks for each hour
for (i = startHour; i < endHour + 1; i++) {
	var slot = $("<div>");
	slot.addClass("slot");
	slot.attr("data-id","slot"+i);

	var timeFormat = moment(i + ":00", 'HH:mm').format('hh:mm a');

	var lsVal = localStorage.getItem("slot"+i);

	if (!lsVal) { lsVal = ''};

	var colorCodeMe;

	if (nowTime < i) { slot.addClass("past");}
	else if (nowTime == i) { slot.addClass("present");}
	else { slot.addClass("future");}

	slot.html("<div class='row'><div class='col-2'>" + timeFormat + "</div><div class='col-10'><textarea id='slot" + i + "textarea'>" + lsVal + "</textarea></div></div>");
	$("#container").append(slot);
}

// Listeners
$("textarea").keyup(function(e) {
	e.preventDefault();

	var parentDiv = $(this).parent().parent().parent().attr('data-id');
	var textArea = $("#" + parentDiv + "textarea").val();

	localStorage.setItem(parentDiv, textArea);
	
	console.log("parentDiv is : " + parentDiv);
	console.log("textArea val is: " + textArea);
});