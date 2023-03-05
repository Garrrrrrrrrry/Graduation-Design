
window.addEventListener('load', function () {
    /* 放大镜 */
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigIMg = document.querySelector('.bigImg');
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';

    })

    /* 选项卡切换 */
    var tab_list = document.querySelector('.detail_tab_list');
    var lis = tab_list.querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            console.log(index);
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';
        }
    }

    
/* 评论输入框显示 */
    var btns = document.querySelectorAll('.fa-commenting-o');
    var responds = document.querySelectorAll('.respond');
    for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute('index', i);
        btns[i].onclick = function () {
            var index = this.getAttribute('index')
            for (var i = 0; i < responds.length; i++) {
                responds[i].style.display = ' '
            }
            responds[index].style.display = 'block'
        }

    }
/* 添加评论 */
    var submit = document.querySelector('#numtj').querySelector('button');
    var content = document.querySelector('textarea');
    var ul = document.querySelector('.consult');
    var time = new Date()
    var year = time.getFullYear()
    var mounth = time.getMonth() + 1
    var date = time.getDate()
    var hour = time.getHours()
    hour = hour < 10 ? '0' + hour : hour
    var minute = time.getMinutes()
    minute = minute < 10 ? '0' + minute : minute
    var second = time.getSeconds()
    second = second < 10 ? '0' + second : second
    submit.onclick = function () {
        if (content.value == '') {
            alert('抱歉！内容不能为空！');
            return false;
        } else {
            var li = document.createElement('li')
            li.innerHTML = content.value + "<div class='new'><span>" + year + '/' + mounth + '/' + date + '\t' + hour + ':' + minute + ':' + second + "</span><a href='javascript:;'>删除</a></div>"
            li.className = 'current2'
            ul.insertBefore(li, ul.children[0])
            content.value = ' ';
            var as = document.querySelectorAll('a')
            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function () {
                    ul.removeChild(this.parentNode.parentNode)
                }
            }
        }
    }
/* 评论字数限制 */
    $(document).ready(function () {
        var text = $("textarea").val();
        console.log(text)
        var counter = text.length;
        $("var").text(100 - counter);
        $(document).keyup(function () {
            var text = $(".respond textarea").val();
            var counter = text.length;
            if (counter >= 100) {
                $("var").text("对不起，输入的字符超长了！");
                $("textarea").prop("disable", true);
            }
            else
                $("var").text(100 - counter);
        });
    });
})
