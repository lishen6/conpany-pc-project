$(function(){
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
   
   
   //登录页链接
   $(".submit1").on("click",function(){
   	 window.location.href = "Sys_Main.html";
   })
   $(".submit2").on("click",function(){
   	 window.location.href = "login-repassword.html";
   })
   $(".go-login").on("click",function(){
   	 window.location.href = "login.html";
   })
   $(".go-login-phone").on("click",function(){
   	 window.location.href = "login-phone.html";
   })
   $(".go-login-company").on("click",function(){
   	 window.location.href = "login-company.html";
   })
   //注册页面的复选框
   $(".fuwuxieyi").on("click",function(){
   	  if(!$(this).hasClass('active')){
   	  	$(this).addClass('active');
   	  }else{
   	  	$(this).removeClass('active');
   	  }
   })
   $(".fuwuxieyi-btn").on("click",function(){
   	  $(".read-container").removeClass('hide');
   })
   $(".closed-btn").on("click",function(){
   	  $(".read-container").addClass('hide');
   })
})
