$( document ).ready(function(){
	//side nav bar
    $('.button-collapse').sideNav({
    menuWidth: 170, 
    edge: 'left', 
    closeOnClick: true, 
    draggable: true
    });
	//type effect
    $('span.text-change').typed({
        strings: ["Dev.", "Design", "<CODE>"], //array text
        typeSpeed: 60,
        backDelay: 600,
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
    //scroll spy
    $('.scrollspy').scrollSpy();
    //smoove transition
    $('.smoo').smoove({opacity:'0', moveY: '90px',});
});

