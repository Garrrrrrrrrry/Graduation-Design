<?php
//接收前端传递过来的数据
$username = $_POST["username"];
$phonenum = $_POST["phonenum"];
$password = $_POST["password"];

// 连接数据库
$conn = mysqli_connect("localhost", "root", "123456", "graduation_project");


//定义查询语句
$select_SQL = "SELECT *FROM students WHERE username='$username' and phonenum='$phonenum' and password='$password'";

//是否查询到
$result = mysqli_query($conn, $select_SQL);
// var_dump($result);

// 获取结果集中的数据条数
$num = mysqli_num_rows($result);
// echo $num;

//根据条数做判断
if($num == 1){
    //查到了
    //添加cookie
    setcookie("isLogin","1",time() + 3600, "/",);
    echo json_encode(array("error" => 0,"data" =>"登陆成功"));
}else{
    //没查到
    echo json_encode(array("error" => 1,"data" =>"登陆失败"));
}
    
?>