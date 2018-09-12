$(document).ready(function(){

	ww=$(window).width();
	hh=$(window).height()-130;
	hhh=$(window).height();
	$(".main_banner").css({"width":ww,"height":hh});
	$(".video_bbg").css({"width":ww,"height":hh});
	$(window).on("load resize",function(){	
		$(".more_view").hide();
		ww=$(window).width();
		hh=$(window).height()-130;
		hhh=$(window).height();
		$(".main_banner").css({"width":ww,"height":hh});
		$(".video_bbg").css({"width":ww,"height":hhh});
		if ($(window).width()<481)
		{	
			$(".more_view").show();
			m_v=$(".grid-item").height()*2;
			m_v2=$(".grid").height();
			$(".gallery").css({"height":m_v,"overflow":"hidden"});
			$(".more_view").click(function(){
				$(".gallery").css({"height":m_v2,"oveflow":"visible"});
				$(this).css("display","none");
			});
		
		}else{
			$(".gallery").css({"height":""});
		}
	});
$(".q_menu").hide();
$(".quick_menu").click(function(){
	if ($(".q_menu").css("display")=="none")
	{

		$(this).css({"transform":"rotate(-360deg)","transition":"1.5s"});
		$(".q_menu").show();
	}else{
		$(".q_menu").hide();
		$(this).css({"transform":"rotate(0deg)","transition":"1.5s"});
	}
});

$("#example,.main_banner").vegas({
	//cover:'false',
	delay:6000,
	align:'center',
	valign:'bottom',
	color:'#419DD5',
    slides: [
        { src: "img/slide01.png"},
        { src: "img/slide02.jpg" },
        { src: "img/slide03.png" },
        { src: "img/slide04.jpg" }
    ]
	});

	$("#toggle").click(function(){
		if ($(".radiate li:first-child").css("opacity")=="1")
		{
			$(".sp_01").show();
		}else{
			$(".sp_01").hide();
		}
		
	});
	
	$(".video_play").click(function(){
		$(".video_bbg").slideDown();
		$(".video_bbg video").slideDown();
	});
	$(".video_bbg .close").click(function(){
		$(this).parent().slideUp();
		$(this).siblings().slideUp();
	});

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	});
	// layout Masonry after each image loads
		$grid.imagesLoaded().progress( function() {
		$grid.masonry();
	});  //garlley

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
});//doc
