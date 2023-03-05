window.addEventListener('load', function () {
    var div = document.querySelector('.change');
    var btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        location.href = 'login.html';
    })
    var timer = 5;
    this.setInterval(function () {
        if (timer == 0) {
            location.href = 'login.html';
        } else {
            div.innerHTML = '<b>' + timer + '</b>&nbsp;秒后自动跳转至登录界面......';
            timer--;
        }
    }, 1000);
})