window.addEventListener('load', function() {
	//做前端判断 如果有cookie 就留在这个页面
	//如果没有cookie 就跳转回登录页面
	//判断
	if(document.cookie.indexOf("isLogin") === -1 ){
		//说明没有cookie
		location.href = "./login.html";
	}


	// 1. 获取关闭标签 
	var close = document.querySelector('#close');
	// 2. 接听点击  
	close.onclick = function(ev1) {
		// 直接删除   
		this.parentElement.remove();
		this.parentNode.remove();
		//隐藏   
		// this.parentElement.style.display = 'none';
		// this.parentElement.setAttribute('style', 'display:none');
	}
	/* 左侧隐藏菜单代码区 */
	var lis = document.querySelector('.menu').querySelectorAll('li');
	var lists = document.querySelectorAll('.lists')
	for (var i = 0; i < lis.length; i++) {
		lis[i].setAttribute('index', i);
		lis[i].onmouseover = function() {
			var index = this.getAttribute('index')
			for (var i = 0; i < lists.length; i++) {
				lists[i].style.display = ' '
			}
			lists[index].style.display = 'block'
		}
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].setAttribute('index', i);
		lis[i].onmouseout = function() {
			var index = this.getAttribute('index')
			for (var i = 0; i < lists.length; i++) {
				lists[i].style.display = ' '
			}
			lists[index].style.display = 'none'
		}
	}


	/* 轮播图效果代码区 */
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	var focus = document.querySelector('.focus');
	console.log(focus)
	var focusWidth = focus.offsetWidth;
	console.log(focusWidth)
	//  动态生成小圆圈  有几张图片，就生成几个小圆圈
	var ul = focus.querySelector('ul');
	var ol = focus.querySelector('.circles');
	for (var i = 0; i < ul.children.length; i++) {
		var li = document.createElement('li');
		li.setAttribute('index', i);
		ol.appendChild(li);
		li.addEventListener('click', function() {
			for (var i = 0; i < ol.children.length; i++) {
				ol.children[i].className = '';
			}
			this.className = 'current1';
			var index = this.getAttribute('index');
			num = index;
			circle = index;
			// console.log(focusWidth);
			console.log(index);
			animate(ul, -index * focusWidth);
		})
	}
	ol.children[0].className = 'current1';
	console.log(ol.children[0])
	var first = ul.children[0].cloneNode(true);
	var num = 0;
	var circle = 0;
	var flag = true;

	// 右侧按钮
	next.addEventListener('click', function() {
		if (flag) {
			flag = false;
			if (num == ul.children.length - 1) {
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul, -num * focusWidth, function() {
				flag = true;
			});
			circle++;
			if (circle == ol.children.length) {
				circle = 0;
			}
			circleChange();
		}
	});

	// 左侧按钮
	prev.addEventListener('click', function() {
		if (flag) {
			flag = false;
			if (num == 0) {
				num = ul.children.length - 1;
				ul.style.left = -num * focusWidth + 'px';

			}
			num--;
			animate(ul, -num * focusWidth, function() {
				flag = true;
			});
			circle--;
			circle = circle < 0 ? ol.children.length - 1 : circle;
			circleChange();
		}
	});

	function circleChange() {
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = '';
		}
		ol.children[circle].className = 'current1';
	}
	var timer = setInterval(function() {
		next.click();
	}, 3000);

	/* 右侧新闻推荐切换栏 */
	var part1 = document.querySelector('.news_rtitle').querySelector('.part1');
	var part2 = document.querySelector('.news_rtitle').querySelector('.part2');
	var news_list_one = document.querySelector('.news_list_one');
	var news_img = document.querySelector('.news_img');
	var news_list_two = document.querySelector('.news_list_two');

	part2.addEventListener('click', function() {
		news_img.style.display = 'none';
		news_list_one.style.display = 'none';
		news_list_two.style.display = 'block';
		part2.className = 'line'
		part1.className = ' noline'
	})
	part1.addEventListener('click', function() {
		news_img.style.display = 'block';
		news_list_one.style.display = 'block';
		news_list_two.style.display = 'none';
		part1.className = 'line'
		part2.className = ' noline'
	})

// 返回顶部
	var goBack = document.querySelector('.goBack');
	var box = document.querySelector('.box');
	var m = document.querySelector('.news_exp');
	console.log(box.offsetTop);
	console.log(window.pageYOffset);
	window.addEventListener('scroll', function() {
		if (window.pageYOffset >= box.offsetTop) {
			goBack.style.display = 'block';
		} else {
			goBack.style.display = 'none';
		}
	})
	goBack.addEventListener('click', function() {
		// window.scroll(0, 0);
		animation(window, 0);
	})
	//缓动动画
	function animation(obj, target, callback) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var step = (target - window.pageYOffset) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if (window.pageYOffset == target) {
				clearInterval(obj.timer);
				if (callback) {
					callback();
				}
			}
			// obj.style.left = window.pageYOffset + step + 'px';

			window.scroll(0, window.pageYOffset + step);
		}, 20)
	}


})
