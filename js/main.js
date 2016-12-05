$( document ).ready(function(){
	//side nav bar
	$(".button-collapse").sideNav();

    //parallax
    $('.parallax').parallax();

	//type effect
    $("span.text-change").typed({
        strings: ["Dev.", "Design", "<CODE>"],
        typeSpeed: 60, // typing speed
        backDelay: 600, // pause before backspacing
        callback: function () { $(this) }
    });

    //smooth scrolling
    $(function(){
    	$('a[href*="#"]').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	            if ($target.length) {
	                var targetOffset = $target.offset().top;
	                $('html,body').animate({scrollTop: targetOffset}, 1000);
	                return false;
	            }
       		}
   		});
	});
	$('.tooltipped').tooltip({delay: 50});

});

