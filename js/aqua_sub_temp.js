$(document).ready(function(){
	$(" .sub_menu_ssub").hide();
	$(".sub_menu_sub").click(function(){
		if ($(" .sub_menu_ssub").css("display")=="none")
		{
			$(" .sub_menu_ssub").slideDown();
		}else{
			$(" .sub_menu_ssub").slideUp();
		}
	});
	$(" .sub_menu_sub_ssub").hide();
	$(".sub_menu_sub_sub").click(function(){
		if ($(" .sub_menu_sub_ssub").css("display")=="none")
		{
			$(" .sub_menu_sub_ssub").slideDown();
		}else{
			$(" .sub_menu_sub_ssub").slideUp();
		}
	});

		$(window).on("load resize scroll",function(){
			if ($(window).scrollTop()>500 && $(window).width()>580)
			{
				$(".sub_menu").css({"position":"fixed","transition":"0.3s","top":"110px"});
			}
			else if ($(window).scrollTop()>500 && $(window).width()<=580)
			{
				$(".sub_menu").css({"position":"fixed","transition":"0.3s","top":"60px"});
			}else{
				$(".sub_menu").css({"position":"absolute","transition":"0.3s","top":""});		
			}
		
		});
	AOS.init();
	  wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
     wow.init();
});