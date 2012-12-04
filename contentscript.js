$(function(){
var LOADSPEED = 600;
var SPEED = 200;		
	$('#toggleSidebar').css("display", "none");
	//onLoad hiding
	$('#header').animate({height: "0px"}, {duration: LOADSPEED, queue: false});
	$('#content').animate({marginLeft: "10px"}, {duration: LOADSPEED, queue: false});
	$('#sidebar').animate({width: "0px"}, {duration: LOADSPEED, queue: false});
	
	
	//Here incase you move the moust to fast and are in an iframe when it tries to track mouse position
	$('iframe').mouseenter(function() {
		$('#header').animate({height: "0px"}, {duration: SPEED, queue: false});
		$('#content').animate({marginLeft: "10px"}, {duration: SPEED, queue: false});
		$('#sidebar').animate({width: "0px"}, {duration: SPEED, queue: false});
	});

	$(document).mousemove(function(e) {
		if (e.pageY < 40) {
			$('#header').animate({height: "44px"}, {duration: SPEED, queue: false});
		} else {
			$('#header').animate({height: "0px"}, {duration: SPEED, queue: false});
		}
		
		if (e.pageX < 5) {
			$('#content').animate({marginLeft: "232px"}, {duration: SPEED, queue: false});
			$('#sidebar').animate({width: "217px"}, {duration: SPEED, queue: false});
		} else if (e.pageX > 217) {
			$('#content').animate({marginLeft: "10px"}, {duration: SPEED, queue: false});
			$('#sidebar').animate({width: "0px"}, {duration: SPEED, queue: false});
		}
	});
});
