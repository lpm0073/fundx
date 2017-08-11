/*
$(document).ready(function() {
	$(".sections-wrapper").sectionsnap();
});
*/

$(document).ready(function() {
	$(".sections-wrapper").sectionsnap({
		delay 			: 100
		, selector 		: '.section'
		, reference 	: .9
		, animationTime : 400
		, offsetTop 	: 0
		, offsetBottom 	: 0
	});
});
