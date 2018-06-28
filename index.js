var slide_position = 1;

function showSlide() {
	console.log(slide_position);
	$("#slideshow img").hide();
	$("#slideshow img:nth-child(" + slide_position + ")").show();
}

function moveSlidePosition(move) {
	slide_position += move;
	if (slide_position < 1) {
		slide_position = $("#slideshow img").length + slide_position;
	}
	else {
		slide_position = Math.max(1, slide_position % ($("#slideshow img").length + 1));
	}
	showSlide();
}

$(document).ready(function() {
	showSlide();
	
	
});