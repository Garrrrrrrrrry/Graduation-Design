window.addEventListener('load', function() {
	// 1. 获取关闭标签 
	var close = document.querySelector('#close');
	// 2. 接听点击  
	close.onclick = function(ev1) {
		// 直接删除   //
		this.parentElement.remove();
		this.parentNode.remove();
		//隐藏   
		// this.parentElement.style.display = 'none';
		// this.parentElement.setAttribute('style', 'display:none');
	}
	
})

// 导航条移动效果
$(function(){
  $(window).scroll(function(){
      $offset = $('.placeholder').offset();
      if($(window).scrollTop()>$offset.top){
          $('.catalog').css({
          'position':'fixed',
          'top':'200px',
          'left':$offset.left+'px',
          'z-index':'999'
          });    
      }else{
          $('.catalog').removeAttr('style');
      }
  });
})

//鼠标点击变色
window.onload = function(){
    var circles = document.querySelectorAll('.icon-chongwu')
    console.log(circles);
    var items = document.querySelector('.catalog').querySelectorAll('a')
   console.log(items);
    for(var i=0; i<circles.length; i++) {
      items[i].setAttribute('index',i);
      items[i].onclick=function(){
          var index=this.getAttribute('index')
          for(var i=0;i<circles.length;i++){
               circles[i].style.color=' black'
          }
          circles[index].style.color='darkorange'
       }
  }
  }