$(function() {
	
	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});

	$("#button").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#projects").offset().top
    	}, 1500);
	});

	$("a[href='#projects']").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#projects").offset().top
    	}, 1500);
	});


	$("a[href='#skills']").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#skills").offset().top
    	}, 1500);
	});

	$("a[href='#about']").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#about").offset().top
    	}, 1500);
	});

	$("a[href='#contact']").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#contact").offset().top
    	}, 1500);
	});
	
	$("a[href='#main']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});
});