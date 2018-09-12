$(document).ready(function(){
	$(window).on("load resize scroll",function(){
		 if ($(".header").css("position")=="fixed" && $(window).width()>580)
		{
			$(".header").css("height","110px").css("transition","1s");
			$(".header .logo").css({"width":"","top":"0px","margin-left":"","height":""});
			$(".mo_sub").hide();	
			$(".hmbrgr.demo").removeClass("cross expand");
			$(".hmbrgr.demo span:first-child").css("top","0px");
			$(".hmbrgr.demo span:last-child").css("top","25px");
		}		
		else if ($(window).width()>580)
		{
			$(".hmbrgr.demo").removeClass("cross expand");
			$(".hmbrgr.demo span:first-child").css("top","0px");
			$(".hmbrgr.demo span:last-child").css("top","25px");
			$(".mo_sub").hide();	
			$(".header").css({"height":"130px"}).css("transition","1s");
			$(".header .logo").css({"width":"","top":"","margin-left":"","height":""});
		}
		else{
			$(".header").css({"height":"60px"});
			$(".header .logo").css({"width":"130px","top":"0px","margin-left":"-65px","height":"60px"});
			$(".all").hide();
			$(".all_view").css("background-image","url('img/bar.png')");
		}
	});
	$(".all").hide();
$(window).scroll(function(e){

		if ($(window).scrollTop()>=150 && $(window).width()>580)
		{
			$(".header").css({"position":"fixed","height":"110px"}).css("transition","1s");
			$(".header .logo").css({"background-size":"80%","top":"0px","transition":"1s","width":"160px","height":"75px","margin-left":"-80px"});
			$(".all").css("top","110px");
		}
		else if($(window).scrollTop()< 150 && $(window).width()>580)
		{
			$(".header").css({"position":"relative","height":"130px"}).css("transition","1s");	
			$(".header .logo").css({"background-size":"","top":"","transition":"0.5s","width":"","height":"","margin-left":""});
			$(".all").css("top","130px");
		}else if($(window).scrollTop()< 150 && $(window).width()<=580){
			$(".header").css({"position":"relative","height":"60px"});
		}else{
			$(".header").css({"position":"fixed","height":"60px"});
		}
	});

	$(".all_view").click(function(){

		if ($(".all").css("display")=="none")
		{		
			$(this).css("background-image","url('img/cancel.png')");
			$(".all").slideDown();
		}else{
			$(this).css("background-image","url('img/bar.png')");
			$(".all").slideUp();
		}
	});
	$('.hmbrgr.demo').hmbrgr({

	// width/height of hamburger icon
	width     : 35,
	height    : 30,

	// animation speed
	speed     : 200,

	// height
	barHeight : 5,

	// radius
	barRadius : 0,

	// color
	barColor  : '#009BC7',

	// animation type
	animation : 'expand',

	});
$(".mo_sub").hide()
$('.hmbrgr.demo').click(function(){
	if ($(".mo_sub").css("display")=="none")
	{
		$(".mo_sub").slideDown();
	}else{
		$(".mm_sub li").css({"background":"none","color":"#fff"});
		$(".mo_sub").slideUp();	
		$(".m_sub").css("width","100%");
		$(".sub").hide()
	}
	});
$(".sub_1").hide();
$(".sub_2").hide();
$(".sub_3").hide();
$(".sub_01").click(function(){
		if ($(".sub_1").css("display")=="none")
		{
			$(".mm_sub li").css({"background":"none","color":"#fff"});
			$(".sub").hide();	
			$(".m_sub").css("width","50%");
			$(this).css({"background":"#fff url(img/right-arrow.png) no-repeat center right","background-size":"20px","color":"#000"});
			$(".sub_1").fadeIn(700);	
		}else{
			$(".m_sub").css("width","100%");
			$(this).css({"background":"none","color":"#fff"});
			$(".sub").hide();	
		}
	});
$(".sub_02").click(function(){
		if ($(".sub_2").css("display")=="none")
		{			
			$(".mm_sub li").css({"background":"none","color":"#fff"});
			$(".sub").hide();	
			$(".m_sub").css("width","50%");
			$(this).css({"background":"#fff url(img/right-arrow.png) no-repeat center right","background-size":"20px","color":"#000"});
			$(".sub_2").fadeIn(700);	

		}else{
			$(".m_sub").css("width","100%");
			$(this).css({"background":"none","color":"#fff"});
			$(".sub").hide();		
		}
	});
$(".sub_03").click(function(){
		if ($(".sub_3").css("display")=="none")
		{			
			$(".mm_sub li").css({"background":"none","color":"#fff"});
			$(".sub").hide();	
			$(".m_sub").css("width","50%");
			$(this).css({"background":"#fff url(img/right-arrow.png) no-repeat center right","background-size":"20px","color":"#000"});
			$(".sub_3").fadeIn(700);	
		}else{
			$(".m_sub").css("width","100%");
			$(this).css({"background":"none","color":"#fff"});
			$(".sub").hide();		
		}
	});
});//doc