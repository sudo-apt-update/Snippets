var t = "AM";
var d = new Date();
var date = d.toDateString();

function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function amPM(j) {
	if (j > 12) {
		j -= 12;
		t = "PM";
	}
	return j;
}

var h = addZero(amPM(d.getHours()));
var time = " " + h + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());

window.onload = function() {
	document.getElementById("footer").innerHTML = "Page loaded  " + date + " " + time + " " + t + "; Site edited Sat Aug 29 2020";
}
