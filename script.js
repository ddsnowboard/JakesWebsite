$(document).ready(function() {
	console.log($(".leftText").width());
	$(".leftText").css("width", ($("#img-left").width()).toString+"px");
});