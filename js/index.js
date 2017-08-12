$(function(){
	var mySwiper1 = new Swiper ('#swiper-container1', {
    	pagination : '#pagination1',
    	paginationClickable :true,
        autoplay: 5000,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		onSlideChangeEnd: function(swiper){
	      var _index = swiper.activeIndex; //切换结束时，告诉我现在是第几个slide
	      $(".pagationBox").children('img').removeClass('active').eq(_index).addClass('active');
	    }
    })
	$(".pagationBox img").on("click",function(){ //点击缩略图控制swiper的显示
		var _index = $(this).index();
		mySwiper1.slideTo(_index, 300, false);//切换到第一个slide，速度为300毫秒
		$(".pagationBox").children('img').removeClass('active').eq(_index).addClass('active');
	})
	$(".tools-top span").hover(function(){
		var _index = $(this).index();
		if(_index!=4){
			$(".tools-bottom").children('li').removeClass('show').eq(_index).addClass('show');
			if(!$(".tools-leftbg").hasClass('active')){
				$(".tools-leftbg").addClass("active");
			}			
		}else{
			$(".tools-bottom").children('li').removeClass('show');
			if($(".tools-leftbg").hasClass('active')){
				$(".tools-leftbg").removeClass("active");
			}
		}		
	})
	$(".tools-box").on('mouseleave',function(){
		$(".tools-bottom").children('li').removeClass('show');
		if($(".tools-leftbg").hasClass('active')){
			$(".tools-leftbg").removeClass("active");
		}
	})
})
