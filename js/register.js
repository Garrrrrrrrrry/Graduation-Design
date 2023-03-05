$(function () {

    var registe = document.getElementById('registe');
    var usernameInput = document.getElementById("name")
    var phonenumInput = document.getElementById("phone")
    var passwordInput = document.getElementById("password")
    var repasswordInput = document.getElementById("repassword")

    registe.onclick = function(){
    //获取用户输入的信息
    var username = usernameInput.value;
    var phonenum = phonenumInput.value;
    var password = passwordInput.value;
    var repassword = repasswordInput.value;

    // console.log(username)
    // console.log(phonenum)
    // console.log(password)
    // console.log(repassword)

    //发送ajax到接口
    $.post("./register.php", {username: username, phonenum: phonenum ,password: password, repassword: repassword},function(data){
    console.log(data);

    if(data.error === 0){
        //登录成功
        location.href = 'register_succeed.html';
    }else{
        alert("用户名已经存在!请换个用户名");
        // location.href = "login.html";
    }
 },"json")
    
}


    // 用户名验证
    $("#name").on("blur", function () {
        testName();
    })
    function testName() { 
        $("#nameReg").removeClass()
        var user = $("#name").val();
        var userReg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
        $("#nameReg").html("");
        if (!userReg.test(user)) {
            $("#nameReg").html("<img src='icon/error.png' />用户名输入错误").addClass("error");
            return false;
        }
        $("#nameReg").html("<img src='icon/ok.png' />");
        return true;
     }
    
    // 手机号码验证
    $("#phone").on("blur", function () {
       testPhone();
    })
    function testPhone() {
        $("#phoneReg").removeClass()
        var phone = $("#phone").val();
        var phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        $("#phoneReg").html("");
        if (!phoneReg.test(phone)) {
            $("#phoneReg").html("<img src='icon/error.png' />手机号有误").addClass("error");
            return false;
        }
        $("#phoneReg").html("<img src='icon/ok.png' />");
        return true;
    }

    // 密码验证
    $("#password").on("blur", function () {
        testPassword();
    })
    function testPassword() { 
        $(".safe").show();
        $("#passwordReg").removeClass()
		var numBer = $("#num").val();
		var userName = $("#name").val();
        var password = $("#password").val();
		
        var passwordReg = /^\w{4,16}$/;
        var ruoReg = /^\d{4,16}$/;
        var zhongReg = /^[^A~Z_]{4,16}$/;// 英文字母,数字或者下划线,长度为4-16个字符
        var qiangReg = /^\w{4,16}$/;
        $("#passwordReg").html("");
        if (!passwordReg.test(password)) {
            $("#passwordReg").html("<img src='icon/error.png' />密码长度在4-16之间").addClass("error");
            $(".safe").hide();
            return false;
        }
        if (ruoReg.test(password)) {
            $(".safe").children(".ruo").show().siblings().hide();
        }
        else if (zhongReg.test(password)) {
            $(".safe").children(".zhong").show().siblings().hide();
        }
        else if (qiangReg.test(password)) {
            $(".safe").children(".qiang").show().siblings().hide();
        }
        return true;
     }

    // 确认密码
    $("#repassword").on("blur", function () {
        testRepassword();
    })
    function testRepassword() { 
        $("#repasswordReg").removeClass();
        var password = $("#password").val();
        var repassword = $("#repassword").val();
        pwdBoolean = testPassword();
        $("#repasswordReg").html("");
        if (!pwdBoolean) {
            $("#repasswordReg").html("<img src='icon/error.png'/>请先输入正确密码");
            return false;
        }
        if (repassword != password) {
            $("#repasswordReg").html("<img src='icon/error.png' />两次密码不一致").addClass("error");
            $("#passwordReg").html("<img src='icon/error.png' />");
            return false;
        }
        $("#repasswordReg").html("<img src='icon/ok.png' />");
        $("#passwordReg").html("<img src='icon/ok.png' />");
        return true;
     }

     // 注册时再验证所有信息是否符合要求
    $("#registe").on("click", function () {
        if (
            testName() && testPhone() && testPassword() && testRepassword()
        ) {
            if (
				localStorage.getItem("phone") == $("#phone").val() &&
                localStorage.getItem("userName") == $("#name").val() &&
                localStorage.getItem("passWord") == $("#password").val()
            ) {
                alert("您已经注册，可以直接登陆");
                return false;

            } else {
				localStorage.setItem("phone",$("#phone").val());
                localStorage.setItem("userName", $("#name").val());
                localStorage.setItem("passWord", $("#password").val());
                location.href = "register_succeed.html";
            }
        } else {
            return false;
        }

    })
})