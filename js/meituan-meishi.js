
// 滚动弹跳效果 
// jQuery(function($){	
// 	var flag = false;
// 	$('.meishi-list').on('click','li',function(){		
// 		var idx = $(this).index();
// 		// $('.menulist').slideDown();	
// 		if(flag == true){
// 			$('.menu').hide().eq(idx).slideDown();
// 		}else{
// 			$('.menu').hide();
// 		}		
// 	});
// });
jQuery(function($){
	var myScrollLeft,myScrollRight,myScroll2,myScroll3,myScroll4;
	var flag = false;
	$('.meishi-list li').eq(0).on('click',function(){
		if($('.menu1').is(':hidden')){
			$('.menu2').hide();
			$('.menu3').hide();
			$('.menu4').hide();
			$('.menu1').slideDown();
			$('.bgcolor').show();
			//在下拉列表展开时初始化iscroll
			myScrollLeft = new IScroll('#menu1-left', { bounceEasing: 'elastic', bounceTime: 1200 });	
			myScrollRight = new IScroll('#menu1-right', { bounceEasing: 'elastic', bounceTime: 1200 });	
		}else{
			$('.bgcolor').hide();
			$('.menu1').slideUp();
			//在下拉列表收起时销毁iscroll
			myScrollLeft.destroy();
			myScrollLeft = null;
			myScrollRight.destroy();
			myScrollRight = null;
		}
		
	});
	$('.meishi-list li').eq(1).on('click',function(){
		if($('.menu2').is(':hidden')){
			$('.menu1').hide();
			$('.menu3').hide();
			$('.menu4').hide();
			$('.menu2').slideDown();
			$('.bgcolor').show();
			//在下拉列表展开时初始化iscroll
			myScroll2 = new IScroll('#menu2', { bounceEasing: 'elastic', bounceTime: 1200 });	
		}else{
			$('.bgcolor').hide();
			$('.menu2').slideUp();
			//在下拉列表收起时销毁iscroll
			myScroll2.destroy();
			myScroll2 = null;						
		}
		
	});
	$('.meishi-list li').eq(2).on('click',function(){
		if($('.menu3').is(':hidden')){
			$('.menu1').hide();
			$('.menu2').hide();
			$('.menu4').hide();
			$('.menu3').slideDown();
			$('.bgcolor').show();
			//在下拉列表展开时初始化iscroll
			myScroll3 = new IScroll('#menu3', { bounceEasing: 'elastic', bounceTime: 1200 });	
		}else{
			$('.bgcolor').hide();
			$('.menu3').slideUp();
			//在下拉列表收起时销毁iscroll
			myScroll2.destroy();
			myScroll2 = null;						
		}
		
	});
	$('.meishi-list li').eq(3).on('click',function(){
		if($('.menu4').is(':hidden')){
			$('.menu1').hide();
			$('.menu2').hide();
			$('.menu3').hide();
			$('.menu4').slideDown();
			$('.bgcolor').show();
			//在下拉列表展开时初始化iscroll
			myScroll4 = new IScroll('#menu4', { bounceEasing: 'elastic', bounceTime: 1200 });	
		}else{
			$('.bgcolor').hide();
			$('.menu4').slideUp();
			//在下拉列表收起时销毁iscroll
			myScroll4.destroy();
			myScroll4 = null;						
		}
		
	});
});
//返回顶部
jQuery(function($){
	var $window = $(window);
	var $top = $('.gotoTop');
		//给window绑定滚动事件
    $window.scroll(function(){				
		if($window.scrollTop() > 180){
	      	//当滚动条滚到大于180时，开始固定
	       	$top.show(); 			       			       			        
      	}else{
       		$top.hide();
      	}		      
    });
    $top.on('click',function(){
    	$('body').animate({'scrollTop':0},100);
    });
});	    
