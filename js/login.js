// function login() {
//     if (
// 		localStorage.getItem("phone") == $("#phone").val() &&
//         localStorage.getItem("userName") == $("#user").val() &&
//         localStorage.getItem("passWord") == $("#pwd").val()
//         ) {
//         alert("登录成功!");
//         location.href = "home.html";
//     } else {
//         alert("用户名或密码错误!");
//     }
// }


//实现登录功能
//1.用户输入用户名和密码
//2.当点击提交按钮的时候 发送ajax请求 到服务器申请登录
//3.如果登录成功跳转到 home.html页面 如果登录失败 停留在当前页面并提示用户

var login = document.getElementById('login');
var usernameInput = document.getElementById("user")
var phonenumInput = document.getElementById("phone")
var passwordInput = document.getElementById("pwd")

login.onclick = function(){
    //获取用户输入的用户名、电话、密码
    var username = usernameInput.value;
    var phonenum = phonenumInput.value;
    var password = passwordInput.value;

    // console.log(username)
    // console.log(phonenum)
    // console.log(password)

    //发送ajax到登录接口
    $.post("./login.php", {username: username, phonenum: phonenum ,password: password},function(data){
        console.log(data);
        if(data.error === 0){
            //登录成功
            alert("登录成功!");
            location.href = 'home.html';
        }else{
            alert("用户名或密码错误!");
        }
    },"json")
}

