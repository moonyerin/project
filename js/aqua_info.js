$(document).ready(function(){
	$(window).on("load resize scroll",function(){
		if ($(window).scrollTop()<=150)
		{
			$("canvas").hide();
		}else{
			$("canvas").show();
		}
	});
	$(".waterwave-canvas").waterwave({

		  // parent container
		  parent : '',

		  // color of waves
		  color : '',

		  // or 'down'
		  direction: 'up',

		  // background color
		  background: ''
		  
		});

});//doc