$(function(){
	//回到顶部
	$(document).scroll(function(){
		console.log(888888);
		 var top=$(document).scrollTop();  
            if(top<300){  
                $('.gotop').hide();  
            }  
            else{  
                $('.gotop').show();  
            } 
	});
	$('.gotop').on('click',function(){
		$('body,html').animate({scrollTop:0},300); 
	})
	$(".help-page p a").on("click",function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active').siblings().removeClass('active');
		}
	})
	 $(".gouseone").on("click",function(){
   	  window.location.href = 'useone.html';
   })
   $(".goduizhang").on("click",function(){
   	  window.location.href = 'duizhang.html';
   })
   $(".goxinyongrongzhi").on("click",function(){
   	  window.location.href = 'xinyongrongzhi.html';
   })
   $(".godianzizhengshu").on("click",function(){
   	  window.location.href = 'dianzizhengshu.html';
   })
})
